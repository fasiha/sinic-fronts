# Sinic Fronts
Ok. This is going to sound ridiculous. But. I've been listening to a lot of music in
1. **Cantonese** thanks to this [Cantonese rap Spotify playlist](https://open.spotify.com/playlist/38CDvH0GDbmI9bwl9irOQM?si=8ea4f080f12c416d) (see [discussion](https://old.reddit.com/r/Cantonese/comments/rsbxn8/my_cantonese_rap_spotify_playlist_that_ive_been/) by the curator) and [some](https://www.scmp.com/news/hong-kong/politics/article/3134073/forget-k-pop-why-hong-kong-canto-pop-singers-keung-serrini) [articles](https://globalvoices.org/2021/11/11/a-dive-into-young-peoples-discontent-through-the-hong-kong-indie-band-my-little-airport/), and
2. **Taigi** (also known as Hokkien, Taiwanese, etc.) thanks to friends learning [Hokkien on Glossika](https://ai.glossika.com/language/learn-taiwanese-hokkien), who send me Hokkien-heavy Spotify playlists like [Taiwanese songs](https://open.spotify.com/playlist/3TuT6QBLK9X9BDiKetjgrM?si=7d03027fb7f546d9), plus Joyu Wang's [Taigi Music](https://t.co/0JF82KJSco) Spotify playlist (accompanying Wang's [WSJ article](https://www.wsj.com/articles/chinese-pressure-fuels-an-unlikely-language-revival-in-taiwan-11640178003?reflink=desktopwebshare_permalink), and there's a [tweet](https://mobile.twitter.com/joyuwang/status/1473903487025299456)), 

and⋯ this is tricky because my ear is not great at disambiguating Cantonese from Taigi from Mandarin.

Of course the right thing to do would be to learn phrases in all these languages and use that to identify the language while listening but I was curious if there was any overlap in the *leading sounds* for "words" in each language?

Specifically, consider the Taigi sentence: <ruby>今仔日<rt>kin-á-ji̍t</rt></ruby><ruby>天氣<rt>thinn-khì</rt></ruby><ruby>袂䆀<rt>bē-bái</rt></ruby> ("The weather's nice today"; Tai-lo romanization and translation via Glossika). There are three "words" there, with a total of seven phonemes, which start with
1. k
2. a
3. l
4. th
5. kh
6. b
7. b

In this sentence, "b" is the leading sound for two phonemes. **A phoneme's leading sound is the initial group of only-consonants or only-vowels.**

So this project's idea is to tabulate the leading sounds and their frequencies in Taigi and Cantonese (via text corpora), and Mandarin (via a pre-generated frequency table).
- For Taigi, we used the [Taiwan Ministry of Education](https://github.com/g0v/moedict-data-twblg/blob/master/dict-twblg.json)'s dictionary which contained romanized example sentences.
- For Cantonese, we downloaded all Cantonese sentences from [Tatoeba](https://tatoeba.org/en/downloads), ran them through the [chinese](https://github.com/morinokami/chinese)-[Jieba](https://github.com/fxsjy/jieba)-[PyNLPIR](https://github.com/tsroten/pynlpir) pipeline to extract Cantonese readings.
- For Mandarin, we use a table of Hanyu pinyin syllable frequencies from [Chih-Hao Tsai](http://research.chtsai.org/papers/pinyin-xref.html).

Table of contents:
- [Sinic Fronts](#sinic-fronts)
  - [Results](#results)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
  - [Run](#run)
  - [Data sources](#data-sources)

## Results
Explanation of columns:
- **"%"**: fraction of syllables starting with this sound, in the given language
- **"running %"**: running (cumulative) fraction of syllables starting with this and all above sounds

→➡︎➜ **On mobile** scroll right to see all three languages in the table! →➡︎➜

| rank | Taigi  | %     | running % |     | Cantonese | %     | running % |     | Mandarin | %    | running % |
| ---- | ------ | ----- | --------- | --- | --------- | ----- | --------- | --- | -------- | ---- | --------- |
| 1    | ts⋯    | 10.98 | 10.98     |     | d⋯        | 10.43 | 10.43     |     | y⋯       | 9.89 | 9.89      |
| 2    | k⋯     | 10.12 | 21.10     |     | g⋯        | 9.93  | 20.36     |     | j⋯       | 7.88 | 17.77     |
| 3    | l⋯     | 9.00  | 30.11     |     | z⋯        | 9.41  | 29.76     |     | x⋯       | 7.57 | 25.34     |
| 4    | t⋯     | 8.76  | 38.87     |     | m⋯        | 8.55  | 38.31     |     | d⋯       | 7.33 | 32.67     |
| 5    | s⋯     | 8.55  | 47.41     |     | j⋯        | 8.30  | 46.61     |     | sh⋯      | 7.14 | 39.81     |
| 6    | h⋯     | 5.79  | 53.20     |     | h⋯        | 8.21  | 54.82     |     | zh⋯      | 6.42 | 46.23     |
| 7    | kh⋯    | 5.33  | 58.53     |     | ng⋯       | 6.29  | 61.11     |     | l⋯       | 5.23 | 51.46     |
| 8    | b⋯     | 5.08  | 63.61     |     | k⋯        | 5.97  | 67.08     |     | g⋯       | 5.09 | 56.54     |
| 9    | a⋯     | 4.68  | 68.30     |     | n⋯        | 5.55  | 72.63     |     | h⋯       | 4.47 | 61.01     |
| 10   | tsh⋯   | 3.94  | 72.24     |     | s⋯        | 5.31  | 77.94     |     | w⋯       | 4.38 | 65.39     |
| 11   | e⋯     | 3.77  | 76.00     |     | l⋯        | 5.29  | 83.22     |     | b⋯       | 4.22 | 69.61     |
| 12   | i⋯     | 3.64  | 79.64     |     | aa⋯       | 2.98  | 86.21     |     | t⋯       | 4.08 | 73.69     |
| 13   | p⋯     | 3.39  | 83.03     |     | b⋯        | 2.73  | 88.93     |     | z⋯       | 3.34 | 77.04     |
| 14   | th⋯    | 3.00  | 86.04     |     | c⋯        | 2.48  | 91.42     |     | q⋯       | 3.25 | 80.29     |
| 15   | g⋯     | 2.78  | 88.81     |     | w⋯        | 2.43  | 93.84     |     | ch⋯      | 2.77 | 83.06     |
| 16   | m⋯     | 1.45  | 90.26     |     | t⋯        | 1.98  | 95.82     |     | m⋯       | 2.71 | 85.77     |
| 17   | ph⋯    | 1.39  | 91.65     |     | f⋯        | 1.46  | 97.28     |     | f⋯       | 2.69 | 88.47     |
| 18   | n⋯     | 1.27  | 92.92     |     | jy⋯       | 0.53  | 97.81     |     | r⋯       | 2.21 | 90.68     |
| 19   | j⋯     | 1.14  | 94.06     |     | gw⋯       | 0.49  | 98.30     |     | k⋯       | 2.06 | 92.74     |
| 20   | u⋯     | 0.95  | 95.01     |     | zy⋯       | 0.49  | 98.79     |     | n⋯       | 1.97 | 94.71     |
| 21   | m̄⋯     | 0.78  | 95.79     |     | sy⋯       | 0.31  | 99.10     |     | s⋯       | 1.82 | 96.53     |
| 22   | ia⋯    | 0.55  | 96.34     |     | p⋯        | 0.30  | 99.40     |     | p⋯       | 1.16 | 97.69     |
| 23   | ua⋯    | 0.37  | 96.71     |     | cy⋯       | 0.18  | 99.58     |     | c⋯       | 1.08 | 98.78     |
| 24   | io⋯    | 0.32  | 97.03     |     | y⋯        | 0.17  | 99.75     |     | e⋯       | 0.60 | 99.38     |
| 25   | ue⋯    | 0.32  | 97.35     |     | aai⋯      | 0.04  | 99.79     |     | a⋯       | 0.32 | 99.70     |
| 26   | iu⋯    | 0.30  | 97.65     |     | oi⋯       | 0.04  | 99.82     |     | ou⋯      | 0.15 | 99.85     |
| 27   | nn̄g⋯   | 0.25  | 97.90     |     | gy⋯       | 0.03  | 99.85     |     | ai⋯      | 0.09 | 99.94     |
| 28   | ui⋯    | 0.22  | 98.13     |     | dy⋯       | 0.03  | 99.88     |     | ao⋯      | 0.03 | 99.98     |
| 29   | o⋯     | 0.18  | 98.31     |     | ly⋯       | 0.02  | 99.91     |     | o⋯       | 0.02 | 100.00    |
| 30   | oo⋯    | 0.17  | 98.48     |     | a⋯        | 0.02  | 99.93     |     | ei⋯      | 0.00 | 100.00    |
| 31   | mn̂g⋯   | 0.17  | 98.65     |     | kw⋯       | 0.02  | 99.95     |     |          |      |           |
| 32   | tńg⋯   | 0.14  | 98.79     |     | aau⋯      | 0.01  | 99.96     |     |          |      |           |
| 33   | ng⋯    | 0.11  | 98.89     |     | u⋯        | 0.01  | 99.97     |     |          |      |           |
| 34   | pn̄g⋯   | 0.10  | 99.00     |     | o⋯        | 0.01  | 99.98     |     |          |      |           |
| 35   | sǹg⋯   | 0.08  | 99.07     |     | au⋯       | 0.01  | 99.99     |     |          |      |           |
| 36   | khǹg⋯  | 0.07  | 99.14     |     | hy⋯       | 0.01  | 99.99     |     |          |      |           |
| 37   | tn̂g⋯   | 0.07  | 99.21     |     | ty⋯       | 0.00  | 100.00    |     |          |      |           |
| 38   | tng⋯   | 0.06  | 99.27     |     | ny⋯       | 0.00  | 100.00    |     |          |      |           |
| 39   | tsng⋯  | 0.06  | 99.33     |     |           |       |           |     |          |      |           |
| 40   | tǹg⋯   | 0.05  | 99.38     |     |           |       |           |     |          |      |           |
| 41   | hng⋯   | 0.04  | 99.42     |     |           |       |           |     |          |      |           |
| 42   | sng⋯   | 0.04  | 99.46     |     |           |       |           |     |          |      |           |
| 43   | kng⋯   | 0.04  | 99.50     |     |           |       |           |     |          |      |           |
| 44   | tn̄g⋯   | 0.04  | 99.53     |     |           |       |           |     |          |      |           |
| 45   | sńg⋯   | 0.04  | 99.57     |     |           |       |           |     |          |      |           |
| 46   | thn̂g⋯  | 0.03  | 99.61     |     |           |       |           |     |          |      |           |
| 47   | thng⋯  | 0.03  | 99.64     |     |           |       |           |     |          |      |           |
| 48   | hn̂g⋯   | 0.03  | 99.67     |     |           |       |           |     |          |      |           |
| 49   | mn̄g⋯   | 0.03  | 99.70     |     |           |       |           |     |          |      |           |
| 50   | tshng⋯ | 0.03  | 99.73     |     |           |       |           |     |          |      |           |
| 51   | iau⋯   | 0.03  | 99.76     |     |           |       |           |     |          |      |           |
| 52   | nńg⋯   | 0.02  | 99.78     |     |           |       |           |     |          |      |           |
| 53   | thǹg⋯  | 0.02  | 99.80     |     |           |       |           |     |          |      |           |
| 54   | kǹg⋯   | 0.02  | 99.81     |     |           |       |           |     |          |      |           |
| 55   | hn̄g⋯   | 0.02  | 99.83     |     |           |       |           |     |          |      |           |
| 56   | tshn̂g⋯ | 0.02  | 99.85     |     |           |       |           |     |          |      |           |
| 57   | n̂g⋯    | 0.01  | 99.86     |     |           |       |           |     |          |      |           |
| 58   | ai⋯    | 0.01  | 99.88     |     |           |       |           |     |          |      |           |
| 59   | au⋯    | 0.01  | 99.89     |     |           |       |           |     |          |      |           |
| 60   | ńg⋯    | 0.01  | 99.90     |     |           |       |           |     |          |      |           |
| 61   | tsǹg⋯  | 0.01  | 99.91     |     |           |       |           |     |          |      |           |
| 62   | ǹg⋯    | 0.01  | 99.92     |     |           |       |           |     |          |      |           |
| 63   | kńg⋯   | 0.01  | 99.93     |     |           |       |           |     |          |      |           |
| 64   | uai⋯   | 0.01  | 99.94     |     |           |       |           |     |          |      |           |
| 65   | nǹg⋯   | 0.01  | 99.95     |     |           |       |           |     |          |      |           |
| 66   | thn̄g⋯  | 0.01  | 99.95     |     |           |       |           |     |          |      |           |
| 67   | nn̂g⋯   | 0.00  | 99.96     |     |           |       |           |     |          |      |           |
| 68   | khng⋯  | 0.00  | 99.96     |     |           |       |           |     |          |      |           |
| 69   | tsn̄g⋯  | 0.00  | 99.97     |     |           |       |           |     |          |      |           |
| 70   | ḿ⋯     | 0.00  | 99.97     |     |           |       |           |     |          |      |           |
| 71   | tshńg⋯ | 0.00  | 99.98     |     |           |       |           |     |          |      |           |
| 72   | m̂⋯     | 0.00  | 99.98     |     |           |       |           |     |          |      |           |
| 73   | tsn̂g⋯  | 0.00  | 99.98     |     |           |       |           |     |          |      |           |
| 74   | khngh⋯ | 0.00  | 99.98     |     |           |       |           |     |          |      |           |
| 75   | hngh⋯  | 0.00  | 99.98     |     |           |       |           |     |          |      |           |
| 76   | hm̍h⋯   | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 77   | png⋯   | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 78   | sn̂g⋯   | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 79   | hmh⋯   | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 80   | n̄g⋯    | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 81   | x⋯     | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 82   | tshǹg⋯ | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 83   | ｘ⋯    | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 84   | y⋯     | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 85   | phngh⋯ | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 86   | nng⋯   | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 87   | pńg⋯   | 0.00  | 100.00    |     |           |       |           |     |          |      |           |

## Pre-requisites
If you have [Git](https://git-scm.com/), [Node.js](https://nodejs.org/), and a Python virtual environment (e.g., [venv](https://docs.python.org/3/library/venv.html)) already, skip to [Installation](#installation). Otherwise, go install those tools, *or*:

1. Install [Python](https://www.python.org/downloads/), any 3.x version is fine.
2. Install [miniconda](https://docs.conda.io/en/latest/miniconda.html#latest-miniconda-installer-links).
3. Run the following in your command line (Terminal, xterm, Command Prompt, etc):
```bash
conda create -n chinese-stuff
conda activate chinese-stuff
conda install -c conda-forge pip nodejs git
```
This creates an isolated conda vitual environment and installs pip/Python (yes, a potentially different version than your base system Python), Node.js, and Git inside it.

## Installation
```bash
git clone https://github.com/fasiha/sinic-fronts.git
cd sinic-fronts
npm run python-setup
npm i
```
This will install some Node.js dependencies and some Python dependencies.

I need both here because, sigh,
- Node supports [Unicode property escapes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) but
- Python has the `chinese` parser I'm familiar with. Multilingualism yay?

## Run
```
npm run all
```
Emits 
- cantonese_histogram.json and
- taigi_histogram.json

N.B. The Cantonese parser might take an hour or two to run. It'll cache the results in a SQLite database so subsequent processing will complete in ~seconds. (The full Taigi analysis runs in a ~second since that corpus is already romanized.)

## Data sources
- `cccanto-webdist.txt`: CC-Canto https://cccanto.org/download.html ("The latest version of CC-Canto can be downloaded here")
- `cccedict-canto-readings-150923.txt`: CC-Canto https://cccanto.org/download.html ("The latest version of our Cantonese readings for CC-CEDICT can be downloaded here")
- `dict-twblg.json`: Taiwan Ministry of Education https://github.com/g0v/moedict-data-twblg/blob/master/dict-twblg.json
- `yue_sentences.tsv`: Tatoeba https://tatoeba.org/en/downloads
- `pinyin-freq.tsv`: Chih-Hao Tsai, adapted from http://research.chtsai.org/papers/pinyin-xref.html