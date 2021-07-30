const data = require('../data/prefectures.json');
const {
  findByName,
  findByCode,
  filterByArea,
  prefectures,
  prefectureCodes,
  prefectureNames,
  prefectureEnNames,
  prefectureAreas,
  prefectureCapitals,
} = require('../jpPrefectures');

test('findByName', () => {
  expect(findByName("北海道")).toBe(data[0]);
  expect(findByName("hoge")).toBe(undefined);
  expect(findByName()).toBe(undefined);
});

test('findByCode', () => {
  expect(findByCode("1")).toBe(data[0]);
  expect(findByCode("01")).toBe(data[0]);
  expect(findByCode(1)).toBe(data[0]);
  expect(findByCode(0)).toBe(undefined);
  expect(findByCode()).toBe(undefined);
});

test('filterByArea', () => {
  expect(filterByArea("四国")).toStrictEqual([data[35], data[36], data[37], data[38]]);
  expect(filterByArea("hoge")).toStrictEqual([]);
  expect(filterByArea()).toStrictEqual([]);
});

test('prefectures', () => {
  expect(prefectures()).toStrictEqual(data);
  expect(prefectures("hoge")).toStrictEqual(data);
});

test('prefectureCodes', () => {
  expect(prefectureCodes()).toStrictEqual(data.map(pref => pref.code));
  expect(prefectureCodes("hoge")).toStrictEqual(data.map(pref => pref.code));
});

test('prefectureNames', () => {
  expect(prefectureNames()).toStrictEqual(data.map(pref => pref.name));
  expect(prefectureNames("hoge")).toStrictEqual(data.map(pref => pref.name));
});

test('prefectureEnNames', () => {
  expect(prefectureEnNames()).toStrictEqual(data.map(pref => pref.enName));
  expect(prefectureEnNames("hoge")).toStrictEqual(data.map(pref => pref.enName));
});

test('prefectureAreas', () => {
  expect(prefectureAreas()).toStrictEqual(["北海道", "東北", "関東", "中部", "関西", "中国", "四国", "九州"]);
  expect(prefectureAreas("hoge")).toStrictEqual(["北海道", "東北", "関東", "中部", "関西", "中国", "四国", "九州"]);
});

test('prefectureCapitals', () => {
  expect(prefectureCapitals()).toStrictEqual(data.map(pref => pref.capital));
  expect(prefectureCapitals("hoge")).toStrictEqual(data.map(pref => pref.capital));
});