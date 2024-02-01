import { IphoneDocument } from "../../prismicio-types";

// Types for cart with qnt

export interface ICartItem extends IphoneDocument {
  qnt: number;
}
