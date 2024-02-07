"use client";

import css from "./Filters.module.css";

import { useState } from "react";
import clsx from "clsx";

interface IProps {
  className?: string;
}

const Filter: React.FC<IProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onFiltersRender = () => {
    return (
      <>
        <div className={css.searchWrap}>
          <input
            type="text"
            className={css.searchInput}
            name="searcher"
            placeholder="."
            id="search"
          />
          <label htmlFor="search" className={css.searchLabel}>
            <SearchIcon className={css.searchIcon} />
          </label>
        </div>
        <ul className={css.filtersList}>
          <li>
            <ul className={css.filtersSublist}></ul>
          </li>
        </ul>
      </>
    );
  };

  return (
    <div className={clsx(css.wrap, className)}>
      <button type="button" className={css.openBtn}>
        <FilterIcon className={css.filterIcon} />
      </button>
      <div className={css.filtersWrap}>{onFiltersRender()}</div>
      {isOpen && <div className={css.modal}>{onFiltersRender()}</div>}
    </div>
  );
};

export default Filter;

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <g clipPath="url(#a)">
        <path d="M10 0a10 10 0 018 17l7 7a1 1 0 010 1 1 1 0 01-2 0l-6-7a10 10 0 01-17-8C0 5 5 0 10 0zm0 2c-4 0-8 3-8 8s4 8 8 8c5 0 9-3 9-8s-4-8-9-8"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="none" d="M0 0h25v25H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeWidth="2.5"
        d="M42 20l3-2 1-4v-2l-1-5-5-1H10L5 7l-1 5v2l1 4 3 2 6 4 3 1 2 3v12l4 2c4 1 5 2 7 1l1-6v-9l2-3"
      ></path>
    </svg>
  );
}
