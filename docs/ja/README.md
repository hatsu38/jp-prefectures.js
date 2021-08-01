# jp-prefectures
![example workflow](https://github.com/hatsu38/jpPrefectures/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/jp-prefectures.svg)](https://badge.fury.io/js/jp-prefectures)

[English](../../README.md) | 日本語

日本の都道府県情報を簡単に扱うことができるパッケージです。

## インストール

The library is available as an [npm package](https://www.npmjs.com/package/jp-prefectures).

```sh
npm install jp-prefectures
```
or

```sh
yarn add jp-prefectures
```

## 使い方

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

// 都道府県名(漢字)から都道府県を検索できます
findByName("北海道");
//=> {code: 1, name: "北海道", enName: "hokkaido", area: "北海道", capital: "札幌市"}

// 都道府県コードから都道府県を検索できます
findByCode(13);
//=> {code: 13, name: "東京都", enName: "tokyo", area: "関東", capital: "新宿区"}

// 地方名の漢字で都道府県の絞り込みができます。
filterByArea("関東")
/*
=> [
  {code: 8, name: "茨城県", enName: "ibaraki", area: "関東", capital: "水戸市"},
  {code: 9, name: "栃木県", enName: "tochigi", area: "関東", capital: "宇都宮市"},
  ...,
  {code: 14, name: "神奈川県", enName: "kanagawa", area: "関東", capital: "横浜市"}
]
*/

// すべての都道府県一覧
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

// すべての都道府県コード一覧
prefectureCodes()
//=> [1, 2, ..., 47]

// すべての都道府県名一覧
prefectureNames()
//=> ["北海道", "青森県", ..., "沖縄県"]

// すべての都道府県英語名一覧
prefectureEnNames()
//=> ["hokkaido", "aomori", ..., "okinawa"]

// すべての都道府県地方一覧
prefectureAreas()
//=> ["北海道", "東北", ..., "九州"]

// すべての県庁所在地名一覧
prefectureCapitals()
//=> ["札幌市", "青森市", ..., "那覇市"]
```

## 貢献
バグの報告や新機能のリクエストをお待ちしています。

また、github上で課題を作成したり、課題にコメントしていただければ、メンテナー([@hatsu38](https://github.com/hatsu38))が返信します。

このリポジトリにスターをつけていただけると喜びます！

連絡は↓のTwitterにお問い合わせください。

[https://twitter.com/hatsu_38](https://twitter.com/hatsu_38)

## デプロイ

```sh
npm version (patch | mainer | major)
git tag
git push origin $TAG_VERSION
git release $TAG_VERSION
```

## ライセンス
このコードは、MITライセンスに基づいて自由に使用することができます。