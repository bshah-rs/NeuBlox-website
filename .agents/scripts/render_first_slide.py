from pathlib import Path
import sys

import fitz


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: render_first_slide.py INPUT.pdf OUTPUT.png")

    source = Path(sys.argv[1])
    output = Path(sys.argv[2])
    output.parent.mkdir(parents=True, exist_ok=True)

    with fitz.open(source) as document:
        if not document.page_count:
            raise SystemExit("The PDF has no pages.")
        page = document[0]
        pixmap = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        pixmap.save(output)
        print(f"Rendered page 1 of {document.page_count} pages: {output} ({pixmap.width}x{pixmap.height})")


if __name__ == "__main__":
    main()
