import CaseStudies from "@/components/case-studies";
import PagesHeader from "@/components/common/header";
import Head from "next/head";
import React from "react";

const CaseStudiesPage = () => {
  return (
    <div className="container py-5 px-2 md:py-10 my-10 md:px-1">
      <Head>
        <title>Saad Siddiqui | Case Studies </title>
      </Head>
      <PagesHeader />
      <main className="mt-4 mx-4">
        <CaseStudies />
      </main>
    </div>
  );
};

export default CaseStudiesPage;
