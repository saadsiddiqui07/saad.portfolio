import Link from "next/link";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import BackIcon from "@/components/icons/BackIcon";
import BlogPost from "@/components/blog-post";
import poppins from "@/styles";
import Seo from "@/components/seo";
import Head from "next/head";
import ThemeSwitchButton from "@/components/theme-button";
import PagesHeader from "@/components/common/header";

export default function BlogsPage({ blogs }: any) {
  return (
    <>
      <Seo />
      <section className="container px-2 py-5 md:py-10 my-10 md:px-1">
        <Head>
          <title>Saad Siddiqui | Blogs</title>
        </Head>
        <PagesHeader />
        <div className={`grid grid-cols-1 mb-2 md:p-0 ${poppins.className}`}>
          {blogs.map(({ slug, frontMatter, readTime }: any) => (
            <BlogPost
              key={slug}
              slug={slug}
              frontMatter={frontMatter}
              readTime={readTime}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = () => {
  const files = fs.readdirSync("posts");
  const blogs = files.map((blog) => {
    const slug = blog.split(".")[0];
    const readFile = fs.readFileSync(`posts/${blog}`, "utf-8");
    const { data: frontMatter, content } = matter(readFile);
    const readTime = readingTime(content);
    return { slug, frontMatter, readTime };
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
