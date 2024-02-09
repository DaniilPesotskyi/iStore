"use client";

import css from "./index.module.css";

import { Content, isFilled } from "@prismicio/client";
import { useEffect, useRef, useState } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { IphoneDocument } from "../../../prismicio-types";
import { createClient } from "@/prismicio";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

import ProductCard from "@/components/common/ProductCard/ProductCard";
import Section from "@/components/common/Section/Section";
import Heading from "@/components/common/Heading/Heading";

export type ShowcaseProps = SliceComponentProps<Content.ShowcaseSlice>;

const Showcase = ({ slice }: ShowcaseProps): JSX.Element => {
  const [items, setItems] = useState<(IphoneDocument<string> | undefined)[]>(
    []
  );
  const swiper = useRef<SwiperRef>(null);

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
      <Swiper
        ref={swiper}
        slidesPerView={"auto"}
        spaceBetween={30}
        navigation={false}
        pagination={false}
        modules={[Pagination, Navigation]}
        className={css.swiper}
      >
        {items &&
          items.map((i, index) => (
            <SwiperSlide key={index} className={css.item}>
              <ProductCard item={i} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className={css.pagination}>
        <button
          type="button"
          className={css.paginationBtn}
          onClick={() => swiper.current?.swiper.slidePrev()}
        >
          <ArrowIcon className={css.paginationIcon} />
        </button>
        <button
          type="button"
          className={css.paginationBtn}
          onClick={() => swiper.current?.swiper.slideNext()}
        >
          <ArrowIcon className={css.paginationIcon} />
        </button>
      </div>
    </Section>
  );
};

export default Showcase;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.667"
        d="M21.875 12.486l-18.53.014m7.06-7.292L3.124 12.5l7.28 7.292"
      ></path>
    </svg>
  );
}
