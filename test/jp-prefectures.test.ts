import data from "../data/prefectures.json";
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
} from "../src/jp-prefectures";

test("findByName", () => {
  expect(findByName("北海道")).toBe(data[0]);
  expect(findByName("hoge")).toBe(undefined);
});

test("findByCode", () => {
  expect(findByCode("1")).toBe(data[0]);
  expect(findByCode("01")).toBe(data[0]);
  expect(findByCode(1)).toBe(data[0]);
  expect(findByCode(0)).toBe(undefined);
});

test("filterByArea", () => {
  expect(filterByArea("四国")).toStrictEqual([data[35], data[36], data[37], data[38]]);
  expect(filterByArea("hoge")).toStrictEqual([]);
});

test("prefectures", () => {
  expect(prefectures()).toStrictEqual(data);
});

test("prefectureCodes", () => {
  expect(prefectureCodes()).toContain(data[13].code);
});

test("prefectureNames", () => {
  expect(prefectureNames()).toContain(data[13].name);
});

test("prefectureEnNames", () => {
  expect(prefectureEnNames()).toContain(data[13].enName);
});

test("prefectureAreas", () => {
  expect(prefectureAreas()).toStrictEqual(["北海道", "東北", "関東", "中部", "関西", "中国", "四国", "九州"]);
});

test("prefectureCapitals", () => {
  expect(prefectureCapitals()).toContain(data[13].capital);
});
