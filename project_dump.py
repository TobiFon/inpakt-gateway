#!/usr/bin/env python3

import os
from pathlib import Path
from datetime import datetime

# ==========================================================
# CONFIGURATION
# ==========================================================

ROOT = Path(__file__).resolve().parent
OUTPUT_FILE = ROOT / "project_dump.txt"

# Directories to completely ignore
IGNORE_DIRS = {
    "node_modules",
    ".next",
    ".git",
    ".vercel",
    ".turbo",
    ".cache",
    ".pytest_cache",
    "__pycache__",
    ".mypy_cache",
    ".ruff_cache",
    "dist",
    "build",
    "coverage",
    "out",
    "vendor",
    "venv",
    ".venv",
    "env",
    ".idea",
    ".vscode",
    "playwright-report",
    "test-results",
}

# Files to ignore
IGNORE_FILES = {
    "project_dump.txt",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "bun.lockb",
    "bun.lock",
    ".DS_Store",
    "Thumbs.db",
}

# File extensions to include
INCLUDE_EXTENSIONS = {
    ".js", ".jsx", ".ts", ".tsx",
    ".mjs", ".cjs",
    ".json", ".jsonc",
    ".css", ".scss", ".sass",
    ".html",
    ".md", ".mdx",
    ".py",
    ".sh",
    ".sql",
    ".prisma",
    ".graphql", ".gql",
    ".yaml", ".yml",
    ".toml",
    ".xml",
    ".svg",
    ".txt",
    ".env.example",
    ".gitignore",
    ".dockerignore",
    ".config",
}

# Important files without extensions or with special names
INCLUDE_FILES = {
    "Dockerfile",
    "Makefile",
    "Procfile",
    "README",
    "LICENSE",
    "next.config.js",
    "next.config.mjs",
    "next.config.ts",
    "next.config.tsx",
    "postcss.config.js",
    "tailwind.config.js",
    "middleware.ts",
    "middleware.js",
    "instrumentation.ts",
    "components.json",
    "tsconfig",
    "jsconfig",
}

# Sensitive files and patterns to exclude
SENSITIVE_FILES = {
    ".env",
    ".env.local",
    ".env.development",
    ".env.production",
    ".env.test",
    ".npmrc",
    ".pypirc",
    "credentials.json",
    "service-account.json",
    "id_rsa",
    "id_ed25519",
}

MAX_FILE_SIZE = 500 * 1024  # 500 KB


# ==========================================================
# HELPERS
# ==========================================================

def should_ignore_file(path: Path) -> bool:
    name = path.name

    if name in IGNORE_FILES:
        return True

    if name in SENSITIVE_FILES:
        return True

    if name.startswith(".env.") and name != ".env.example":
        return True

    if name.endswith((".pem", ".key", ".p12", ".pfx")):
        return True

    if name.endswith((".log", ".lock")):
        return True

    if path.is_symlink():
        return True

    if path.stat().st_size > MAX_FILE_SIZE:
        return True

    return False


def should_include_file(path: Path) -> bool:
    if should_ignore_file(path):
        return False

    name = path.name

    if name in INCLUDE_FILES:
        return True

    if name.endswith(".env.example"):
        return True

    if path.suffix.lower() in INCLUDE_EXTENSIONS:
        return True

    return False


def collect_files(directory: Path):
    files = []

    for current_root, dirs, filenames in os.walk(directory):
        current_path = Path(current_root)

        # Prune ignored directories
        dirs[:] = sorted(
            d for d in dirs
            if d not in IGNORE_DIRS
            and not d.startswith(".next")
            and not (current_path / d).is_symlink()
        )

        for filename in sorted(filenames):
            file_path = current_path / filename

            if should_include_file(file_path):
                files.append(file_path)

    return sorted(files)


# ==========================================================
# DIRECTORY TREE
# ==========================================================

def generate_tree(directory: Path, prefix=""):
    lines = []

    try:
        entries = sorted(
            [
                p for p in directory.iterdir()
                if (
                    (p.is_dir() and p.name not in IGNORE_DIRS
                     and not p.is_symlink())
                    or (p.is_file() and should_include_file(p))
                )
            ],
            key=lambda p: (not p.is_dir(), p.name.lower())
        )
    except PermissionError:
        return lines

    for index, entry in enumerate(entries):
        is_last = index == len(entries) - 1

        connector = "└── " if is_last else "├── "
        lines.append(prefix + connector + entry.name)

        if entry.is_dir():
            extension = "    " if is_last else "│   "
            lines.extend(
                generate_tree(entry, prefix + extension)
            )

    return lines


# ==========================================================
# MAIN EXPORT
# ==========================================================

def main():
    print("Collecting project files...")

    files = collect_files(ROOT)

    with OUTPUT_FILE.open("w", encoding="utf-8") as output:

        output.write("=" * 80 + "\n")
        output.write("PROJECT SOURCE CODE EXPORT\n")
        output.write("=" * 80 + "\n\n")

        output.write(f"Project: {ROOT.name}\n")
        output.write(f"Generated: {datetime.now()}\n")
        output.write(f"Total included files: {len(files)}\n\n")

        # Folder structure
        output.write("\n")
        output.write("=" * 80 + "\n")
        output.write("PROJECT DIRECTORY STRUCTURE\n")
        output.write("=" * 80 + "\n\n")

        output.write(ROOT.name + "/\n")

        for line in generate_tree(ROOT):
            output.write(line + "\n")

        # File contents
        output.write("\n\n")
        output.write("=" * 80 + "\n")
        output.write("PROJECT FILE CONTENTS\n")
        output.write("=" * 80 + "\n")

        for index, file_path in enumerate(files, start=1):

            relative_path = file_path.relative_to(ROOT)

            output.write("\n\n")
            output.write("#" * 80 + "\n")
            output.write(f"FILE {index}: {relative_path}\n")
            output.write("#" * 80 + "\n\n")

            output.write(f"--- BEGIN FILE: {relative_path} ---\n\n")

            try:
                content = file_path.read_text(
                    encoding="utf-8",
                    errors="replace"
                )

                output.write(content)

                if not content.endswith("\n"):
                    output.write("\n")

            except Exception as error:
                output.write(f"[ERROR READING FILE: {error}]\n")

            output.write(f"\n--- END FILE: {relative_path} ---\n")

    print("\nExport completed successfully!")
    print(f"Files included: {len(files)}")
    print(f"Output: {OUTPUT_FILE}")


if __name__ == "__main__":
    main()