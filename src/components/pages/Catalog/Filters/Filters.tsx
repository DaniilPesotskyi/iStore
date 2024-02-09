"use client";

import css from "./Filters.module.css";

import { useEffect, useState } from "react";
import clsx from "clsx";

import getFilters from "@/lib/getFilters";
import FilterItem from "./FilterItem/FilterItem";
import SearchBar from "./SearchBar/SearchBar";

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
        <ul className={css.filtersList}>
          <SearchBar />
          {Object.entries(filters).map(([key, value], index) => (
            <li key={index}>
              <FilterItem label={key} filters={value as []} />
            </li>
          ))}
        </ul>
      </>
    );
  };

  
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
