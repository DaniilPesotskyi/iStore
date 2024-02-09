"use client";

import css from "./FilterItem.module.css";

import clsx from "clsx";
import getFilterLabel from "@/lib/getFilterLabel";
import { useParams } from "next/navigation";
import { useState } from "react";

interface IProps {
  label: string;
  filters: [];
}

const FilterItem: React.FC<IProps> = ({ label, filters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  return (
    <div className={css.wrap}>
      <div className={css.heading} onClick={() => setIsOpen(!isOpen)}>
        <span>{getFilterLabel(label, params.lang)} </span>
        <ArrowIcon className={clsx(css.icon, isOpen && css.open)} />
      </div>
      {isOpen && (
        <ul className={css.list}>
          {filters.map((i, index) => (
            <li key={index} className={css.item}>
              <label htmlFor={i} className={css.label}>
                <input type="checkbox" name={i} id={i} className={css.input} />
                <span className={css.checkbox}></span>
                {i}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
    >
      <path d="M.12 11.007a.5.5 0 00.85.351L7.588 4.74l6.521 6.522a.499.499 0 00.703-.703L7.94 3.683a.499.499 0 00-.703 0l-6.97 6.97a.494.494 0 00-.146.354z"></path>
    </svg>
  );
}

export default FilterItem;
