import { RootState } from "../store";

export const selectDisplayMode = (state: RootState) =>
  state.displayMode.display;
