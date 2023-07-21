import Link from "next/link";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import BackIcon from "@/components/icons/BackIcon";

export default function BlogsPage({ posts }: any) {
  return (
    <section className="container my-10 p-5">
      <div className="flex flex-row items-center">
        <Link
          href="/"
          className="transition duration-200 ease-out hover:scale-125"
        >
          <BackIcon />
        </Link>
        <h1 className="font-bold text-3xl">Back</h1>
      </div>
      <div className="my-5 p-1">
        <h1>Render all blogs here.</h1>
      </div>
    </section>
  );
}

export const getStaticProps = () => {
  const files = fs.readdirSync("posts");
  const blogs = files.map((blog) => {
    const slug = blog.split(".")[0];
    const readFile = fs.readFileSync(`posts/${blog}`, "utf-8");
    const { data: frontMatter } = matter(readFile);
    return { slug, frontMatter };
  });
  const byDate = (a: any, b: any) =>
    new Date(b.frontMatter.date).getTime() -
    new Date(a.frontMatter.date).getTime();
  const sorted = blogs.sort(byDate);
  return {
    props: {
      blogs: sorted,
    },
  };
};
