"""Run from any directory: python3 /path/to/build-template.py."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent
out = root / 'downloads' / 'classroom-template.zip'
out.parent.mkdir(exist_ok=True)
with ZipFile(out, 'w', ZIP_DEFLATED) as archive:
    for file in sorted(root.rglob('*')):
        if file.is_file() and file != out and not any(part.startswith('.') or part == '__pycache__' for part in file.relative_to(root).parts):
            archive.write(file, 'classroom-template/' + str(file.relative_to(root)))
print(out)
