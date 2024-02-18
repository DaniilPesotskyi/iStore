import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  display: "grid" | "row";
}
const initialState: IState = {
  display: "grid",
};

const displayModeSlice = createSlice({
  name: "displayMode",
  initialState,
  reducers: {

    setDisplayMode: (state, action: PayloadAction<"grid" | "row">) => {
      state.display = action.payload;

    },
  },
});

export const { setDisplayMode } = displayModeSlice.actions;
export const displayModeReducer = displayModeSlice.reducer;
