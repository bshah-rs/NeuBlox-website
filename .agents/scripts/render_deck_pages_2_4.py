from pathlib import Path
import sys

import fitz


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: render_deck_pages_2_4.py INPUT.pdf OUTPUT_DIR")

    source = Path(sys.argv[1])
    output_dir = Path(sys.argv[2])
    output_dir.mkdir(parents=True, exist_ok=True)

    with fitz.open(source) as document:
        if document.page_count < 4:
            raise SystemExit(f"Expected at least 4 pages; found {document.page_count}.")
        for page_number in range(2, 5):
            page = document[page_number - 1]
            output = output_dir / f"slide-{page_number}.png"
            page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False).save(output)
            print(f"Rendered slide {page_number}: {output}")


if __name__ == "__main__":
    main()
