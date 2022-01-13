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
