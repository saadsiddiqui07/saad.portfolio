import { useRouter } from "next/router";
import React from "react";

const BlogDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Blog details {router.pathname}</h1>
    </div>
  );
};

export default BlogDetails;
