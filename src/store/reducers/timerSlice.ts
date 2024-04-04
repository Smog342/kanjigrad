import { createSlice } from "@reduxjs/toolkit";

type timerStateType = {
  isTimerOn: boolean;
};

const initialState: timerStateType = {
  isTimerOn: false,
};

const TimerSlice = createSlice({
  name: "TimerSlice",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.isTimerOn = true;
    },
    stopTimer: (state) => {
      state.isTimerOn = false;
    },
  },
});

export const { startTimer, stopTimer } = TimerSlice.actions;

export default TimerSlice.reducer;
