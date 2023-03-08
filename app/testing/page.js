"use client";
import Header from "app/Header";
import Image from "next/image";
import { useState } from "react";

function TestingPage() {
  let links = [
    "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  ];
  const [src, setSrc] = useState(links[0]);
  return (
    <div>
      <Header />
      <div className="flex pl-10 space-x-3 bg-black h-96">
        <div className="flex flex-col space-y-3">
          {links.map((link, i) => (
            <img
              src={link}
              alt="Product Image"
              className="h-auto w-14"
              onClick={() => setSrc(link)}
              key={i}
            />
          ))}
        </div>
        <div className="self-center h-full">
          <Image
            src={src}
            alt="Product Image"
            height={400}
            width={400}
            className="object-contain w-full h-full "
          />
        </div>
      </div>
    </div>
  );
}

export default TestingPage;
