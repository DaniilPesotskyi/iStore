"use client";

import css from "./FaqItem.module.css";

import { FaqsSliceDefaultItem, Simplify } from "../../../../../prismicio-types";

import { useState } from "react";
import clsx from "clsx";
import { PrismicRichText } from "@prismicio/react";

interface IProps {
  item: Simplify<FaqsSliceDefaultItem>;
}

const FaqItem: React.FC<IProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(css.wrap, isOpen && css.open)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={css.heading}>
        <PrismicRichText
          field={item.question}
          components={{
            heading2: ({ children }) => (
              <h2 className={css.question}>{children}</h2>
            ),
          }}
        />
        {isOpen ? (
          <EyeOpenIcon className={css.icon} />
        ) : (
          <EyeCloseIcon className={css.icon} />
        )}
      </div>
      {isOpen && (
        <PrismicRichText
          field={item.answer}
          components={{
            paragraph: ({ children }) => (
              <p className={css.answer}>{children}</p>
            ),
          }}
        />
      )}
    </div>
  );
};

export default FaqItem;

function EyeOpenIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
    >
      <path d="M33.313 17.279c-.047-.104-1.165-2.583-3.669-5.086-2.318-2.32-6.306-5.084-12.144-5.084S7.674 9.874 5.355 12.193c-2.503 2.503-3.622 4.982-3.668 5.086a.558.558 0 000 .444c.046.105 1.165 2.582 3.668 5.086 2.324 2.324 6.308 5.082 12.145 5.082 5.836 0 9.826-2.763 12.144-5.082 2.504-2.504 3.622-4.98 3.669-5.086a.56.56 0 000-.444zm-4.471 4.785c-3.154 3.144-6.973 4.733-11.348 4.733-4.375 0-8.188-1.593-11.347-4.733A18.555 18.555 0 012.794 17.5a18.55 18.55 0 013.358-4.564c3.16-3.14 6.973-4.733 11.348-4.733 4.375 0 8.188 1.593 11.347 4.733a18.563 18.563 0 013.358 4.564 18.554 18.554 0 01-3.358 4.564h-.005zM17.5 11.484a6.015 6.015 0 106.015 6.016 6.023 6.023 0 00-6.015-6.016zm0 10.938a4.922 4.922 0 110-9.844 4.922 4.922 0 010 9.844z"></path>
    </svg>
  );
}

function EyeCloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M10.351 10.433c-2.473 1.522-4.813 3.879-7.018 7.067 4.228 6.111 8.95 9.166 14.167 9.166 2.371 0 4.641-.633 6.808-1.895m2.647-1.9c1.633-1.404 3.203-3.193 4.711-5.371-4.228-6.112-8.95-9.167-14.166-9.167-1.384 0-2.734.217-4.049.645M6.666 6.667l21.667 21.785"
      ></path>
    </svg>
  );
}
