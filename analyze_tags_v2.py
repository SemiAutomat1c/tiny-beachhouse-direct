import re
import sys

def analyze_jsx(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()

    stack = []
    # Regex to find opening and closing tags for div, section, article
    # Handling attributes, self-closing, etc.
    tag_pattern = re.compile(r'<(div|section|article|p)\b[^>]*?(/?\s*)>|<\/(div|section|article|p)>')

    for i, line in enumerate(lines, 1):
        for match in tag_pattern.finditer(line):
            tag_text = match.group(0)
            if tag_text.startswith('</'):
                # Closing tag
                tag_name = tag_text[2:-1]
                if not stack:
                    print(f"Error: Unexpected closing tag </{tag_name}> at line {i}")
                else:
                    open_tag, open_line = stack.pop()
                    if open_tag != tag_name:
                        print(f"Error: Mismatched closing tag </{tag_name}> at line {i} (expected </{open_tag}> from line {open_line})")
            elif tag_text.endswith('/>'):
                # Self-closing tag
                continue
            else:
                # Opening tag
                # Check for self-closing in group 2
                if match.group(2) and '/' in match.group(2):
                    continue
                tag_name = match.group(1)
                stack.append((tag_name, i))

    if stack:
        print("\nRemaining open tags:")
        for tag, line in stack:
            print(f"<{tag}> at line {line}")

if __name__ == "__main__":
    analyze_jsx('src/pages/Index.tsx')
