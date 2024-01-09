"use client";

import React, { useState } from "react";
import Link from "next/link";
import logo from "@/assets/navbar/navbar-logo.png";
import Image from "next/image";

function Navbar() {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallerScreenNav = () => {
    setIcon(!menuIcon);
  };

  return (
    <header className="font-poppins">
      <div className="m-3 bg-black sticky top-0 rounded-full">
        <div className="px-4 py-3">
          <div className="flex justify-between items-center h-full">
            <Link
              href="/"
              className="pl-2 xs:pl-4 sm:pl-6 md:pl-8"
              onClick={handleSmallerScreenNav}
            >
              <Image src={logo} alt="logo" className="w-36 md:w-44"></Image>
            </Link>

            <ul className="flex gap-x-6 text-white">
              <li className="md:px-2">
                <div className="bg-light-navy-blue px-2 py-1 rounded-full font-medium text-xs xs:px-3 xs:text-sm sm:text-base sm:px-4 md:px-5 md:py-2">
                  Connect{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
