import Link from "next/link";
import BackIcon from "../icons/BackIcon";
import ThemeSwitchButton from "../theme-button";

export default function PagesHeader() {
  return (
    <div className="flex flex-row items-center">
      <Link
        href="/"
        className="transition duration-200 ease-out hover:scale-125"
      >
        <BackIcon />
      </Link>
      <h1 className="font-bold text-xl">Back</h1>
      <ThemeSwitchButton />
    </div>
  );
}
