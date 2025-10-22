"use client";

import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-[#f3f3f3]">
      {/* ✅ Background Layer 1: Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f7f8ff] to-[#faf4ff]" />

      {/* ✅ Background Layer 2: Cloudy Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage:
            "url('https://cdn.wallpapersafari.com/43/30/0whz1Y.jpg')",
        }}
      />

      {/* 🧩 Microsoft Sign-in Box */}
      <div className="relative z-10 w-[500px] h-[400px] bg-white shadow-md rounded-sm p-12 flex flex-col justify-between mb-[20px]">
        {/* Microsoft Logo */}
        <div className="flex justify-start mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
            alt="Microsoft Logo"
            className="h-6"
          />
        </div>

        {/* Heading */}
      <div
  role="heading"
  aria-level={1}
  className="text-[24px] font-semibold text-[#1b1b1b] tracking-wide mb-4"
  style={{
    fontFamily: '"Segoe UI", Arial, sans-serif',
  }}
>
  Sign in
</div>

 
        {/* Input */}
        <input
          type="text"
          placeholder="Email, phone, or Skype"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b border-[#8a8886] focus:border-[#0067B8] outline-none py-2 mb-6 text-[14px] text-[#1b1b1b] placeholder-[#605e5c]"
        />

        {/* Links */}
        <p className="text-[14px] mb-6 text-[#605e5c]">
          No account?{" "}
          <a href="#" className="text-[#0067B8] hover:underline">
            Create one!
          </a>
        </p>

        <a
          href="#"
          className="text-[14px] text-[#0067B8] hover:underline block mb-8"
        >
          Can’t access your account?
        </a>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 w-full">
          <button className="px-6 py-2 bg-[#f3f3f3] text-[#111827] text-[14px] rounded-sm border border-[#dcdcdc] hover:bg-[#e9e9e9]">
            Back
          </button>
          <button className="px-6 py-2 bg-[#0067B8] text-white text-[14px] rounded-sm hover:bg-[#005a9e]">
            Next
          </button>
        </div>
      </div>

      {/* ✅ Bottom Sign-in Options Bar */}
      <div className="relative z-10 w-[500px] bg-white shadow-sm flex items-center justify-start space-x-2 px-4 py-3 rounded-sm">
        <span
          className="text-xl"
          style={{ transform: "rotateY(180deg)", color: "#4a4a4a" }}
        >
          🔑
        </span>
        <span className="text-sm text-gray-700">Sign-in options</span>
      </div>
    </div>
  );
}
