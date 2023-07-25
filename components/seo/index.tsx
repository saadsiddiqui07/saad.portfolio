import Head from "next/head";

interface SeoProps {
  title?: string;
  blogImage?: string;
  description?: string;
  url?: string;
}

const Seo = ({ title, blogImage, description, url }: SeoProps) => {
  const seo = {
    title: `${title || "Blogs"} | Saad Siddiqui`,
    image: `https://saad-portfolio-nu.vercel.app/${blogImage}`,
    description: description || "Blogs by Saad Siddiqui",
    blogUrl: `https://saad-portfolio-nu.vercel.app/${url || ""}`,
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} key="ogtitle" />
      <meta property="og:image" content={seo.image} key="ogimage" />
      <meta property="og:description" content={seo.description} key="ogdesc" />
      <meta property="og:url" content={seo.blogUrl} />
      <meta property="og:type" content="website" />
      <meta property="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={seo.description} />
    </Head>
  );
};

export default Seo;
