/* eslint-disable @next/next/no-img-element */
'use client';
import Header from 'app/Header';
import Image from 'next/image';
import { useState } from 'react';

function TestingPage() {
  let links = [
    'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
  ];
  const [src, setSrc] = useState(links[0]);
  return (
    <div>
      <Header />
      <div className="flex pl-10 space-x-3 bg-black h-96">
        <div className="flex flex-col space-y-3">
          {links.map((imagelink, i) => (
            <div
              key={i}
              className="grid items-start justify-center gap-8 bg-white"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-amazon_orange rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <img
                  src={imagelink}
                  alt="Product Image"
                  className="relative h-auto w-14"
                  onClick={() => setSrc(imagelink)}
                />
              </div>
            </div>
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
      <div className="grid items-start justify-center gap-8 bg-white">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r  bg-amazon_orange rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src={links[0]}
            alt="Product Image"
            className="relative h-auto w-14"
            // onClick={() => setSrc(link)}
          />
        </div>
      </div>
      <div className="grid items-start justify-center gap-8 bg-white">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r  bg-amazon_orange rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <img
            src={links[0]}
            alt="Product Image"
            className="relative h-auto w-14"
            //onClick={() => setSrc(link)}
          />
        </div>
      </div>
    </div>
  );
}

export default TestingPage;
