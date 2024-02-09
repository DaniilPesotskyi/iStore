"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import css from "./SearchBar.module.css";
import { ChangeEvent, useCallback } from "react";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("query", e.target.value.toLowerCase());

    if (e.target.value !== "") {
      params.set("query", e.target.value);
    } else {
      params.delete("query");
    }

    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className={css.wrap}>
      <input
        type="text"
        className={css.input}
        name="searcher"
        placeholder="."
        id="search"
        onChange={(e) => createQueryString(e)}
      />
      <label htmlFor="search" className={css.label}>
        <SearchIcon className={css.icon} />
      </label>
    </div>
  );
};

export default SearchBar;

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
