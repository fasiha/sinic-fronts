# Sinic Fronts
Ok. This is going to sound ridiculous. But. I've been listening to a lot of music in
1. **Cantonese** thanks to this [Cantonese rap Spotify playlist](https://open.spotify.com/playlist/38CDvH0GDbmI9bwl9irOQM?si=8ea4f080f12c416d) (see [discussion](https://old.reddit.com/r/Cantonese/comments/rsbxn8/my_cantonese_rap_spotify_playlist_that_ive_been/) by the curator) and [some](https://www.scmp.com/news/hong-kong/politics/article/3134073/forget-k-pop-why-hong-kong-canto-pop-singers-keung-serrini) [articles](https://globalvoices.org/2021/11/11/a-dive-into-young-peoples-discontent-through-the-hong-kong-indie-band-my-little-airport/), and
2. **Taigi** (also known as Hokkien, Taiwanese, etc.) thanks to friends learning [Hokkien on Glossika](https://ai.glossika.com/language/learn-taiwanese-hokkien), who send me Hokkien-heavy Spotify playlists like [Taiwanese songs](https://open.spotify.com/playlist/3TuT6QBLK9X9BDiKetjgrM?si=7d03027fb7f546d9), plus Joyu Wang's [Taigi Music](https://t.co/0JF82KJSco) Spotify playlist (accompanying Wang's [WSJ article](https://www.wsj.com/articles/chinese-pressure-fuels-an-unlikely-language-revival-in-taiwan-11640178003?reflink=desktopwebshare_permalink), and there's a [tweet](https://mobile.twitter.com/joyuwang/status/1473903487025299456)), 

and… this is tricky because my ear is not great at disambiguating Cantonese from Taigi from Mandarin.

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

- [Sinic Fronts](#sinic-fronts)
  - [Results](#results)
    - [Taigi (Hokkien, Holo)](#taigi-hokkien-holo)
    - [Cantonese](#cantonese)
    - [Mandarin](#mandarin)
  - [Pre-requisites](#pre-requisites)
  - [Installation](#installation)
  - [Run](#run)
  - [Data sources](#data-sources)

## Results

### Taigi (Hokkien, Holo)
| leading sound | fraction % | occurrences | rank |
| ------------- | ---------- | ----------- | ---- |
| ts            | 11.0       | 11885       | 1    |
| k             | 10.1       | 10951       | 2    |
| l             | 9.0        | 9745        | 3    |
| t             | 8.8        | 9482        | 4    |
| s             | 8.5        | 9249        | 5    |
| h             | 5.8        | 6264        | 6    |
| kh            | 5.3        | 5767        | 7    |
| b             | 5.1        | 5499        | 8    |
| a             | 4.7        | 5070        | 9    |
| tsh           | 3.9        | 4260        | 10   |
| e             | 3.8        | 4075        | 11   |
| i             | 3.6        | 3940        | 12   |
| p             | 3.4        | 3670        | 13   |
| th            | 3.0        | 3250        | 14   |
| g             | 2.8        | 3004        | 15   |
| m             | 1.4        | 1566        | 16   |
| ph            | 1.4        | 1502        | 17   |
| n             | 1.3        | 1377        | 18   |
| j             | 1.1        | 1239        | 19   |
| u             | 0.9        | 1023        | 20   |
| m̄             | 0.8        | 846         | 21   |
| ia            | 0.5        | 595         | 22   |
| ua            | 0.4        | 401         | 23   |
| io            | 0.3        | 350         | 24   |
| ue            | 0.3        | 342         | 25   |
| iu            | 0.3        | 322         | 26   |
| nn̄g           | 0.3        | 274         | 27   |
| ui            | 0.2        | 242         | 28   |
| o             | 0.2        | 196         | 29   |
| oo            | 0.2        | 188         | 30   |
| mn̂g           | 0.2        | 182         | 31   |
| tńg           | 0.1        | 150         | 32   |
| ng            | 0.1        | 117         | 33   |
| pn̄g           | 0.1        | 110         | 34   |
| sǹg           | 0.1        | 82          | 35   |
| khǹg          | 0.1        | 78          | 36   |
| tn̂g           | 0.1        | 74          | 37   |
| tng           | 0.1        | 64          | 38   |
| tsng          | 0.1        | 62          | 39   |
| tǹg           | 0.0        | 50          | 40   |
| hng           | 0.0        | 45          | 41   |
| sng           | 0.0        | 44          | 42   |
| kng           | 0.0        | 42          | 43   |
| tn̄g           | 0.0        | 41          | 44   |
| sńg           | 0.0        | 40          | 45   |
| thn̂g          | 0.0        | 37          | 46   |
| thng          | 0.0        | 35          | 47   |
| hn̂g           | 0.0        | 34          | 48   |
| mn̄g           | 0.0        | 33          | 49   |
| tshng         | 0.0        | 31          | 50   |
| iau           | 0.0        | 30          | 51   |
| nńg           | 0.0        | 25          | 52   |
| thǹg          | 0.0        | 19          | 53   |
| kǹg           | 0.0        | 19          | 54   |
| hn̄g           | 0.0        | 19          | 55   |
| tshn̂g         | 0.0        | 18          | 56   |
| n̂g            | 0.0        | 16          | 57   |
| ai            | 0.0        | 14          | 58   |
| au            | 0.0        | 13          | 59   |
| ńg            | 0.0        | 12          | 60   |
| tsǹg          | 0.0        | 12          | 61   |
| ǹg            | 0.0        | 11          | 62   |
| kńg           | 0.0        | 11          | 63   |
| uai           | 0.0        | 10          | 64   |
| nǹg           | 0.0        | 8           | 65   |
| thn̄g          | 0.0        | 7           | 66   |
| nn̂g           | 0.0        | 5           | 67   |
| khng          | 0.0        | 5           | 68   |
| tsn̄g          | 0.0        | 5           | 69   |
| ḿ             | 0.0        | 4           | 70   |
| tshńg         | 0.0        | 4           | 71   |
| m̂             | 0.0        | 3           | 72   |
| tsn̂g          | 0.0        | 2           | 73   |
| khngh         | 0.0        | 2           | 74   |
| hngh          | 0.0        | 2           | 75   |
| hm̍h           | 0.0        | 2           | 76   |
| png           | 0.0        | 2           | 77   |
| sn̂g           | 0.0        | 2           | 78   |
| hmh           | 0.0        | 2           | 79   |
| n̄g            | 0.0        | 2           | 80   |
| x             | 0.0        | 2           | 81   |
| tshǹg         | 0.0        | 1           | 82   |
| ｘ            | 0.0        | 1           | 83   |
| y             | 0.0        | 1           | 84   |
| phngh         | 0.0        | 1           | 85   |
| nng           | 0.0        | 1           | 86   |
| pńg           | 0.0        | 1           | 87   |

### Cantonese
| leading sound | fraction % | occurrences | rank |
| ------------- | ---------- | ----------- | ---- |
| d             | 10.4       | 3845        | 1    |
| g             | 9.9        | 3661        | 2    |
| z             | 9.4        | 3468        | 3    |
| j             | 8.3        | 3059        | 4    |
| h             | 8.2        | 3028        | 5    |
| ng            | 6.3        | 2310        | 6    |
| k             | 6.0        | 2202        | 7    |
| n             | 5.5        | 2046        | 8    |
| s             | 5.3        | 1958        | 9    |
| l             | 5.3        | 1949        | 10   |
| m             | 4.3        | 1599        | 11   |
| m4            | 4.2        | 1555        | 12   |
| aa            | 3.0        | 1100        | 13   |
| b             | 2.7        | 1005        | 14   |
| c             | 2.5        | 916         | 15   |
| w             | 2.4        | 895         | 16   |
| t             | 2.0        | 730         | 17   |
| f             | 1.5        | 538         | 18   |
| jy            | 0.5        | 195         | 19   |
| gw            | 0.5        | 181         | 20   |
| zy            | 0.5        | 179         | 21   |
| sy            | 0.3        | 115         | 22   |
| p             | 0.3        | 112         | 23   |
| cy            | 0.2        | 66          | 24   |
| y             | 0.2        | 61          | 25   |
| aai           | 0.0        | 14          | 26   |
| oi            | 0.0        | 13          | 27   |
| gy            | 0.0        | 12          | 28   |
| dy            | 0.0        | 10          | 29   |
| ly            | 0.0        | 9           | 30   |
| a             | 0.0        | 9           | 31   |
| ng5           | 0.0        | 7           | 32   |
| kw            | 0.0        | 6           | 33   |
| aau           | 0.0        | 4           | 34   |
| u             | 0.0        | 4           | 35   |
| o             | 0.0        | 4           | 36   |
| au            | 0.0        | 3           | 37   |
| hy            | 0.0        | 3           | 38   |
| ty            | 0.0        | 1           | 39   |
| ng6           | 0.0        | 1           | 40   |
| ny            | 0.0        | 1           | 41   |

### Mandarin
| leading sound | fraction % | occurrences | rank |
| ------------- | ---------- | ----------- | ---- |
| y             | 9.9        | 98916.6     | 1    |
| j             | 7.9        | 78818.8     | 2    |
| x             | 7.6        | 75671.1     | 3    |
| d             | 7.3        | 73279.4     | 4    |
| sh            | 7.1        | 71386.2     | 5    |
| zh            | 6.4        | 64194.4     | 6    |
| l             | 5.2        | 52315.0     | 7    |
| g             | 5.1        | 50864.2     | 8    |
| h             | 4.5        | 44657.7     | 9    |
| w             | 4.4        | 43828.4     | 10   |
| b             | 4.2        | 42204.0     | 11   |
| t             | 4.1        | 40803.8     | 12   |
| z             | 3.3        | 33442.8     | 13   |
| q             | 3.2        | 32496.6     | 14   |
| ch            | 2.8        | 27749.3     | 15   |
| m             | 2.7        | 27083.8     | 16   |
| f             | 2.7        | 26942.5     | 17   |
| r             | 2.2        | 22135.1     | 18   |
| k             | 2.1        | 20611.0     | 19   |
| n             | 2.0        | 19743.9     | 20   |
| s             | 1.8        | 18198.4     | 21   |
| p             | 1.2        | 11592.0     | 22   |
| c             | 1.1        | 10824.5     | 23   |
| e             | 0.6        | 6039.3      | 24   |
| a             | 0.3        | 3219.6      | 25   |
| ou            | 0.1        | 1473.5      | 26   |
| ai            | 0.1        | 949.3       | 27   |
| ao            | 0.0        | 342.2       | 28   |
| o             | 0.0        | 216.9       | 29   |
| ei            | 0.0        | 0.0         | 30   |

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