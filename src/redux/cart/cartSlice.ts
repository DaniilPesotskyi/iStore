import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IIPhone } from "@/types/products";

interface IState {
  items: Array<IIPhone>;
}

const initialState: IState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IIPhone>) => {
      if (state.items.every((i) => i.uid !== action.payload.uid)) {
        state.items.push(action.payload);
      } else if (state.items.length === 0) {
        state.items.push(action.payload);
      }
    },
    incrementItem: (state, action: PayloadAction<string>) => {
      state.items.forEach((i) => {
        if (i.uid === action.payload) {
          i.qnt += 1;
        }
      });
    },
    decrementItem: (state, action: PayloadAction<string>) => {
      state.items.forEach((i) => {
        if (i.uid === action.payload) {
          if (i.qnt === 1) {
            state.items = state.items.filter((i) => i.uid !== action.payload);
          } else {
            i.qnt -= 1;
          }
        }
      });
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.uid !== action.payload);
    },
  },
});

export const { incrementItem, decrementItem, deleteItem, addItem } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
