"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

function ImageDisplay() {
  let links = [
    "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
  ];
  const [src, setSrc] = useState(links[0]);
  return (
    <div className="flex space-x-3">
      <div className="flex flex-col space-y-3">
        {links.map((link, i) => (
          <div
            key={i}
            className="grid items-start justify-center gap-8 bg-white"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-amazon_orange rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <img
                src={link}
                alt="Product Image"
                className="relative w-20 h-auto border-2 border-gray-300"
                onMouseEnter={() => setSrc(link)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Image
          src={src}
          alt="Product Image"
          height={600}
          width={600}
          className="object-contain "
        />
      </div>
    </div>
  );
}

export default ImageDisplay;
