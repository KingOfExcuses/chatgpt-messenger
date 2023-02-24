"use client";

import { signIn } from "next-auth/react";

function Login() {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray to-blue">
        <button
          className="animate-bounce cursor-pointer text-4xl hover:font-semibold"
          onClick={() => void signIn("google")}
        >
          Click here to sign in to ChatGPT
        </button>
      </div>
    </>
  );
}

export default Login;
