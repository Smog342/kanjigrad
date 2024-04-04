import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { baseApi } from "./api/baseApi";
import detectedKanjiSlice from "./reducers/detectedKanjiSlice";
import timerSlice from "./reducers/timerSlice";

export const store = configureStore({
  reducer: {
    detectedKanji: detectedKanjiSlice,
    timer: timerSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
