"use client";

import css from "./ProductCard.module.css";

import Link from "next/link";
import { useDispatch } from "react-redux";

import { addItem } from "@/redux/cart/cartSlice";
import { IIPhone } from "@/types/products";
import { IphoneDocument } from "../../../../prismicio-types";

interface IProps {
  item: IphoneDocument<string> | undefined;
}

const ProductCard: React.FC<IProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.wrap}>
      <div className={css.imageWrap}>
        <div className={css.image}></div>
        <div className={css.overlay}>
          <Link className={css.link} href={"/"}></Link>
          <button
            type="button"
            className={css.cartBtn}
            onClick={() => dispatch(addItem({ ...item, qnt: 1 }))}
          ></button>
        </div>
      </div>
      <h3 className={css.title}>{item?.data.title}</h3>
      <span className={css.price}>{item?.data.price} ₴</span>
    </div>
  );
};

export default ProductCard;
