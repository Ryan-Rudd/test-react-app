import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          body {
            background-color: #f9f9f9;
            color: #333;
            font-family: 'Montserrat', sans-serif;
          }
          p {
            color: #555;
            text-align: center;
            margin: 10px 0;
            font-size: 1.1rem;
          }
        `}</style>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}