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
          .top-bar {
            background-color: #fff;
            color: #000;
            text-align: center;
            padding: 10px 0;
            font-size: 1.5rem;
            font-weight: 700;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
          }
          .content {
            margin-top: 60px; /* Adjust based on the height of the top bar */
          }
        `}</style>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <div className="top-bar">SRDreams</div>
        <div className="content">
          <p>This is another test</p>
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}