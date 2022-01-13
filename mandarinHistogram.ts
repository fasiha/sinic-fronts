import {readFileSync, writeFileSync} from 'fs';
import {leadingRe, sortMap} from './taigiHistogram';

function groupBy(v: [string, number][]): Map<string, number> {
  const ret: Map<string, number> = new Map();
  for (const [pinyin, freq] of v) {
    const match = pinyin.match(leadingRe);
    if (match) {
      ret.set(match[0], freq + (ret.get(match[0]) || 0))
    }
  }
  return ret;
}

const hanyuFreq = readFileSync('pinyin-freq.tsv', 'utf8')
                      .trim()
                      .split('\n')
                      .slice(1)
                      .map(s => s.trim().split('\t'))
                      .map(
                          v => [v[1].normalize('NFD'),
                                parseFloat(v[3]) || 0] as [string, number]);
// The "NFD" converts [ 'n', 'ü' ] to [ 'n', 'u', '̈' ] which can then be
// processed properly by `leadingRe`
const hist = sortMap(groupBy(hanyuFreq), false);
const sum = hist.reduce((prev, curr) => prev + curr[1], 0);
for (const [idx, arr] of hist.entries()) {
  const frac = arr[1] / sum;
  arr.push(frac);
  arr.push(frac + (((hist[idx - 1] as number[])?.[3]) || 0));
}

writeFileSync('mandarin_histogram.json', JSON.stringify(hist, null, 1));