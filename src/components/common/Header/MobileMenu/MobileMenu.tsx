"use client";

import css from "./MobileMenu.module.css";

import { useState } from "react";

interface IProps {}

const MobileMenu: React.FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e.target instanceof HTMLDivElement &&
      e.target.classList.contains(css.backdrop)
    ) {
      setIsOpen(false);
      e.stopPropagation();
    }
  };

  return (
    <>
      <button
        type="button"
        className={css.menuBtn}
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon className={css.menuIcon} />
      </button>
      {isOpen && (
        <div className={css.backdrop} onClick={onBackdropClick}>
          <div className={css.modal}>
            <div className={css.header}>
              <h1 className={css.title}>MENU</h1>
              <button
                type="button"
                className={css.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon className={css.closeIcon} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path d="M8 18a1 1 0 01-1-1V8a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H8zm15 0a1 1 0 01-1-1V8a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-9zM8 33a1 1 0 01-1-1v-9a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1H8zm15 0a1 1 0 01-1-1v-9a1 1 0 011-1h9a1 1 0 011 1v9a1 1 0 01-1 1h-9z"></path>
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
