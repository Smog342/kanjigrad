import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { detectedKanjiType } from "../../type";

const initialState: detectedKanjiType = {
  detectedKanjis: [],
  prevKanji: "",
  newKanji: "",
};

const detectedKanjiSlice = createSlice({
  name: "detectedKanji",
  initialState,
  reducers: {
    detectKanji: (state, action: PayloadAction<string>) => {
      state.prevKanji = state.newKanji;
      state.newKanji = action.payload;
    },
    pairKanji: (state, action: PayloadAction<string>) => {
      state.detectedKanjis = [
        ...new Set([...state.detectedKanjis, action.payload]),
      ];
    },
  },
});

export const { detectKanji, pairKanji } = detectedKanjiSlice.actions;

export default detectedKanjiSlice.reducer;
