# Sinic Fronts
Ok. This is going to sound ridiculous. But. I've been listening to a lot of music in
1. **Cantonese** thanks to this [Cantonese rap Spotify playlist](https://open.spotify.com/playlist/38CDvH0GDbmI9bwl9irOQM?si=8ea4f080f12c416d) (and [discussion](https://old.reddit.com/r/Cantonese/comments/rsbxn8/my_cantonese_rap_spotify_playlist_that_ive_been/) by the curator), and
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

So this project's idea is to collect a corpus of Taigi and Cantonese sentences and tabulate the leading sounds and their frequencies in that language.

For Taigi, we used the Taiwan Ministry of Education's dictionary which contained romanized example sentences. For Cantonese, we downloaded all Cantonese sentences from Tatoeba, ran them through the [chinese](https://github.com/morinokami/chinese)-[Jieba](https://github.com/fxsjy/jieba)-[PyNLPIR](https://github.com/tsroten/pynlpir) pipeline to extract Cantonese readings.

## Results

### Taigi (Hokkien, Holo)
| leading sound | fraction % | occurrences | rank |
| ------------- | ---------- | ----------- | ---- |
| ts            | 10.982     | 11885       | 1    |
| k             | 10.119     | 10951       | 2    |
| l             | 9.005      | 9745        | 3    |
| t             | 8.762      | 9482        | 4    |
| s             | 8.547      | 9249        | 5    |
| h             | 5.788      | 6264        | 6    |
| kh            | 5.329      | 5767        | 7    |
| b             | 5.081      | 5499        | 8    |
| a             | 4.685      | 5070        | 9    |
| tsh           | 3.936      | 4260        | 10   |
| e             | 3.766      | 4075        | 11   |
| i             | 3.641      | 3940        | 12   |
| p             | 3.391      | 3670        | 13   |
| th            | 3.003      | 3250        | 14   |
| g             | 2.776      | 3004        | 15   |
| m             | 1.447      | 1566        | 16   |
| ph            | 1.388      | 1502        | 17   |
| n             | 1.272      | 1377        | 18   |
| j             | 1.145      | 1239        | 19   |
| u             | 0.945      | 1023        | 20   |
| m̄             | 0.782      | 846         | 21   |
| ia            | 0.550      | 595         | 22   |
| ua            | 0.371      | 401         | 23   |
| io            | 0.323      | 350         | 24   |
| ue            | 0.316      | 342         | 25   |
| iu            | 0.298      | 322         | 26   |
| nn̄g           | 0.253      | 274         | 27   |
| ui            | 0.224      | 242         | 28   |
| o             | 0.181      | 196         | 29   |
| oo            | 0.174      | 188         | 30   |
| mn̂g           | 0.168      | 182         | 31   |
| tńg           | 0.139      | 150         | 32   |
| ng            | 0.108      | 117         | 33   |
| pn̄g           | 0.102      | 110         | 34   |
| sǹg           | 0.076      | 82          | 35   |
| khǹg          | 0.072      | 78          | 36   |
| tn̂g           | 0.068      | 74          | 37   |
| tng           | 0.059      | 64          | 38   |
| tsng          | 0.057      | 62          | 39   |
| tǹg           | 0.046      | 50          | 40   |
| hng           | 0.042      | 45          | 41   |
| sng           | 0.041      | 44          | 42   |
| kng           | 0.039      | 42          | 43   |
| tn̄g           | 0.038      | 41          | 44   |
| sńg           | 0.037      | 40          | 45   |
| thn̂g          | 0.034      | 37          | 46   |
| thng          | 0.032      | 35          | 47   |
| hn̂g           | 0.031      | 34          | 48   |
| mn̄g           | 0.030      | 33          | 49   |
| tshng         | 0.029      | 31          | 50   |
| iau           | 0.028      | 30          | 51   |
| nńg           | 0.023      | 25          | 52   |
| thǹg          | 0.018      | 19          | 53   |
| kǹg           | 0.018      | 19          | 54   |
| hn̄g           | 0.018      | 19          | 55   |
| tshn̂g         | 0.017      | 18          | 56   |
| n̂g            | 0.015      | 16          | 57   |
| ai            | 0.013      | 14          | 58   |
| au            | 0.012      | 13          | 59   |
| ńg            | 0.011      | 12          | 60   |
| tsǹg          | 0.011      | 12          | 61   |
| ǹg            | 0.010      | 11          | 62   |
| kńg           | 0.010      | 11          | 63   |
| uai           | 0.009      | 10          | 64   |
| nǹg           | 0.007      | 8           | 65   |
| thn̄g          | 0.006      | 7           | 66   |
| nn̂g           | 0.005      | 5           | 67   |
| khng          | 0.005      | 5           | 68   |
| tsn̄g          | 0.005      | 5           | 69   |
| ḿ             | 0.004      | 4           | 70   |
| tshńg         | 0.004      | 4           | 71   |
| m̂             | 0.003      | 3           | 72   |
| tsn̂g          | 0.002      | 2           | 73   |
| khngh         | 0.002      | 2           | 74   |
| hngh          | 0.002      | 2           | 75   |
| hm̍h           | 0.002      | 2           | 76   |
| png           | 0.002      | 2           | 77   |
| sn̂g           | 0.002      | 2           | 78   |
| hmh           | 0.002      | 2           | 79   |
| n̄g            | 0.002      | 2           | 80   |
| x             | 0.002      | 2           | 81   |
| tshǹg         | 0.001      | 1           | 82   |
| ｘ            | 0.001      | 1           | 83   |
| y             | 0.001      | 1           | 84   |
| phngh         | 0.001      | 1           | 85   |
| nng           | 0.001      | 1           | 86   |
| pńg           | 0.001      | 1           | 87   |

### Cantonese
| leading sound | fraction % | occurrences | rank |
| ------------- | ---------- | ----------- | ---- |
| d             | 10.427     | 3845        | 1    |
| g             | 9.928      | 3661        | 2    |
| z             | 9.405      | 3468        | 3    |
| j             | 8.296      | 3059        | 4    |
| h             | 8.212      | 3028        | 5    |
| ng            | 6.265      | 2310        | 6    |
| k             | 5.972      | 2202        | 7    |
| n             | 5.549      | 2046        | 8    |
| s             | 5.310      | 1958        | 9    |
| l             | 5.286      | 1949        | 10   |
| m             | 4.336      | 1599        | 11   |
| m4            | 4.217      | 1555        | 12   |
| aa            | 2.983      | 1100        | 13   |
| b             | 2.725      | 1005        | 14   |
| c             | 2.484      | 916         | 15   |
| w             | 2.427      | 895         | 16   |
| t             | 1.980      | 730         | 17   |
| f             | 1.459      | 538         | 18   |
| jy            | 0.529      | 195         | 19   |
| gw            | 0.491      | 181         | 20   |
| zy            | 0.485      | 179         | 21   |
| sy            | 0.312      | 115         | 22   |
| p             | 0.304      | 112         | 23   |
| cy            | 0.179      | 66          | 24   |
| y             | 0.165      | 61          | 25   |
| aai           | 0.038      | 14          | 26   |
| oi            | 0.035      | 13          | 27   |
| gy            | 0.033      | 12          | 28   |
| dy            | 0.027      | 10          | 29   |
| ly            | 0.024      | 9           | 30   |
| a             | 0.024      | 9           | 31   |
| ng5           | 0.019      | 7           | 32   |
| kw            | 0.016      | 6           | 33   |
| aau           | 0.011      | 4           | 34   |
| u             | 0.011      | 4           | 35   |
| o             | 0.011      | 4           | 36   |
| au            | 0.008      | 3           | 37   |
| hy            | 0.008      | 3           | 38   |
| ty            | 0.003      | 1           | 39   |
| ng6           | 0.003      | 1           | 40   |
| ny            | 0.003      | 1           | 41   |

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

## Data sources
- `cccanto-webdist.txt`: CC-Canto https://cccanto.org/download.html ("The latest version of CC-Canto can be downloaded here")
- `cccedict-canto-readings-150923.txt`: CC-Canto https://cccanto.org/download.html ("The latest version of our Cantonese readings for CC-CEDICT can be downloaded here")
- `dict-twblg.json`: Taiwan Ministry of Education https://github.com/g0v/moedict-data-twblg/blob/master/dict-twblg.json
- `yue_sentences.tsv`: Tatoeba https://tatoeba.org/en/downloads