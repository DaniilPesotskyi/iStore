import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { getLocales } from "@/lib/getLocales";

import Layout from "@/components/common/Layout/Layout";
import { components } from "@/slices";

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient();
  const page = await client.getSingle("services", { lang: params.lang });

  const locales = await getLocales(page, client);

  return (
    <Layout locales={locales} lang={params.lang}>
      <SliceZone slices={page.data.slices} components={components} />;
    </Layout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("services", { lang: params.lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
