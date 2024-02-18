import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  mode: "grid" | "row";
}

const initialState: IState = {
  mode: "grid",
};
const displayModeSlice = createSlice({
  name: "displayMode",
  initialState,
  reducers: {
    setRowMode: (state, action: PayloadAction<string>) => {
      state.mode = "row";
    },
    setGridMode: (state, action: PayloadAction<string>) => {
      state.mode = "grid";
    },
  },
});

export const { setRowMode, setGridMode } = displayModeSlice.actions;
export const displayModeReducer = displayModeSlice.reducer;
