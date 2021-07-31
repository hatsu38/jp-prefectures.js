import prefs from "../data/prefectures.json";

interface Prefecture {
  code: number;
  name: string;
  enName: string;
  area: string;
  capital: string;
}

function findByName(value: string): Prefecture | undefined {
  return prefs.find((pref: Prefecture) => pref.name === value);
}

function findByCode(value: string | number): Prefecture | undefined {
  return prefs.find((pref: Prefecture) => pref.code === Number(value));
}

function filterByArea(value: string): Prefecture[] {
  return prefs.filter((pref: Prefecture) => pref.area === value);
}

function prefectures(): Prefecture[] {
  return prefs;
}

function prefectureCodes(): number[] {
  return prefs.map((pref: Prefecture) => pref.code);
}

function prefectureNames(): string[] {
  return prefs.map((pref: Prefecture) => pref.name);
}

function prefectureEnNames(): string[] {
  return prefs.map((pref: Prefecture)=> pref.enName);
}

function prefectureAreas(): string[] {
  const onlyUnique = (value: string, index: number, self: string[]): boolean => {
    return self.indexOf(value) === index;
  };
  const areas = prefs.map((pref: Prefecture) => pref.area);
  return areas.filter(onlyUnique);
}

function prefectureCapitals(): string[] {
  return prefs.map((pref: Prefecture)=> pref.capital);
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
