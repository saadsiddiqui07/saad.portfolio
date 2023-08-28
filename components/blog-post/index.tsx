import { formatDate } from "@/utils";
import Link from "next/link";

const BlogPost = ({ slug, frontMatter, readTime }: any) => {
  return (
    <Link
      key={slug}
      href={`/blogs/${slug}`}
      className="flex flex-col transition duration-400 ease-out bg-gray-200 hover:bg-gray-300 dark:bg-[#202020] dark:hover:bg-[#1f2937] m-3 group cursor-pointer shadow-lg rounded-lg"
    >
      <div className="p-4 h-full flex flex-col">
        <h2 className="text-xl md:text-xl flex-1 my-1 font-bold">
          {frontMatter.title}
        </h2>
        <div className="font-normal text-xs md:text-sm dark:text-gray-400 my-2">
          {formatDate(frontMatter.date)} {"-"} {readTime.text}
        </div>
        <h3 className="text-sm md:text-md flex-1 my-1 font-normal dark:text-gray-200">
          {frontMatter.metaDesc}
        </h3>
      </div>
    </Link>
  );
};

export default BlogPost;
