import Image from "next/image";
import { Inter } from "next/font/google";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${interFont.className} flex min-h-screen items-center justify-center bg-gray-100 font-sans dark:bg-gray-900`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-gray-800 sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-4xl font-bold leading-tight tracking-wide text-gray-800 dark:text-gray-100">
            Welcome to Your Next.js Adventure!
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-teal-500 px-5 transition-colors hover:border-transparent hover:bg-teal-500 dark:border-teal-400 dark:hover:bg-teal-600 md:w-[158px]"
            href="https://nextjs.org/docs/pages/getting-started?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}