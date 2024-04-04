export type detectedKanjiType = {
  detectedKanjis: string[];
  prevKanji: string;
  newKanji: string;
};

export type kanjiCardType = {
  kanji: string;
  position: "FIRST" | "SECOND" | "THIRD" | "FOURTH";
  pairA: string;
  pairB?: string;
  pairC?: string;
};
