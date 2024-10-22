"use client"; // This line makes the component a Client Component

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">Bloggerboard</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link href="/blog" className="hover:text-yellow-300 transition">Blog</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2">
          <Link href="/" className="block py-2 px-4 hover:bg-gray-700 transition">Home</Link>
          <Link href="/about" className="block py-2 px-4 hover:bg-gray-700 transition">About</Link>
          <Link href="/blog" className="block py-2 px-4 hover:bg-gray-700 transition">Blog</Link>
          <Link href="/contact" className="block py-2 px-4 hover:bg-gray-700 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
