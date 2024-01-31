import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Section from "@/components/common/Section/Section";
import { PrismicNextImage } from "@prismicio/next";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      containerCN={css.section}
    >
      {slice.items.map((i, index) => (
        <div key={index} className={css.sliderWrap}>
          <div className={css.slide}>
            <div className={css.shadows}></div>
            <PrismicNextImage field={i.image} className={css.image} />
          </div>
        </div>
      ))}
      <PrismicRichText
        field={slice.primary.title}
        components={{
          heading1: ({ children }) => <h1 className={css.title}>{children}</h1>,
        }}
      />
    </Section>
  );
};

export default Hero;
