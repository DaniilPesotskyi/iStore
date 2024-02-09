"use client";

import { useState } from "react";
import css from "./DisplayMode.module.css";

import clsx from "clsx";

interface IProps {
  className: string;
}

const DisplayMode: React.FC<IProps> = ({ className }) => {
  const [mode, setMode] = useState<"grid" | "row">("grid");

  return (
    <div className={clsx(css.wrap, className)}>
      <button
        type="button"
        className={clsx(css.btn, mode === "grid" && css.active)}
        onClick={() => setMode("grid")}
      >
        <GridIcon className={css.icon} />
      </button>
      <button
        type="button"
        className={clsx(css.btn, mode === "row" && css.active)}
        onClick={() => setMode("row")}
      >
        <RowIcon className={css.icon} />
      </button>
    </div>
  );
};

export default DisplayMode;

function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
    >
      <path d="M8 6h13a3 3 0 013 3v13a3 3 0 01-3 3H8a3 3 0 01-3-3V9a3 3 0 013-3zm0 1a2 2 0 00-2 2v3h5V7H8zM6 22a2 2 0 002 2h3v-5H6v3zm5-9H6v5h5v-5zm10 11a2 2 0 002-2v-3h-5v5h3zm2-11h-5v5h5v-5zm0-4a2 2 0 00-2-2h-3v5h5V9zM12 7v5h5V7h-5zm0 17h5v-5h-5v5zm5-11h-5v5h5v-5z"></path>
    </svg>
  );
}

function RowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
    >
      <path d="M26.25 6.094H3.75a.469.469 0 00-.469.468V22.5a1.406 1.406 0 001.406 1.406h20.625A1.406 1.406 0 0026.72 22.5V6.562a.469.469 0 00-.469-.468zM4.219 12.656h5.625v4.688H4.219v-4.688zm6.562 0h15v4.688h-15v-4.688zm15-5.625v4.688H4.22V7.03h21.56zM4.22 22.5v-4.219h5.625v4.688H4.688a.469.469 0 01-.47-.469zm21.093.469h-14.53V18.28h15v4.22a.469.469 0 01-.47.469z"></path>
    </svg>
  );
}
