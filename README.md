# Kanji

Get kanji characters in an array based on categorization.

## Usage

```js
const { kanken, jlpt } = require('kanji');

// Kanji Kentei
console.log(kanken.lv10);
console.log(kanken.lv09);
console.log(kanken.lv08);
console.log(kanken.lv07);
console.log(kanken.lv06);
console.log(kanken.lv05);
console.log(kanken.lv04);
console.log(kanken.lv03);
console.log(kanken.lv02pre);
console.log(kanken.lv02);
console.log(kanken.lv01pre);
console.log(kanken.lv01);

// Old JLPT
console.log(jlpt.old4);
console.log(jlpt.old3);
console.log(jlpt.old2);
console.log(jlpt.old1);

// New JLPT
console.log(jlpt.n5);
console.log(jlpt.n4);
console.log(jlpt.n3);
console.log(jlpt.n2);
console.log(jlpt.n1);

// Kyouiku Kanji
console.log(kanji.grade.g01);
console.log(kanji.grade.g02);
console.log(kanji.grade.g03);
console.log(kanji.grade.g04);
console.log(kanji.grade.g05);
console.log(kanji.grade.g06);
console.log(kanji.grade.g08); // Remaining of Joyo Kanji
console.log(kanji.grade.g09); // Jinmeiyo Kanji
console.log(kanji.grade.g10); // Variant of Joyo Kanji

// Frequency 1-2501 Kanji taken from KANJIDIC, made by Alexandre Girardi
console.log(kanji.freq);

// 13,108 kanji from KANJIDIC (JIS X 0208-1998, JIS X 0212-1990, JIS X 0213-2012)
console.log(kanji.all);

```


The kanji characters in the frequency list array are ordered from most popular to least popular.
The rest of arrays are not ordered.

## Development

| Branch | Status |
| - | - |
| master | [![Build Status](https://travis-ci.org/ezhmd/kanji.svg?branch=master)](https://travis-ci.org/ezhmd/kanji) |
| develop | [![Build Status](https://travis-ci.org/ezhmd/kanji.svg?branch=develop)](https://travis-ci.org/ezhmd/kanji) |

### Testing
```
npm test
```
## References

The items are collected from following sources.

- JLPT Study by Peter van der Woude https://jlptstudy.net
- Jonathan Waller JLPT Kanji List http://www.tanos.co.uk/jlpt/
- KANJIDIC Project http://www.edrdg.org/wiki/index.php/KANJIDIC_Project
- Kanshudo Kanji Collections https://www.kanshudo.com/collections
- nihongo-pro.com https://nihongo-pro.com/
- 日本漢字能力検定級別漢字表 https://www.kanken.or.jp/kanken/outline/degree.html
- 漢字辞典 https://kanjijoho.com
- 辞典オンライン https://jitenon.jp

## Authors

* **Ezzat Chamudi** - [ezhmd](https://github.com/ezhmd)

See also the list of [contributors](https://github.com/ezhmd/kanji/graphs/contributors) who participated in this project.

## License

Kanji code is licensed under [MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/). Images, logos, docs, and articles in this Kanji project are released under [CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/legalcode).

Libraries, dependencies, and tools used in this project are tied with their own licenses respectively.
