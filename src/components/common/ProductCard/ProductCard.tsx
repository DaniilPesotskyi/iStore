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
          <Link className={css.link} href={"/"}>
            <LinkIcon className={css.linkIcon} />
          </Link>
          <button
            type="button"
            className={css.cartBtn}
            onClick={() => dispatch(addItem({ ...item, qnt: 1 }))}
          >
            <CartIcon className={css.cartIcon} />
          </button>
        </div>
      </div>
      <h3 className={css.title}>{item?.data.title}</h3>
      <span className={css.price}>{item?.data.price} ₴</span>
    </div>
  );
};

export default ProductCard;

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path d="M8.333 13.013H23.41h-1.39.518H8.333zm.634-1.666H31l-2.217-2.66a1.256 1.256 0 00-.37-.257 1.018 1.018 0 00-.433-.097H11.987c-.15 0-.294.033-.434.097-.138.063-.26.149-.366.257l-2.22 2.66zm7.7 10.256L20 19.937l3.333 1.666v-8.59h-6.666v8.59zm6.716 11.73H9.36a2.59 2.59 0 01-1.9-.791 2.585 2.585 0 01-.793-1.9V12.478a2.577 2.577 0 01.621-1.71l2.597-3.116c.241-.318.543-.561.905-.73a2.72 2.72 0 011.17-.255h16.017c.417 0 .811.085 1.181.255.37.169.679.411.925.728l2.629 3.183a2.677 2.677 0 01.621 1.74v6.277a4.029 4.029 0 00-.728-.138 7.493 7.493 0 00-.747-.039h-.191v-5.66H25V21.6c-.31.213-.618.5-.923.86a3.93 3.93 0 00-.667 1.057L20 21.827l-5 2.5V13.013H8.333v17.629c0 .299.096.544.289.736a.998.998 0 00.736.289h13.18c.1.31.225.602.374.873.149.27.306.535.473.793m7.608.994v-5h-5V27.66h5v-5h1.667v5h5v1.667h-5v5h-1.667z"></path>
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M26 7h7v7m-1.5-5.5L24 16m-3-7h-9a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-9"
      ></path>
    </svg>
  );
}
