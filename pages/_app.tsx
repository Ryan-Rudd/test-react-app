import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect } from "react";

function Header() {
  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.style.fontFamily = "'Roboto', sans-serif";
      header.style.fontSize = "2rem";
      header.style.fontWeight = "bold";
      header.style.color = "red";
      header.style.textAlign = "center";
      header.style.padding = "20px";
      header.style.backgroundColor = "blue";
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