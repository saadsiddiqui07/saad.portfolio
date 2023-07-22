import { formatDate, readTime } from "@/utils";
import Link from "next/link";

const Blog = ({ slug, frontMatter }: any) => {
  return (
    <Link
      key={slug}
      href={`/blogs/${slug}`}
      className="flex flex-col transition duration-300 ease-out bg-[#161616] hover:bg-[#202020] m-3 group cursor-pointer shadow-lg rounded-lg"
    >
      <div className="p-4 h-full flex flex-col">
        <h2 className="text-xl md:text-xl flex-1 my-1 font-bold">
          {frontMatter.title}
        </h2>
        <div className="font-normal text-xs md:text-sm text-gray-400 my-2">
          {formatDate(frontMatter.date)} {"-"} {frontMatter.author}
        </div>
        <h3 className="text-md flex-1 my-1 font-normal text-gray-200">
          {frontMatter.metaDesc}
        </h3>
      </div>
    </Link>
  );
};

export default Blog;
