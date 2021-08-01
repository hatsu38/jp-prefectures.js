# jp-prefectures
![example workflow](https://github.com/hatsu38/jpPrefectures/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/jp-prefectures.svg)](https://badge.fury.io/js/jp-prefectures)

English | [日本語](./docs/ja/README.md)

This is a package that allows you to easily handle information about prefectures in Japan.

## Install

The library is available as an [npm package](https://www.npmjs.com/package/jp-prefectures).

```sh
npm install jp-prefectures
```
or

```sh
yarn add jp-prefectures
```

## Usage

```javascript
import {
  findByName,
  findByCode,
  filterByArea,
  prefectures,
  prefectureCodes,
  prefectureNames,
  prefectureEnNames,
  prefectureAreas,
  prefectureCapitals,
} from "jp-prefectures";

// search prefecture by kanji
findByName("北海道");
//=> {code: 1, name: "北海道", enName: "hokkaido", area: "北海道", capital: "札幌市"}

// search prefecture by prefecture code
findByCode(13);
//=> {code: 13, name: "東京都", enName: "tokyo", area: "関東", capital: "新宿区"}

// search prefectures by area kanji
filterByArea("関東")
/*
=> [
  {code: 8, name: "茨城県", enName: "ibaraki", area: "関東", capital: "水戸市"},
  {code: 9, name: "栃木県", enName: "tochigi", area: "関東", capital: "宇都宮市"},
  ...,
  {code: 14, name: "神奈川県", enName: "kanagawa", area: "関東", capital: "横浜市"}
]
*/

// All prefectues
prefectures()
/*
=>
[
  {code: 1, name: "北海道", enName: "hokkaido", area: "北海道", capital: "札幌市"},
  {code: 2, name: "青森県", enName: "aomori", area: "東北", capital: "青森市"},
  ...,
  {code: 47, name: "沖縄県", enName: "okinawa", area: "九州", capital: "那覇市"}
]
*/

// All prefectues code
prefectureCodes()
//=> [1, 2, ..., 47]

// All prefectues name
prefectureNames()
//=> ["北海道", "青森県", ..., "沖縄県"]

// All prefectues english name
prefectureEnNames()
//=> ["hokkaido", "aomori", ..., "okinawa"]

// All prefectues area name
prefectureAreas()
//=> ["北海道", "東北", ..., "九州"]

// All prefectues capital name
prefectureCapitals()
//=> ["札幌市", "青森市", ..., "那覇市"]
```

## Contributing
I'm looking forward to your bug reports and requests for new features!

You can also open an issue or comment on an issue on github and a maintainer([@hatsu38](https://github.com/hatsu38)) will reply to you.

It would be my pleasure to star this repository!

If you have any concerns, please contact us at ↓.

[https://twitter.com/hatsu_38](https://twitter.com/hatsu_38)

## Deploy

```sh
npm version (patch | mainer | major)
git tag
git push origin $TAG_VERSION
git release $TAG_VERSION
```

## License
This code is free to use under the terms of the MIT license.