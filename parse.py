from cccanto import CantoEntry, init as initDict
from readings import ReadingEntry, init as initReadings
from chinese import ChineseAnalyzer  # type: ignore
import cache_analysis_sqlite as sqlcache
import typing

class Morpheme(typing.TypedDict):
  hanzi: str

  # Jieba's hits per token, so at least 1, maybe more; all maybe None
  pinyins: list[typing.Optional[str]]
  definitions: list[typing.Optional[list[str]]]  # inner list: separate sub-meanings

  cantoDefinitions: list[CantoEntry]  # matched by hanzi
  cantoPinyins: list[ReadingEntry]  # also matched by hanzi but for comparison to pinyins
  # N.B., len(cantoDefinitions) might be != len(cantoPinyins)!

  merged: bool  # should default to false if from Jieba; when we create a new morpheme from multiple ones, set this to true
  hidden: bool  # should default to false if from Jieba; when a merged morpheme overshadows a Jieba morpheme, hide the latter
  guessed: bool  # should default to false if from Jieba

ChineseAnalyzerResult = typing.Any
analyzer = ChineseAnalyzer()  # this takes a while to initialize so do it only once
cache = sqlcache.init('analysis_cache.db')
readings = initReadings('cccedict-canto-readings-150923.txt')
cdict = initDict('cccanto-webdist.txt')

def cleanPinyin(pinyin: typing.Optional[list[str]]) -> typing.Optional[str]:
  if pinyin is None:
    return None
  return " ".join(pinyin)

def initMorpheme(hanzi: str,
                 cantoDefinitions=[],
                 cantoPinyins=[],
                 merged=False,
                 hidden=False,
                 guessed=False) -> Morpheme:
  return Morpheme(
      hanzi=hanzi,
      pinyins=[],
      definitions=[],
      cantoDefinitions=cantoDefinitions,
      cantoPinyins=cantoPinyins,
      merged=merged,
      hidden=hidden,
      guessed=guessed)

def parseTextToMorphemes(line: str) -> list[Morpheme]:
  result: ChineseAnalyzerResult = sqlcache.get(cache, line)
  if result:
    result = eval(result)
  else:
    result = analyzer.parse(line, traditional=True)
    encoded = str(result)
    result = eval(encoded)
    sqlcache.quietPut(cache, line, encoded)
    encoded = ''

  morphemes: list[Morpheme] = []
  for token in result:
    morpheme = initMorpheme(token)
    for hit in result[token]:
      morpheme['pinyins'].append(cleanPinyin(hit['pinyin']) if hit['pinyin'] else None)
      morpheme['definitions'].append(hit['definitions'])
    morpheme['cantoDefinitions'] = cdict[token] if token in cdict else []
    morpheme['cantoPinyins'] = readings[token] if token in readings else []
    morphemes.append(morpheme)

  return morphemes

