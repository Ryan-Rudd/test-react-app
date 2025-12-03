import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.style.fontFamily = "'Open Sans', sans-serif";
      header.style.fontSize = "2.5rem";
      header.style.fontWeight = "600";
      header.style.color = "#333333";
      header.style.textAlign = "center";
      header.style.padding = "20px";
      header.style.backgroundColor = "#f0f0f0";
    }
  }, []);

  return (
    <header>
      <h1>Welcome to Your Next Adventure!</h1>
    </header>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}