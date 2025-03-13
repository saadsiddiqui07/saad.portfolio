import Link from "next/link";
import ThemeSwitchButton from "../theme-button";
import {ArrowLeftIcon} from 'lucide-react'

export default function PagesHeader() {
  return (
    <div className="flex flex-row items-center">
      <Link
        href="/"
        className="mr-2"
      >
        <ArrowLeftIcon />
      </Link>
      <ThemeSwitchButton />
    </div>
  );
}
