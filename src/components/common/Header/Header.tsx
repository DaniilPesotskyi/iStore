"use client";

import css from "./Header.module.css";

import { SettingsDocument } from "../../../../prismicio-types";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicDocument } from "@prismicio/client";

import clsx from "clsx";
import React from "react";

import {
  PhoneIcon,
  TabletIcon,
  WatchIcon,
  DesktopIcon,
  HeadphonesIcon,
} from "@/components/icons/devices";
import MobileMenu from "./MobileMenu/MobileMenu";
import Cart from "./Cart/Cart";

interface IProps {
  settings: SettingsDocument<string>;
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
  lang: string;
}

const localeLabels: { [key: string]: string } = {
  "en-us": "Eng",
  "uk-ua": "Укр",
};

const Header: React.FC<IProps> = ({ settings, locales, lang }) => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            {settings.data.pagesnavigation.map((i, index) => (
              <React.Fragment key={index}>
                <li>
                  <PrismicNextLink
                    field={i.link}
                    className={css.navigationLink}
                  >
                    {i.label}
                  </PrismicNextLink>
                </li>
                <div className={css.dot}></div>
              </React.Fragment>
            ))}

            {locales.map(
              (locale) =>
                locale.lang !== lang && (
                  <PrismicNextLink
                    key={locale.lang}
                    href={locale.url as string}
                    locale={locale.lang}
                    aria-label={`Change language to ${locale.lang_name}`}
                    className={css.langChanger}
                  >
                    {lang === "uk-ua" ? <UkraineIcon /> : <AmericaIcon />}
                    {localeLabels[lang] || ""}
                  </PrismicNextLink>
                )
            )}
          </ul>
        </nav>
      </div>
      <div className={css.main}>
        <div className={clsx(css.container, css.flexContainer)}>
          <PrismicNextLink field={settings.data.homepage}>
            <AppleIcon className={css.logo} />
          </PrismicNextLink>
          <ul className={css.productsNavigation}>
            {settings.data.navigation.map((i, index) => (
              <li key={index}>
                <PrismicNextLink field={i.link} className={css.productsLink}>
                  {i.icon === "IPhone" && (
                    <PhoneIcon className={css.productsIcon} />
                  )}
                  {i.icon === "IPad" && (
                    <TabletIcon className={css.productsIcon} />
                  )}
                  {i.icon === "Mac" && (
                    <DesktopIcon className={css.productsIcon} />
                  )}
                  {i.icon === "Watch" && (
                    <WatchIcon className={css.productsIcon} />
                  )}
                  {i.icon === "Headphones" && (
                    <HeadphonesIcon className={css.productsIcon} />
                  )}
                  {i.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
          <MobileMenu lang={lang} />
          <Cart lang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
    >
      <path d="M28 34H13c-8-9-7-21 2-22l5 2 6-2c3 0 5 1 6 3-5 3-4 10 1 12l-5 7zm-8-22c0-4 3-7 6-7 1 4-4 8-6 7z"></path>
    </svg>
  );
}

function UkraineIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="none">
      <mask
        id="a"
        width="13"
        height="10"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h13v10H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#3195F9"
          fillRule="evenodd"
          d="M0 0v10h13V0H0z"
          clipRule="evenodd"
        ></path>
        <mask
          id="b"
          width="13"
          height="10"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M0 0v10h13V0H0z"
            clipRule="evenodd"
          ></path>
        </mask>
        <g mask="url(#b)">
          <path
            fill="#FECA00"
            fillRule="evenodd"
            d="M0 5v5h13V5H0z"
            clipRule="evenodd"
          ></path>
        </g>
      </g>
    </svg>
  );
}

function AmericaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" fill="none">
      <mask
        id="a"
        width="13"
        height="10"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M0 0h13v10H0z"></path>
      </mask>
      <g mask="url(#a)">
        <path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M0 0h13v10H0V0z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M0 1v1h13V1H0zm0 2h13H0zm0 2V4h13v1H0zm0 1v1h13V6H0zm0 2h13H0zm0 2V9h13v1H0z"
          clipRule="evenodd"
        ></path>
        <path fill="#2E42A5" d="M0 0h7v6H0z"></path>
        <path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M1 2h1-1 1v1H1V2v1h1-1l1 1H1v1h1V4l1 1H2h1l1-1H3h1v1h1V4h1-1l1 1h1-1l1-1H6V3h1-1 1-1V2v1-1h1L6 1h1-1V0v1H5h1v1L5 1v1-2L4 1v1-1 1H3V1h1-1V0v1H2h1L2 2V1v1-1H1V0v2zm5 1H5h1L5 2v1h1zM5 3H4v1h1V3zM3 4H2l1-1v1zm1-1H3h1-1l1-1v1zM2 3h1-1V2v1zm3-1v1-1L4 3V2h1zM3 2H2v1h1V2v1-1z"
          clipRule="evenodd"
        ></path>
      </g>
    </svg>
  );
}
