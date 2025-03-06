import React, { useEffect } from "react";
import BackIcon from "@/components/icons/BackIcon";
import { useRouter } from "next/router";
import fs from "fs";
import md from "markdown-it";
import matter from "gray-matter";
import Prism from "prismjs";
import { formatDate } from "@/utils";
import TwitterIcon from "@/components/icons/TwitterIcon";
import Seo from "@/components/seo";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import FacebookIcon from "@/components/icons/FacebookName";
import readingTime from "reading-time";
import Head from "next/head";
import PagesHeader from "@/components/common/header";

export default function BlogDetails({
  frontMatter,
  content,
  slug,
  readTime,
}: any) {
  const router = useRouter();
  const blogURL = `https://saad-dev.vercel.app/blogs/${slug}`;

  const handleShare = (medium: "twitter" | "facebook" | "linkedin") => {
    if (medium === "twitter") {
      const url = new URL("https://twitter.com/intent/tweet");
      const text = `Checkout the blog: "${frontMatter.title}",here 👉 ${window.location.href}`;
      url.searchParams.append("text", text);
      window.open(url);
    } else if (medium === "facebook") {
      const url = new URL(
        `http://www.facebook.com/share.php?u=${window.location.href}`
      );
      window.open(url);
    } else if (medium === "linkedin") {
      const url = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${frontMatter.title}&summary=${frontMatter.description}`;
      window.open(url);
    }
  };

  useEffect(() => Prism.highlightAll(), [content]);

  return (
    <>
      <Seo
        title={frontMatter.title}
        blogImage={frontMatter.socialImage}
        description={frontMatter.metaDesc}
        url={blogURL}
      />
      <div className="container px-3 py-5 md:py-10 my-10 md:px-1">
        <Head>
          <title>Blogs | {frontMatter.title}</title>
        </Head>
        <PagesHeader />
        <section className={`mx-3 container mt-5 mb-2 prose dark:prose-white`}>
          <h2 className="text-3xl md:text-4xl flex-1 my-1 font-bold">
            {frontMatter.title}
          </h2>
          <div className="my-2">
            <h1 className="font-normal text-sm md:text-md dark:text-gray-400">
              {formatDate(frontMatter.date)}
              {" - "}
              {readTime.text}
            </h1>
          </div>
          <div>
            <div
              className="selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            />
          </div>
        </section>
        <div className="mx-3">
          <h4 className="font-semibold text-xl text-gray-400">
            Liked this blog post?
          </h4>
          <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center justify-between my-1">
            <button
              onClick={() => handleShare("twitter")}
              className="flex text-sm md:text-md group dark:text-white no-underline items-center gap-2 duration-300 transition hover:underline"
            >
              <TwitterIcon />
              <span className="font-semibold">Share it on Twitter</span>
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              className="flex text-sm md:text-md group dark:text-white no-underline items-center gap-2 duration-300 transition hover:underline"
            >
              <LinkedinIcon />
              <span className="font-semibold">Share it on LinkedIn</span>
            </button>
            <button
              onClick={() => handleShare("facebook")}
              className="flex text-sm md:text-md group dark:text-white no-underline items-center gap-2 duration-300 transition hover:underline"
            >
              <FacebookIcon />
              <span className="font-semibold">Share it on Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </>
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
  const readTime = readingTime(content);
  return {
    props: {
      frontMatter,
      content,
      slug,
      readTime,
    },
  };
};
