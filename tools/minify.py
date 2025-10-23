#!/usr/bin/env python3
"""Simple CSS and JS minifier for static assets.

This intentionally focuses on the small footprint of this project and avoids
external dependencies.
"""
from __future__ import annotations

import argparse
import pathlib
import re
from typing import Callable


def minify_css(text: str) -> str:
  text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
  text = re.sub(r"\s+", " ", text)
  text = re.sub(r"\s*([{}:;,>])\s*", r"\1", text)
  text = re.sub(r";}", "}", text)
  return text.strip()


def _strip_js_comments(text: str) -> str:
  text = re.sub(r"//.*", "", text)
  text = re.sub(r"/\*.*?\*/", "", text, flags=re.S)
  return text


def minify_js(text: str) -> str:
  text = _strip_js_comments(text)
  result: list[str] = []
  in_string = False
  string_char = ""
  prev_char = ""

  for char in text:
    if in_string:
      result.append(char)
      if char == string_char and prev_char != "\\":
        in_string = False
    else:
      if char in {'"', "'", "`"}:
        in_string = True
        string_char = char
        result.append(char)
      elif char in "\n\r\t":
        if result and result[-1] not in " ({[\n":
          result.append(" ")
      elif char == " ":
        if result and result[-1] not in " ({[":
          if result[-1] != " ":
            result.append(" ")
      else:
        result.append(char)
    prev_char = char

  text = "".join(result)
  text = re.sub(r"\s*([{}\[\]()<>!=:+%&|^?;,/*-])\s*", r"\1", text)
  text = re.sub(r"\s+", " ", text)
  return text.strip()


def build_parser() -> argparse.ArgumentParser:
  parser = argparse.ArgumentParser(description="Minify CSS or JS files")
  parser.add_argument("source", type=pathlib.Path)
  parser.add_argument("destination", type=pathlib.Path)
  parser.add_argument("--type", choices=["css", "js"], required=True)
  return parser


def main() -> None:
  parser = build_parser()
  args = parser.parse_args()

  text = args.source.read_text(encoding="utf-8")
  minifier: Callable[[str], str] = minify_css if args.type == "css" else minify_js
  minified = minifier(text)
  args.destination.write_text(minified, encoding="utf-8")


if __name__ == "__main__":
  main()
