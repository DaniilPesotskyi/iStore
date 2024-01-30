import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { getLocales } from "@/lib/getLocales";

import Layout from "@/components/common/Layout/Layout";
// import { components } from "@/slices";

export default async function Page({ params }: { params: { lang: string } }) {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang: params.lang });

  const locales = await getLocales(page, client);

  return (
    <Layout lang={params.lang} locales={locales}>
      <h1>HOMAPAGE</h1>
    </Layout>
  );
  //   return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("homepage", { lang: params.lang });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
