import Feed from "./Feed";
import Head from "next/head";
import Header from "./Header";
import Banner from "./Banner";
import React from "react";

export default function Page() {
  return (
    <div className="bg-gray-200 ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <Feed />
      </main>
    </div>
  );
}
