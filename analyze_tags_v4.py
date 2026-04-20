import re

def analyze_jsx_step(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    tag_pattern = re.compile(r'<(div|section|article|p|span|h[1-6]|button|Link|a|iframe|img|AvailabilityBar|BookDirectBanner|Lightbox)\b.*?>|<\/(div|section|article|p|span|h[1-6]|button|Link|a|iframe|img|AvailabilityBar|BookDirectBanner|Lightbox)>', re.DOTALL)

    stack = []
    
    # We need to find tags while keeping track of current line
    pos = 0
    while pos < len(content):
        match = tag_pattern.search(content, pos)
        if not match:
            break
        
        tag_text = match.group(0).strip()
        start, end = match.span()
        line_no = content[:start].count('\n') + 1
        
        if tag_text.startswith('</'):
            tag_name = tag_text[2:-1].strip()
            if stack and stack[-1][0] == tag_name:
                stack.pop()
            else:
                print(f"Error at line {line_no}: Unexpected or mismatched closing tag {tag_text}")
                if stack:
                    print(f"  (Stack top: {stack[-1][0]} from line {stack[-1][1]})")
                else:
                    print("  (Stack is empty)")
        elif tag_text.endswith('/>') or tag_text.startswith('<img') or tag_text.startswith('<iframe'):
            # Self-closing or special tags that don't need closing in HTML (though JSX needs them)
            # In Index.tsx, img and iframe are used as <img ... /> or <iframe ... />
            pass
        else:
            tag_name_match = re.match(r'<([a-zA-Z0-9]+)', tag_text)
            if tag_name_match:
                tag_name = tag_name_match.group(1)
                stack.append((tag_name, line_no))
        
        pos = end

    if stack:
        print("\nRemaining stack:")
        for tag, line in stack:
            print(f"<{tag}> at line {line}")

if __name__ == "__main__":
    import sys
    path = sys.argv[1] if len(sys.argv) > 1 else 'src/pages/Index.tsx'
    analyze_jsx_step(path)
