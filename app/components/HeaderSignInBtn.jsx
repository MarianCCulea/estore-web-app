"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function HeaderSignInBtn() {
  const { data: session } = useSession();
  return (
    <>
      {session?.user ? (
        <div className="link" onClick={() => signOut()}>
          <p>Hello {session.user.name}</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
        </div>
      ) : (
        <div className="link" onClick={() => signIn()}>
          <p>Hello, sign in</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
        </div>
      )}
    </>
  );
}

export default HeaderSignInBtn;
