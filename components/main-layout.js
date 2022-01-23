import React from 'react';
import Footer from './footer';
import Navbar from './navbar';
import Head from "next/head"

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <main>
        {props.children}
      </main>
      <Footer />
    </>
  );
};
export default MainLayout
