import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "prismjs/themes/prism-tomorrow.css";
import { ThemeProvider } from "next-themes";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
}
