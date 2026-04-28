import PagesHeader from '@/components/common/header';
import WritingSection from '@/components/writing';
import Head from 'next/head';
import React from 'react'

const WritingPage = () => {
return (
    <div className="container py-5 px-2 md:py-10 my-10 md:px-1">
      <Head>
        <title>Saad Siddiqui | Writing</title>
      </Head>
      <PagesHeader />
      <main className="mt-4 mx-4">
        <WritingSection />
      </main>
    </div>
  );
}

export default WritingPage