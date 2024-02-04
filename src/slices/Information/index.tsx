import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import Section from "@/components/common/Section/Section";

export type InformationProps = SliceComponentProps<Content.InformationSlice>;

const Information = ({ slice }: InformationProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      sectionCN={css.section}
      containerCN={css.container}
    >
      <div>
        <PrismicRichText
          field={slice.primary.text}
          components={{
            paragraph: ({ children }) => <p className={css.text}>{children}</p>,
          }}
        />
        <PrismicNextLink className={css.link} field={slice.primary.button_link}>
          {slice.primary.button_label} <ArrowIcon className={css.icon} />
        </PrismicNextLink>
      </div>
      <PrismicNextImage className={css.image} field={slice.primary.image} />
    </Section>
  );
};

export default Information;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M2 8h11m-4 4l4-4-4-5"
      ></path>
    </svg>
  );
}
