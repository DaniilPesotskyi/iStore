import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";

import Heading from "@/components/common/Heading/Heading";
import Section from "@/components/common/Section/Section";
import { PrismicNextLink } from "@prismicio/next";

export type CatalogProps = SliceComponentProps<Content.CatalogSlice>;

const Catalog = async ({ slice }: CatalogProps): Promise<JSX.Element> => {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      containerCN={css.container}
    >
      <Heading position="center" field={slice.primary.heading} />
      <ul className={css.list}>
        {settings.data.navigation.map((i, index) => (
          <li key={index}>
            <PrismicNextLink className={css.link} field={i.link}>
              {i.label}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Catalog;
