"use client";

import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { IphoneDocument } from "../../../prismicio-types";

import { useEffect, useState } from "react";

import DisplayMode from "@/components/pages/Catalog/DisplayMode/DisplayMode";
import Filter from "@/components/pages/Catalog/Filters/Filters";
import ProductCard from "@/components/common/ProductCard/ProductCard";

export type ProductsProps = SliceComponentProps<Content.ProductsSlice>;

const Products = ({ slice }: ProductsProps): JSX.Element => {
  const [products, setProducts] = useState<IphoneDocument<string>[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const client = createClient();
      const products = await client.getAllByType("iphone");
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className={css.heading}>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <h1 className={css.headingTitle}>{children}</h1>
            ),
          }}
        />
      </div>
      <div className={css.main}>
        <Filter className={css.filter} device="iphone" />
        <DisplayMode className={css.mode} />
        <ul className={css.list}>
          {products.map((i, index) => (
            <li key={index}>
              <ProductCard item={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Products;
