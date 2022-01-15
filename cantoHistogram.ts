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

function fixWord(s: string): string[] {
  return s.split(/[0-9]+/).filter(s => !!s);
}

const cantoFreq: [string, number][] =
    readFileSync('iarpa_word.csv', 'utf8')
        .trim()
        .split('\n')
        .slice(1)
        .map(s => s.trim().split(','))
        .flatMap(
            v => fixWord(v[1]).map(
                s => [s, parseFloat(v[2])] as [string, number]));
const hist = sortMap(groupBy(cantoFreq), false);
const sum = hist.reduce((prev, curr) => prev + curr[1], 0);
for (const [idx, arr] of hist.entries()) {
  const frac = arr[1] / sum;
  arr.push(frac);
  arr.push(frac + (((hist[idx - 1] as number[])?.[3]) || 0));
}

writeFileSync('cantonese_histogram.json', JSON.stringify(hist, null, 1));