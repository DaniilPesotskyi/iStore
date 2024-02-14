import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";
import FaqItem from "@/components/pages/faqs/FaqItem/FaqItem";

export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

const Faqs = ({ slice }: FaqsProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.title} position="left" />
      <ul className={css.list}>
        {slice.items.map((i, index) => (
          <li className={css.item} key={index}>
            <FaqItem item={i} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Faqs;
