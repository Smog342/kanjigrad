import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { baseApi } from "./api/baseApi";
import detectedKanjiSlice from "./reducers/detectedKanjiSlice";

export const store = configureStore({
  reducer: {
    detectedKanji: detectedKanjiSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
