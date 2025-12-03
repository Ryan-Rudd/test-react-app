import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style>{`
          nav {
            background-color: white !important;
          }
        `}</style>
      </Head>
      <nav>Hello World!</nav>
      <Component {...pageProps} />
    </>
  );
}