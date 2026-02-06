import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const ScrollToTopButton = dynamic(
  () => import("@/components/scroll-to-top"),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Toaster />
      <ScrollToTopButton />
    </ThemeProvider>
  );
}
