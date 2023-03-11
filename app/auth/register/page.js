import React from "react";
import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className="">
      <main className="flex max-w-screen-xl mx-auto ">
        <div className="flex flex-col items-center py-3 mx-auto space-y-2 ">
          <Link href="/">
            <Image
              className="object-contain bg-black rounded cursor-pointer "
              src="https://links.papareact.com/f90"
              width={150}
              height={40}
              alt=""
            />
          </Link>
          <div className="border-2 border-gray-300 rounded-md w-96">
            <div className="flex flex-col px-6 py-5 space-y-3 ">
              <div className="inline-flex items-center">
                <h1 className="text-3xl font-semibold ">Create account</h1>
              </div>
              <div className="text-sm font-semibold">
                Your Name
                <input
                  placeholder="First and last name"
                  type="text"
                  id="text"
                  name="name"
                  className="w-full px-2 py-1 text-base leading-4 text-gray-700 transition-colors duration-300 bg-white border border-gray-500 rounded outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange"
                />
              </div>
              <div className="text-sm font-semibold">
                Mobile number or email
                <input
                  type="text"
                  id="text"
                  name="name"
                  className="w-full px-2 py-1 text-base leading-4 text-gray-700 transition-colors duration-300 bg-white border border-gray-500 rounded outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange"
                />
              </div>
              <div className="text-sm font-semibold">
                Password
                <input
                  placeholder="At least six characters"
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-2 py-1 text-base leading-4 text-gray-700 transition-colors duration-300 bg-white border border-gray-500 rounded outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange"
                />
                <div className="text-xs">
                  Passwords must be at least 6 characters.
                </div>
              </div>
              <div className="text-sm font-semibold">
                Re-enter password
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-2 py-1 text-base leading-4 text-gray-700 transition-colors duration-300 bg-white border border-gray-500 rounded outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange"
                />
              </div>
              <button className="button">Continue</button>
              <div className="py-3 text-xs">
                By signing-in you agree to Amazon&apos;s Conditions of Use &
                Sale. Please see our Privacy Notice, our Cookies Notice and our
                Interest-Based Ads Notice.
              </div>

              <div className="flex-grow border-t border-gray-400"></div>
              <div>
                <span className="text-sm">Already have an account? </span>
                <a href="/auth/login" className="text-sm text-blue-600 link">
                  Sign in &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className=" h-80 grad">
        {" "}
        <div className="flex flex-col items-center border-t-2 border-gray-200 ">
          <div className="flex py-4 space-x-6 text-xs text-blue-600">
            <span className="link">Conditions of Use</span>
            <span className="link">Privacy Notice </span>
            <span className="link">Help</span>
            <span className="link"> Legal Notice </span>
            <span className="link"> Cookies Notice </span>
            <span className="link"> Interest-Based Ads Notice </span>
          </div>
          <div className="text-xs">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
