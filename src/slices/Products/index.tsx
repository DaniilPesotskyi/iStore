"use client";

import Filter from "@/components/pages/Catalog/Filters";
import css from "./index.module.css";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type ProductsProps = SliceComponentProps<Content.ProductsSlice>;

interface IProps extends ProductsProps {}

const Products = ({ slice }: IProps): JSX.Element => {
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
        <Filter className={css.filter} />
        <div className={css.mode}>qqqq</div>
        <ul className={css.list}>wwww</ul>
      </div>
    </section>
  );
};

export default Products;
