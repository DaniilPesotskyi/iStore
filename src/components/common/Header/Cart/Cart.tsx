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
      <path
        strokeLinecap="round"
        strokeWidth="1.042"
        d="M5.833 7.5H8.43c1.16 0 1.74 0 2.177.315.436.315.62.865.986 1.965l.907 2.72"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.042"
        d="M29.167 29.167h-15.75c-.242 0-.364 0-.457-.01a1.67 1.67 0 01-1.445-2.005c.038-.148.083-.294.135-.437.087-.257.128-.385.177-.5a3.333 3.333 0 012.83-2.04c.123-.008.258-.008.528-.008h8.982"
      ></path>
      <path
        strokeLinecap="round"
        strokeWidth="1.042"
        d="M23.632 24.167h-5.069c-2.133 0-3.2 0-4.033-.55-.835-.55-1.255-1.53-2.095-3.49l-.282-.657c-1.35-3.15-2.023-4.722-1.283-5.847.743-1.123 2.457-1.123 5.88-1.123h8.8c3.833 0 5.748 0 6.472 1.245.721 1.245-.229 2.908-2.13 6.235l-.472.828c-.937 1.639-1.405 2.459-2.182 2.909-.775.45-1.72.45-3.606.45z"
      ></path>
      <path d="M28.333 35a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333zM15 35a1.667 1.667 0 100-3.333A1.667 1.667 0 0015 35z"></path>
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
