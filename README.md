# Sinic Fronts
Ok. This is going to sound ridiculous. But. I've been listening to a lot of music in
1. **Cantonese** thanks to this [Cantonese rap Spotify playlist](https://open.spotify.com/playlist/38CDvH0GDbmI9bwl9irOQM?si=8ea4f080f12c416d) (see [discussion](https://old.reddit.com/r/Cantonese/comments/rsbxn8/my_cantonese_rap_spotify_playlist_that_ive_been/) by the curator) and [some](https://www.scmp.com/news/hong-kong/politics/article/3134073/forget-k-pop-why-hong-kong-canto-pop-singers-keung-serrini) [articles](https://globalvoices.org/2021/11/11/a-dive-into-young-peoples-discontent-through-the-hong-kong-indie-band-my-little-airport/), and
2. **Taigi** (also known as Hokkien, Taiwanese, etc.) thanks to friends learning [Hokkien on Glossika](https://ai.glossika.com/language/learn-taiwanese-hokkien), who send me Hokkien-heavy Spotify playlists like [Taiwanese songs](https://open.spotify.com/playlist/3TuT6QBLK9X9BDiKetjgrM?si=7d03027fb7f546d9), plus Joyu Wang's [Taigi Music](https://t.co/0JF82KJSco) Spotify playlist (accompanying Wang's [WSJ article](https://www.wsj.com/articles/chinese-pressure-fuels-an-unlikely-language-revival-in-taiwan-11640178003?reflink=desktopwebshare_permalink), and there's a [tweet](https://mobile.twitter.com/joyuwang/status/1473903487025299456)), 

and… my ear is not great at disambiguating Cantonese from Taigi from Mandarin.

Of course the right thing to do would be to learn phrases in all these languages to help identify the language, but I was curious if these languages differed in the *leading sounds* in the syllables commonly used in each language?

By "leading sounds", consider the Taigi sentence: <ruby>今仔日<rt>kin-á-ji̍t</rt></ruby><ruby>天氣<rt>thinn-khì</rt></ruby><ruby>袂䆀<rt>bē-bái</rt></ruby> ("The weather's nice today"; Tai-lo romanization and translation via Glossika). There are three words here with a total of seven syllables, each that start with
1. k
2. a
3. l
4. th
5. kh
6. b
7. b

In this sentence, "b" is the leading sound for two syllables. So in words, **a syllable's leading sound is the initial group of only-consonants or only-vowels when romanized**

So this project's idea is to tabulate the leading sounds and their frequencies in Taigi, Cantonese, and Mandarin.
- For Taigi, we used the [Taiwan Ministry of Education](https://github.com/g0v/moedict-data-twblg/blob/master/dict-twblg.json)'s dictionary which contains romanized example sentences. We calculate the frequency of each syllables' leading sound using all example sentences.
- For Cantonese, we use word frequency data from Li, Badrulhisham, and Alderete's "Word and sound frequency in Cantonese: comparisons across three corpora" (2020; [pdf](https://www.sfu.ca/~alderete/pubs/liEtal2020_cantfreq.pdf), [data](https://github.com/jane-lisy/cantfreq/blob/master/IARPA/iarpa_word.csv)).
- For Mandarin, we use a table of Hanyu pinyin syllable frequencies from Chih-Hao Tsai's [Zhuyin, Hanyu Pinyin, and Tongyong Pinyin Cross-Reference Table](http://research.chtsai.org/papers/pinyin-xref.html) (2020).

Table of contents:
- [Sinic Fronts](#sinic-fronts)
  - [Results](#results)
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
| 1    | ts⋯    | 10.98 | 10.98     |     | g⋯        | 13.19 | 13.19     |     | y⋯       | 9.89 | 9.89      |
| 2    | k⋯     | 10.12 | 21.10     |     | h⋯        | 10.63 | 23.82     |     | j⋯       | 7.88 | 17.77     |
| 3    | l⋯     | 9.00  | 30.11     |     | d⋯        | 8.97  | 32.78     |     | x⋯       | 7.57 | 25.34     |
| 4    | t⋯     | 8.76  | 38.87     |     | m⋯        | 8.85  | 41.63     |     | d⋯       | 7.33 | 32.67     |
| 5    | s⋯     | 8.55  | 47.41     |     | y⋯        | 8.82  | 50.45     |     | sh⋯      | 7.14 | 39.81     |
| 6    | h⋯     | 5.79  | 53.20     |     | l⋯        | 8.72  | 59.17     |     | zh⋯      | 6.42 | 46.23     |
| 7    | kh⋯    | 5.33  | 58.53     |     | j⋯        | 7.05  | 66.22     |     | l⋯       | 5.23 | 51.46     |
| 8    | b⋯     | 5.08  | 63.61     |     | a⋯        | 6.05  | 72.26     |     | g⋯       | 5.09 | 56.54     |
| 9    | a⋯     | 4.68  | 68.30     |     | s⋯        | 5.82  | 78.08     |     | h⋯       | 4.47 | 61.01     |
| 10   | tsh⋯   | 3.94  | 72.24     |     | o⋯        | 3.42  | 81.50     |     | w⋯       | 4.38 | 65.39     |
| 11   | e⋯     | 3.77  | 76.00     |     | w⋯        | 3.11  | 84.61     |     | b⋯       | 4.22 | 69.61     |
| 12   | i⋯     | 3.64  | 79.64     |     | ch⋯       | 2.79  | 87.41     |     | t⋯       | 4.08 | 73.69     |
| 13   | p⋯     | 3.39  | 83.03     |     | k⋯        | 2.65  | 90.06     |     | z⋯       | 3.34 | 77.04     |
| 14   | th⋯    | 3.00  | 86.04     |     | b⋯        | 2.57  | 92.63     |     | q⋯       | 3.25 | 80.29     |
| 15   | g⋯     | 2.78  | 88.81     |     | t⋯        | 2.40  | 95.03     |     | ch⋯      | 2.77 | 83.06     |
| 16   | m⋯     | 1.45  | 90.26     |     | f⋯        | 1.89  | 96.92     |     | m⋯       | 2.71 | 85.77     |
| 17   | ph⋯    | 1.39  | 91.65     |     | p⋯        | 0.55  | 97.47     |     | f⋯       | 2.69 | 88.47     |
| 18   | n⋯     | 1.27  | 92.92     |     | jy⋯       | 0.52  | 97.99     |     | r⋯       | 2.21 | 90.68     |
| 19   | j⋯     | 1.14  | 94.06     |     | n⋯        | 0.40  | 98.39     |     | k⋯       | 2.06 | 92.74     |
| 20   | u⋯     | 0.95  | 95.01     |     | aai⋯      | 0.36  | 98.75     |     | n⋯       | 1.97 | 94.71     |
| 21   | m̄⋯     | 0.78  | 95.79     |     | gw⋯       | 0.28  | 99.03     |     | s⋯       | 1.82 | 96.53     |
| 22   | ia⋯    | 0.55  | 96.34     |     | aa⋯       | 0.23  | 99.26     |     | p⋯       | 1.16 | 97.69     |
| 23   | ua⋯    | 0.37  | 96.71     |     | sy⋯       | 0.16  | 99.43     |     | c⋯       | 1.08 | 98.78     |
| 24   | io⋯    | 0.32  | 97.03     |     | chy⋯      | 0.14  | 99.56     |     | e⋯       | 0.60 | 99.38     |
| 25   | ue⋯    | 0.32  | 97.35     |     | u⋯        | 0.13  | 99.69     |     | a⋯       | 0.32 | 99.70     |
| 26   | iu⋯    | 0.30  | 97.65     |     | oi⋯       | 0.05  | 99.74     |     | ou⋯      | 0.15 | 99.85     |
| 27   | nn̄g⋯   | 0.25  | 97.90     |     | ty⋯       | 0.05  | 99.79     |     | ai⋯      | 0.09 | 99.94     |
| 28   | ui⋯    | 0.22  | 98.13     |     | e⋯        | 0.04  | 99.83     |     | ao⋯      | 0.03 | 99.98     |
| 29   | o⋯     | 0.18  | 98.31     |     | kw⋯       | 0.03  | 99.86     |     | o⋯       | 0.02 | 100.00    |
| 30   | oo⋯    | 0.17  | 98.48     |     | ly⋯       | 0.03  | 99.89     |     | ei⋯      | 0.00 | 100.00    |
| 31   | mn̂g⋯   | 0.17  | 98.65     |     | ng⋯       | 0.02  | 99.91     |     |          |      |           |
| 32   | tńg⋯   | 0.14  | 98.79     |     | au⋯       | 0.02  | 99.93     |     |          |      |           |
| 33   | ng⋯    | 0.11  | 98.89     |     | dy⋯       | 0.02  | 99.95     |     |          |      |           |
| 34   | pn̄g⋯   | 0.10  | 99.00     |     | ou⋯       | 0.02  | 99.96     |     |          |      |           |
| 35   | sǹg⋯   | 0.08  | 99.07     |     | hy⋯       | 0.01  | 99.98     |     |          |      |           |
| 36   | khǹg⋯  | 0.07  | 99.14     |     | ky⋯       | 0.01  | 99.99     |     |          |      |           |
| 37   | tn̂g⋯   | 0.07  | 99.21     |     | gy⋯       | 0.01  | 99.99     |     |          |      |           |
| 38   | tng⋯   | 0.06  | 99.27     |     | ai⋯       | 0.00  | 100.00    |     |          |      |           |
| 39   | tsng⋯  | 0.06  | 99.33     |     | aau⋯      | 0.00  | 100.00    |     |          |      |           |
| 40   | tǹg⋯   | 0.05  | 99.38     |     | ny⋯       | 0.00  | 100.00    |     |          |      |           |
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

## Installation
First, install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/). Then in a command line (Terminal, xterm, Command Prompt, etc.), run the following:
```bash
git clone https://github.com/fasiha/sinic-fronts.git
cd sinic-fronts
npm i
```
This will install some Node.js dependencies.

## Run
```
npm run all
```
emits
- `taigi_histogram.json`
- `cantonese_histogram.json`
- `mandarin_histogram.json`

which can be concatenated into a Markdown table (same as above) called `table.md`.

## Data sources
- `dict-twblg.json`: Taiwan Ministry of Education https://github.com/g0v/moedict-data-twblg/blob/master/dict-twblg.json
- `iarpa_word.csv`: Li, Badrulhisham, and Alderete (2020; [pdf](https://www.sfu.ca/~alderete/pubs/liEtal2020_cantfreq.pdf)) https://github.com/jane-lisy/cantfreq/blob/master/IARPA/iarpa_word.csv
- `pinyin-freq.tsv`: Chih-Hao Tsai, adapted from http://research.chtsai.org/papers/pinyin-xref.html