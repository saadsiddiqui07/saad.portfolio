import { Poppins } from "next/font/google";

interface Props {
  children: React.ReactNode;
}

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className={poppins.className}>{children}</main>
    </>
  );
};

export default Layout;
