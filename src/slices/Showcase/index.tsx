"use client";

import css from "./index.module.css";

import { Content, isFilled } from "@prismicio/client";
import { useEffect, useState } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { IphoneDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";

import ProductCard from "@/components/common/ProductCard/ProductCard";
import Section from "@/components/common/Section/Section";
import Heading from "@/components/common/Heading/Heading";

export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  const [items, setItems] = useState<(IphoneDocument<string> | undefined)[]>(
    []
  );

  useEffect(() => {
    const getProducts = async () => {
      const client = createClient();

      const products = await Promise.all(
        slice.items.map((item) => {
          if (isFilled.contentRelationship(item.product) && item.product.uid) {
            return client.getByUID("iphone", item.product.uid);
          }
        })
      );

      setItems(products);
    };

    getProducts();
  }, []);

  return (
    <Section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading field={slice.primary.heading} position="left" />
      <ul>
        {items &&
          items.map((i, index) => (
            <li key={index}>
              <ProductCard item={i} />
            </li>
          ))}
      </ul>
    </Section>
  );
};

export default Showcase;
