var fs = require('fs');
function parseFile(fname) {
  var data = JSON.parse(fs.readFileSync(fname, 'utf8'))
  var header = `| leading sound | fraction % | occurrences | rank |
|---|---|---|---|
`;
  return header +
      data.map(
              (o, i) => `| ${o[0]} | ${(o[2] * 100).toFixed(3)} | ${o[1]} | ${
                  i + 1} |`)
          .join('\n');
}
fs.writeFileSync('taigi.md', parseFile('taigi_histogram.json'))
fs.writeFileSync('cantonese.md', parseFile('cantonese_histogram.json'))
