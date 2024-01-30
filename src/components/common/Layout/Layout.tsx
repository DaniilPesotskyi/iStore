import css from "./Layout.module.css";

import { createClient } from "@/prismicio";
import { PrismicDocument } from "@prismicio/client";

import Header from "../Header/Header";

export default async function Layout({
  children,
  lang,
  locales,
}: {
  children: React.ReactNode;
  lang: string;
  locales: (PrismicDocument<Record<string, any>, string, string> & {
    lang_name: string;
  })[];
}) {
  const client = createClient();

  const settings = await client.getSingle("settings", { lang });

  return (
    <>
      <Header settings={settings} lang={lang} locales={locales} />
      <main>{children}</main>
    </>
  );
}
