# Sinic Fronts

## Setup
1. Install [miniconda](https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links)
2. Then run the following in your command line (Terminal, xterm, Command Prompt, etc):
```bash
# environment creation
conda create -n chinese-stuff
conda activate chinese-stuff
conda install pip nodejs git

# this repo setup
git clone https://github.com/fasiha/sinic-fronts.git
cd sinic-fronts
npm run python-setup
npm i
```

## Run
```
npm run all
```
Emits 
- cantonese_histogram.json and
- taigi_histogram.json

## Data sources
- cccanto-webdist.txt: CC-Canto https://cccanto.org/download.html ("The latest version of CC-Canto can be downloaded here")
- cccedict-canto-readings-150923.txt: CC-Canto https://cccanto.org/download.html ("The latest version of our Cantonese readings for CC-CEDICT can be downloaded here")
- dict-twblg.json: Taiwan Ministry of Education https://github.com/g0v/moedict-data-twblg/blob/master/dict-twblg.json
- yue_sentences.tsv: Tatoeba https://tatoeba.org/en/downloads