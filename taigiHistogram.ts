import {readFileSync, writeFileSync} from 'fs';
const example = [
  {
    'title': '袂伸捙',
    'heteronyms': [{
      'id': '6688',
      'trs': 'bē-tshun-tshia/buē-tshun-tshia',
      'synonyms': '袂翻捙',
      'definitions': [{
        'type': '熟',
        'def': '通常指經過言詞勸說之後，仍無法改變對方的態度或想法。',
        'example': [
          '￹佮伊講話，見講嘛講袂伸捙。￺Kah i kóng-uē, kiàn kóng mā kóng bē-tshun-tshia. ￻跟他說話，怎麼說都說不清楚。'
        ]
      }]
    }]
  },
  {
    'title': '袂使',
    'heteronyms': [{
      'id': '6666',
      'trs': 'bē-sái/buē-sái',
      'synonyms': '袂用得,袂使得',
      'definitions': [{
        'type': '副',
        'def': '不可以、使不得。',
        'example': [
          '￹你袂使佮伊出去𨑨迌！￺Lí bē-sái kah i tshut-khì tshit-thô! ￻你不可以和他出去玩！'
        ]
      }]
    }]
  },
];

function accentedLatinWords(s: string) {
  const m = s.match(/[\p{Script=Latin}\p{M}]+/gu)
  if (m) {
    return [...m].map(s => s.toLocaleLowerCase())
  }
  return [];
}

function count<T>(arr: T[]): Map<T, number> {
  const m: Map<T, number> = new Map();
  for (const x of arr) {
    m.set(x, (m.get(x) || 0) + 1);
  }
  return m;
}

export function sortMap<T>(map: Map<T, number>, asc = true): [T, number][] {
  const ret = [...map];
  const factor = asc ? 1 : -1;
  ret.sort(([_, a], [_2, b]) => (a - b) * factor);
  return ret;
}

function orderedCount<T>(arr: T[], asc = true): [T, number][] {
  return sortMap(count(arr), asc);
}

const dict: typeof example =
    JSON.parse(readFileSync('dict-twblg.json', 'utf8'));

const examples =
    Array.from(new Set(dict.flatMap(
                               o => o.heteronyms.flatMap(
                                   o => o.definitions.flatMap(o => o.example)))
                           .filter(s => !!s)));

const words = examples.flatMap(accentedLatinWords);
// We use `normalize('NFD')` to convert accented characters into ASCII plus
// non-combining accent `\u0300-\u036f`, so we can split on it. This isn't
// strictly necessary! It just results in fewer syllable starts, e.g., "tshn̂g"
// is mapped to the "tshn".
export const leadingRe = /^([^aeiou\u0300-\u036f]+|[aeiou]+)/gu;
const leading =
    words.flatMap(o => o.normalize('NFD').match(leadingRe)).filter(s => !!s);
const hist = orderedCount(leading, false);
for (const [idx, arr] of hist.entries()) {
  const frac = arr[1] / leading.length;
  arr.push(frac);
  arr.push(frac + (((hist[idx - 1] as number[])?.[3]) || 0));
}
writeFileSync('taigi_histogram.json', JSON.stringify(hist, null, 1));

// module.exports={leadingRe, sortMap}