import { Prefecture } from "./interfaces";
import prefs from "./data/prefectures.json";

function findByName(value: string): Prefecture | undefined{
  return prefs.find(pref => pref.name === value);
}

function findByCode(value: string | number): Prefecture | undefined {
  return prefs.find(pref => pref.code === Number(value));
}

function filterByArea(value: string): Prefecture[] {
  return prefs.filter(pref => pref.area === value);
}

function prefectures(): Prefecture[] {
  return prefs;
}

function prefectureCodes(): number[] {
  return prefs.map(pref => pref.code);
}

function prefectureNames(): string[] {
  return prefs.map(pref => pref.name);
}

function prefectureEnNames(): string[] {
  return prefs.map(pref => pref.enName);
}

function prefectureAreas(): string[] {
  const onlyUnique = (value: string, index: number, self: string[]) => {
    return self.indexOf(value) === index;
  };
  const areas = prefs.map(pref => pref.area);
  return areas.filter(onlyUnique);
}

function prefectureCapitals(): string[] {
  return prefs.map(pref => pref.capital);
}

export {
  findByName,
  findByCode,
  filterByArea,
  prefectures,
  prefectureCodes,
  prefectureNames,
  prefectureEnNames,
  prefectureAreas,
  prefectureCapitals,
};
