import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem } from "@/types/cartItem";

interface IState {
  items: Array<ICartItem>;
}

const initialState: IState = {
  items: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ICartItem>) => {
      state.items.push(action.payload);
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
          i.qnt -= 1;
        }
      });
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items.filter((i) => i.uid !== i.uid);
    },
  },
});

export const { incrementItem, decrementItem, deleteItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
