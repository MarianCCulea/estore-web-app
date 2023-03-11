import Feed from "./Feed";
import Header from "./Header";
import Banner from "./Banner";
import React from "react";

export default function Page() {
  return (
    <div className="bg-gray-200 ">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <Banner />
        <Feed />
      </main>
    </div>
  );
}
