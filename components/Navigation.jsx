import React from "react";
import Link from "next/link";
function Navigation() {
  return (
    <>
      <ul className="text-gray-400 body-font bg-gradient-to-r from-blue-500 to-slate-900 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-row  items-center">
          <Link
            href="/"
            className="flex title-font font-light items-center text-gray-100 mb-4 md:mb-0 hover:scale-110 duration-300 hover:text-zinc-50"
          >
            <span className="ml-3 md:ml-10 text-xl">Next First App</span>
          </Link>
          <li className="ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/about" className="mr-5 hover:text-gray-200 hover:scale-105 duration-300">
              About
            </Link>
            <Link href="/services" className="mr-5 md:mr-20 hover:text-gray-200 hover:scale-105 duration-300">
              Services
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
}

export default Navigation;
