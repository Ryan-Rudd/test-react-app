import { Html, Head, Main, NextScript } from "next/document";
import Document, { DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style>{`
            body { margin: 0 }
            .navbar { background-color: white; }
            .navbar a { color: black; }
          `}</style>
        </Head>
        <body className="antialiased">
          <nav className="navbar">
            <a href="/" className="navbar-brand">SRDreams</a>
          </nav>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument