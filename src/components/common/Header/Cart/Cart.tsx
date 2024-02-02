"use client";

import css from "./Cart.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectItems } from "@/redux/cart/selectors";
import {
  decrementItem,
  deleteItem,
  incrementItem,
} from "@/redux/cart/cartSlice";

import CartItem from "../../CartItem/CartItem";

interface IProps {
  lang: string;
}

const Cart: React.FC<IProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e.target instanceof HTMLDivElement &&
      e.target.classList.contains(css.backdrop)
    ) {
      setIsOpen(false);
      document.body.classList.remove("body-scroll-lock");
      e.stopPropagation();
    }
  };

  const getTotal = () => {
    let total = 0;

    items.forEach((i) => {
      total += i.qnt * Number(i.data.price);
    });

    return total;
  };

  return (
    <>
      <button
        className={css.cartBtn}
        type="button"
        onClick={() => {
          setIsOpen(true);
          document.body.classList.add("body-scroll-lock");
        }}
      >
        <CartIcon className={css.cartIcon} />
      </button>
      {isOpen && (
        <div className={css.backdrop} onClick={onBackdropClick}>
          <div className={css.modal}>
            <div className={css.header}>
              <button
                type="button"
                className={css.closeBtn}
                onClick={() => {
                  setIsOpen(false);
                  document.body.classList.remove("body-scroll-lock");
                }}
              >
                <CloseIcon className={css.closeIcon} />
              </button>
              <h1 className={css.title}>
                {lang === "uk-ua" ? "КОШИК" : "CART"}
              </h1>
            </div>
            <ul className={css.list}>
              {items.map((i, index) => (
                <li key={index}>
                  <CartItem
                    name={i.data.title}
                    price={i.data.price}
                    qnt={i.qnt}
                    increment={() => dispatch(incrementItem(i.uid))}
                    decrement={() => dispatch(decrementItem(i.uid))}
                    del={() => dispatch(deleteItem(i.uid))}
                  />
                </li>
              ))}
            </ul>
            <div className={css.totalWrap}>
              {lang === "uk-ua" ? "ВСЬОГО" : "TOTAL"}
              <span className={css.totalValue}>{getTotal()} UAH</span>
            </div>
            <button type="button" className={css.checkoutBtn}>
              {lang === "uk-ua" ? "ОФОРМИТИ" : "CHECKOUT"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

function CartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path strokeLinecap="round" d="M6 8h5l1 2 1 3"></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M29 29H13s0 0 0 0a2 2 0 01-1-2s0 0 0 0v-1a3 3 0 013-2s0 0 0 0h9"
      ></path>
      <path
        strokeLinecap="round"
        d="M24 24h-9l-3-4v-1c-1-3-2-4-1-5l6-1h9l6 1c1 1 0 3-2 6l-1 1-2 3h-3z"
      ></path>
      <path d="M28 35a2 2 0 100-3 2 2 0 000 3zm-13 0a2 2 0 100-3 2 2 0 000 3z"></path>
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
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
        strokeWidth="1.7"
        d="M12 12l16 16m-16 0l16-16"
      ></path>
    </svg>
  );
}
