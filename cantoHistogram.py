import json
import re
from itertools import chain, accumulate, islice
from typing import TypeVar, Optional, Iterator
from parse import parseTextToMorphemes
from tqdm import tqdm  # type: ignore

leading = re.compile(r'^([^aeiou0-9]+|[aeiou]+)')
sentences: list[str] = []

with open("yue_sentences.tsv", 'r') as fid:
  for line in fid.readlines():
    sentences.append(line.split('\t')[2].strip())


def textToCantonese(s: str) -> list[str]:
  ret: list[str] = []
  for m in parseTextToMorphemes(s):
    # pick just one even if there's two potential Cantonese readings
    # e.g., keoi5 or heoi5
    if len(m['cantoDefinitions']):
      # ret.append(m['cantoDefinitions'][0]['cantonese'])
      ret += m['cantoDefinitions'][0]['cantonese'].split(' ')
  return ret


T = TypeVar('T')


def count(l: Iterator[T]) -> dict[T, int]:
  d: dict[T, int] = dict()
  for x in l:
    d[x] = d.get(x, 0) + 1
  return d


def orderedCount(inlist: Iterator[T], asc=True) -> list[tuple[T, int]]:
  d = count(inlist)
  l: list[tuple[T, int]] = []
  for k in d:
    l.append((k, d[k]))
  l.sort(key=lambda v: v[1], reverse=not asc)
  return l


def getLeading(s: str) -> Optional[str]:
  m = leading.match(s)
  return m[0] if m else None


cantonese = list(chain.from_iterable([textToCantonese(x) for x in tqdm(sentences)]))
hist = orderedCount(filter(lambda x: x, map(getLeading, cantonese)), asc=False)
histFraction = [(s, n, n / len(cantonese)) for s, n in hist]

cumulative = islice(accumulate(histFraction, lambda a, b: a + b[2], initial=0.0), 1, None)
histCum = [a + (b,) for a, b in zip(histFraction, cumulative)]

with open('cantonese_histogram.json', 'w') as fid:
  json.dump(histCum, fid)