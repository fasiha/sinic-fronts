var fs = require('fs');
function parseFile(fname, integerOccurrences = true) {
  var data = JSON.parse(fs.readFileSync(fname, 'utf8'))
  var header = `| leading sound | fraction % | occurrences | rank |
|---|---|---|---|
`;
  return header +
      data.map(
              (o, i) => `| ${o[0]} | ${(o[2] * 100).toFixed(1)} | ${
                  integerOccurrences ? o[1] : o[1].toFixed(1)} | ${i + 1} |`)
          .join('\n');
}
fs.writeFileSync('taigi.md', parseFile('taigi_histogram.json'))
fs.writeFileSync('cantonese.md', parseFile('cantonese_histogram.json'))
fs.writeFileSync('mandarin.md', parseFile('mandarin_histogram.json', false))

{
  const langs = 'Taigi Cantonese Mandarin'.split(' ');
  const data = langs.map(
      l => JSON.parse(fs.readFileSync(`${l.toLowerCase()}_histogram.json`)));
  const maxHeight = Math.max(...data.map(v => v.length));
  function subrow(items) {
    if (items) {
      const [leading, frequency, fraction, cum] = items;
      return `| ${leading}⋯ | ${(fraction * 100).toFixed(2)} | ${
          (cum * 100).toFixed(2)} |`;
    }
    return '||||';
  }
  const rows =
      [`| rank | ` + langs.map(l => ` ${l} | % | running % | `).join(' | ')];
  const numCols = rows[0].split('').filter(c => c === '|').length;
  rows.push('|' + Array.from(Array(numCols - 1), _ => '---').join('|') + '|')
  for (let i = 0; i < maxHeight; i++) {
    const row = data.map(v => subrow(v[i]));
    rows.push(`| ${i + 1} ` + row.join(' '));
  }
  fs.writeFileSync('tables.md', rows.join('\n'));
}