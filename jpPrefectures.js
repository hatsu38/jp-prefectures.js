'use strict'

const prefs = require('./data/prefectures.json');

function findByName(value) {
  return prefs.find(pref => pref.name === value);
}

function findByCode(value) {
  return prefs.find(pref => pref.code === Number(value));
}

function filterByArea(value) {
  return prefs.filter(pref => pref.area === value);
}

function prefectures() {
  return prefs;
}

function prefectureCodes() {
  return prefs.map(pref => pref.code);
}

function prefectureNames() {
  return prefs.map(pref => pref.name);
}

function prefectureEnNames() {
  return prefs.map(pref => pref.enName);
}

function prefectureAreas() {
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  const areas = prefs.map(pref => pref.area);
  return areas.filter(onlyUnique);
}

function prefectureCapitals() {
  return prefs.map(pref => pref.capital);
}


module.exports = {
  findByName,
  findByCode,
  filterByArea,
  prefectures,
  prefectureCodes,
  prefectureNames,
  prefectureEnNames,
  prefectureAreas,
  prefectureCapitals,
}
