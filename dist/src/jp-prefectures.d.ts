interface Prefecture {
    code: number;
    name: string;
    enName: string;
    area: string;
    capital: string;
}
declare function findByName(value: string): Prefecture | undefined;
declare function findByCode(value: string | number): Prefecture | undefined;
declare function filterByArea(value: string): Prefecture[];
declare function prefectures(): Prefecture[];
declare function prefectureCodes(): number[];
declare function prefectureNames(): string[];
declare function prefectureEnNames(): string[];
declare function prefectureAreas(): string[];
declare function prefectureCapitals(): string[];
export { findByName, findByCode, filterByArea, prefectures, prefectureCodes, prefectureNames, prefectureEnNames, prefectureAreas, prefectureCapitals, };
