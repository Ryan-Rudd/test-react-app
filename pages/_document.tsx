import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          .header {
            font-family: 'Roboto', sans-serif;
            font-size: 2rem;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin: 20px 0;
          }
        `}</style>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <header className="header">Welcome to Your Next Adventure!</header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}