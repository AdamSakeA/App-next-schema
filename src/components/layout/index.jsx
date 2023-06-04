import Head from "next/head";

import { navigationData } from "@/src/utils";
import { Navigation, Footer } from "..";

export default function Layout({ title, children, active = "" }) {
  return (
    <>
      <Head>
        <title>{`Sate Taichan : ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/sate-erik-bg.png" />
      </Head>
      <Navigation navLink={navigationData} active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
