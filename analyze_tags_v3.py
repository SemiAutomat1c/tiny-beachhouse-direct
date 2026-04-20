import re

def analyze_jsx_full(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Find all tags (multiline included)
    # This regex is more complex to catch multiline start tags
    tag_pattern = re.compile(r'<(div|section|article|p|span|h[1-6]|button|Link|a|iframe|img|AvailabilityBar|BookDirectBanner|Lightbox)\b.*?>|<\/(div|section|article|p|span|h[1-6]|button|Link|a|iframe|img|AvailabilityBar|BookDirectBanner|Lightbox)>', re.DOTALL)

    stack = []
    matches = list(tag_pattern.finditer(content))
    
    for match in matches:
        tag_text = match.group(0).strip()
        
        # Check if it's a closing tag
        if tag_text.startswith('</'):
            tag_name = tag_text[2:-1].strip()
            if not stack:
                # Find line number
                line_no = content[:match.start()].count('\n') + 1
                print(f"Error: Unexpected closing tag {tag_text} at line {line_no}")
            else:
                open_tag, open_line, open_text = stack.pop()
                if open_tag != tag_name:
                    line_no = content[:match.start()].count('\n') + 1
                    print(f"Error: Mismatched closing tag {tag_text} at line {line_no}")
                    print(f"  (expected closing for {open_tag} from line {open_line}: {open_text[:50]}...)")
        # Check if it's self-closing
        elif tag_text.endswith('/>'):
            continue
        else:
            # It's an opening tag
            # Extract tag name
            tag_name_match = re.match(r'<([a-zA-Z0-9]+)', tag_text)
            if tag_name_match:
                tag_name = tag_name_match.group(1)
                line_no = content[:match.start()].count('\n') + 1
                stack.append((tag_name, line_no, tag_text))

    if stack:
        print("\nRemaining open tags:")
        for tag, line, text in stack:
            print(f"<{tag}> at line {line}: {text[:50]}...")

if __name__ == "__main__":
    analyze_jsx_full('src/pages/Index.tsx')
