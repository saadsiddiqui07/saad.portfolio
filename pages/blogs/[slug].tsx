import React, { useEffect } from "react";
import BackIcon from "@/components/icons/BackIcon";
import poppins from "@/styles";
import { useRouter } from "next/router";
import fs from "fs";
import md from "markdown-it";
import matter from "gray-matter";
import Prism from "prismjs";
import { formatDate } from "@/utils";

export default function BlogDetails({ frontMatter, content, slug }: any) {
  const router = useRouter();
  useEffect(() => Prism.highlightAll(), [content]);

  return (
    <div className="container my-10 p-5">
      <div className="flex flex-row items-center">
        <div
          onClick={() => router.back()}
          className="transition cursor-pointer duration-200 ease-out hover:scale-125"
        >
          <BackIcon />
        </div>
        <h1 className="font-bold text-xl">Back</h1>
      </div>
      <section className={`mx-3 my-5 py-5`}>
        <h2 className="text-3xl md:text-4xl flex-1 my-1 font-bold">
          {frontMatter.title}
        </h2>
        <div className="my-2">
          <h1 className="font-normal text-sm md:text-md text-gray-400">
            {formatDate(frontMatter.date)}
            {" - "}7 min read
          </h1>
        </div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
        </div>
      </section>
    </div>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map((blog) => ({
    params: {
      slug: blog.split(".")[0],
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { slug } }: any) => {
  const readFile = fs.readFileSync(`posts/${slug}.mdx`, "utf-8");
  const { data: frontMatter, content } = matter(readFile);
  return {
    props: {
      frontMatter,
      content,
      slug,
    },
  };
};
