import React from "react";
import Link from "next/link";
function Navigation() {
  return (
    <>
      <ul className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Next First App</span>
          </Link>
          <li className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/services" className="mr-5 hover:text-gray-900">
              Services
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
}

export default Navigation;
