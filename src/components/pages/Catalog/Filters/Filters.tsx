"use client";

import css from "./Filters.module.css";

import { useEffect, useState } from "react";
import clsx from "clsx";

import getFilters from "@/lib/getFilters";
import FilterItem from "./FilterItem/FilterItem";

interface IProps {
  className?: string;
  device: "iphone";
}

const Filter: React.FC<IProps> = ({ className, device }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await getFilters("iphone");
      setFilters(result);
    };

    fetchData();
  }, []);

  // BackdropClick
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      e.target instanceof HTMLDivElement &&
      e.target.classList.contains(css.backdrop)
    ) {
      setIsOpen(false);
      e.stopPropagation();
    }
  };

  // FILTERS BLOCK MARKUPS
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
          {Object.entries(filters).map(([key, value], index) => (
            <li key={index}>
              <FilterItem label={key} filters={value as []} />
            </li>
          ))}
        </ul>
      </>
    );
  };

  getFilters(device);

  return (
    <div className={clsx(css.wrap, className)}>
      <button
        type="button"
        className={css.openBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FilterIcon className={css.filterIcon} />
      </button>
      <div className={css.filtersWrap}>{onFiltersRender()}</div>
      {isOpen && (
        <div className={css.backdrop} onClick={onBackdropClick}>
          <div className={css.modal}>
            <div className={css.header}>
              <button
                type="button"
                className={css.closeBtn}
                onClick={() => setIsOpen(false)}
              >
                <CloseIcon className={css.closeIcon} />
              </button>
            </div>
            {onFiltersRender()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;

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
        <path d="M10.244 0c5.659 0 10.245 4.525 10.245 10.105a9.986 9.986 0 01-2.472 6.584l6.736 6.841a.858.858 0 01-.02 1.225.888.888 0 01-1.24-.017l-6.73-6.838a10.288 10.288 0 01-6.52 2.311C4.589 20.211 0 15.686 0 10.105 0 4.525 4.588 0 10.244 0zm0 1.732c-4.688 0-8.488 3.75-8.488 8.373 0 4.625 3.8 8.374 8.488 8.374 4.687 0 8.489-3.75 8.489-8.374 0-4.625-3.8-8.373-8.488-8.373"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h25v25H0z"></path>
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
