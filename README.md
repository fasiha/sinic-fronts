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
| 16   | m⋯     | 2.24  | 91.05     |     | f⋯        | 1.89  | 96.92     |     | m⋯       | 2.71 | 85.77     |
| 17   | ph⋯    | 1.39  | 92.43     |     | p⋯        | 0.55  | 97.47     |     | f⋯       | 2.69 | 88.47     |
| 18   | n⋯     | 1.31  | 93.75     |     | jy⋯       | 0.52  | 97.99     |     | r⋯       | 2.21 | 90.68     |
| 19   | j⋯     | 1.14  | 94.89     |     | n⋯        | 0.40  | 98.39     |     | k⋯       | 2.06 | 92.74     |
| 20   | u⋯     | 0.95  | 95.84     |     | aai⋯      | 0.36  | 98.75     |     | n⋯       | 1.97 | 94.71     |
| 21   | ia⋯    | 0.55  | 96.39     |     | gw⋯       | 0.28  | 99.03     |     | s⋯       | 1.82 | 96.53     |
| 22   | ua⋯    | 0.37  | 96.76     |     | aa⋯       | 0.23  | 99.26     |     | p⋯       | 1.16 | 97.69     |
| 23   | io⋯    | 0.32  | 97.08     |     | sy⋯       | 0.16  | 99.43     |     | c⋯       | 1.08 | 98.78     |
| 24   | ue⋯    | 0.32  | 97.40     |     | chy⋯      | 0.14  | 99.56     |     | e⋯       | 0.60 | 99.38     |
| 25   | iu⋯    | 0.30  | 97.69     |     | u⋯        | 0.13  | 99.69     |     | a⋯       | 0.32 | 99.70     |
| 26   | tn⋯    | 0.29  | 97.98     |     | oi⋯       | 0.05  | 99.74     |     | ou⋯      | 0.15 | 99.85     |
| 27   | nn⋯    | 0.29  | 98.27     |     | ty⋯       | 0.05  | 99.79     |     | ai⋯      | 0.09 | 99.94     |
| 28   | ui⋯    | 0.22  | 98.50     |     | e⋯        | 0.04  | 99.83     |     | ao⋯      | 0.03 | 99.98     |
| 29   | mn⋯    | 0.20  | 98.69     |     | kw⋯       | 0.03  | 99.86     |     | o⋯       | 0.02 | 100.00    |
| 30   | o⋯     | 0.18  | 98.88     |     | ly⋯       | 0.03  | 99.89     |     | ei⋯      | 0.00 | 100.00    |
| 31   | oo⋯    | 0.17  | 99.05     |     | ng⋯       | 0.02  | 99.91     |     |          |      |           |
| 32   | sn⋯    | 0.11  | 99.16     |     | au⋯       | 0.02  | 99.93     |     |          |      |           |
| 33   | ng⋯    | 0.11  | 99.27     |     | dy⋯       | 0.02  | 99.95     |     |          |      |           |
| 34   | pn⋯    | 0.10  | 99.37     |     | ou⋯       | 0.02  | 99.96     |     |          |      |           |
| 35   | khn⋯   | 0.07  | 99.45     |     | hy⋯       | 0.01  | 99.98     |     |          |      |           |
| 36   | tng⋯   | 0.06  | 99.51     |     | ky⋯       | 0.01  | 99.99     |     |          |      |           |
| 37   | thn⋯   | 0.06  | 99.56     |     | gy⋯       | 0.01  | 99.99     |     |          |      |           |
| 38   | tsng⋯  | 0.06  | 99.62     |     | ai⋯       | 0.00  | 100.00    |     |          |      |           |
| 39   | hn⋯    | 0.05  | 99.67     |     | aau⋯      | 0.00  | 100.00    |     |          |      |           |
| 40   | hng⋯   | 0.04  | 99.71     |     | ny⋯       | 0.00  | 100.00    |     |          |      |           |
| 41   | sng⋯   | 0.04  | 99.75     |     |           |       |           |     |          |      |           |
| 42   | kng⋯   | 0.04  | 99.79     |     |           |       |           |     |          |      |           |
| 43   | thng⋯  | 0.03  | 99.82     |     |           |       |           |     |          |      |           |
| 44   | tshng⋯ | 0.03  | 99.85     |     |           |       |           |     |          |      |           |
| 45   | iau⋯   | 0.03  | 99.88     |     |           |       |           |     |          |      |           |
| 46   | kn⋯    | 0.03  | 99.91     |     |           |       |           |     |          |      |           |
| 47   | tshn⋯  | 0.02  | 99.93     |     |           |       |           |     |          |      |           |
| 48   | tsn⋯   | 0.02  | 99.95     |     |           |       |           |     |          |      |           |
| 49   | ai⋯    | 0.01  | 99.96     |     |           |       |           |     |          |      |           |
| 50   | au⋯    | 0.01  | 99.97     |     |           |       |           |     |          |      |           |
| 51   | uai⋯   | 0.01  | 99.98     |     |           |       |           |     |          |      |           |
| 52   | khng⋯  | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 53   | khngh⋯ | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 54   | hngh⋯  | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 55   | hm⋯    | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 56   | png⋯   | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 57   | hmh⋯   | 0.00  | 99.99     |     |           |       |           |     |          |      |           |
| 58   | x⋯     | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 59   | ｘ⋯    | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 60   | y⋯     | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 61   | phngh⋯ | 0.00  | 100.00    |     |           |       |           |     |          |      |           |
| 62   | nng⋯   | 0.00  | 100.00    |     |           |       |           |     |          |      |           |

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