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
      <path d="M8 13h15-1 1H8zm1-2h22l-2-2-1-1H12l-1 1-2 2zm8 11l3-2 3 2v-9h-6v9zm6 11H7V11l3-3 1-1h18l1 1 3 3a3 3 0 010 2v6h-1v-6h-7v9a5 5 0 00-2 2l-3-2-5 2V13H8v18h1v1h14v1m8 1v-5h-5v-1h5v-5h2v5h5v1h-5v5h-2z"></path>
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
        d="M26 7h7v7m-1-5l-8 7m-3-7h-9a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3v-9"
      ></path>
    </svg>
  );
}
