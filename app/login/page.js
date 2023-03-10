import React from "react";
import Image from "next/image";

function Login() {
  return (
    <div className="">
      <main className="flex max-w-screen-xl mx-auto ">
        <div className="flex flex-col items-center py-3 mx-auto space-y-2 ">
          <Image
            className="object-contain bg-black rounded cursor-pointer "
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            alt=""
          />
          <div className="border-2 border-gray-300 rounded-md w-96">
            <div className="flex flex-col px-6 py-5 space-y-3 ">
              <div className="inline-flex items-center">
                <h1 className="text-3xl font-semibold ">Sign in</h1>
              </div>
              <div className="text-base font-semibold">
                Email or mobile phone number
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-2 py-1 text-base leading-8 text-gray-700 transition-colors duration-300 bg-white border border-gray-500 rounded outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange"
                />
              </div>
              <div className="text-base font-semibold">
                Password
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-2 py-1 text-base leading-8 text-gray-700 transition-colors duration-300 bg-white border border-gray-500 rounded outline-none focus:border-amazon_orange focus:ring-2 focus:ring-amazon_orange"
                />
              </div>
              <button className="button">Log In</button>
              <div className="text-xs">
                By signing-in you agree to Amazon&apos;s Conditions of Use &
                Sale. Please see our Privacy Notice, our Cookies Notice and our
                Interest-Based Ads Notice.
              </div>
              <div className="text-sm text-blue-600 link">Forgot Password</div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-0.5 my-8 bg-gray-300 border-0 rounded dark:bg-gray-700" />
            <div className="absolute px-4 text-sm text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
              New to Amazon?{" "}
            </div>
          </div>
          <button className="w-full p-2 text-xs border border-gray-300 rounded-sm md:text-sm bg-gradient-to-b from-gray-200 to-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 active:from-gray-500">
            Create your Amazon account
          </button>
          <hr />
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
