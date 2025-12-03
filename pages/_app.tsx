import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div style={{ 
        backgroundColor: 'white', 
        color: 'black', 
        textAlign: 'center', 
        padding: '10px', 
        fontFamily: 'Arial, sans-serif', 
        fontSize: '20px', 
        fontWeight: 'bold' 
      }}>
        SRDreams
      </div>
      <Component {...pageProps} />
    </>
  );
}