"use client";

import css from "./CartItem.module.css";

import { KeyTextField } from "@prismicio/client";

interface IProps {
  name: KeyTextField;
  price: KeyTextField;
  qnt: number;
  increment: () => void;
  decrement: () => void;
  del: () => void;
}

const CartItem: React.FC<IProps> = ({
  name,
  price,
  qnt,
  increment,
  decrement,
  del,
}) => {
  return (
    <div className={css.wrap}>
      <div className={css.imageWrap}>
        <div className={css.image}></div>
        <button
          type="button"
          className={css.deleteBtn}
          aria-label={`Delete ${name} from your cart`}
        >
          <DeleteIcon className={css.deleteIcon} />
        </button>
      </div>
      <div className={css.info}>
        <h2 className={css.title}>{name}</h2>
        <div className={css.qntWrap}>
          <div className={css.qntCounter}>
            <button
              type="button"
              className={css.qntBtn}
              onClick={() => decrement()}
            >
              <MinusIcon className={css.qntIcon} />
            </button>
            {qnt}
            <button
              type="button"
              className={css.qntBtn}
              onClick={() => increment()}
            >
              <PlusIcon className={css.qntIcon} />
            </button>
          </div>
          <div className={css.price}>{price} UAH</div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

function DeleteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.625"
        d="M3.208 3.208l4.583 4.584m-4.583 0l4.583-4.584"
      ></path>
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
    >
      <path d="M13.008 7.5a.351.351 0 01-.352.352H7.852v4.804a.351.351 0 11-.704 0V7.852H2.344a.352.352 0 010-.704h4.804V2.344a.352.352 0 01.704 0v4.804h4.804a.351.351 0 01.352.352z"></path>
    </svg>
  );
}

function MinusIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
    >
      <path d="M3.75 7.813v-.625h7.5v.625h-7.5z"></path>
    </svg>
  );
}
