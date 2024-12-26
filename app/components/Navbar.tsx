import React from "react";
import logo from "@/assets/logo2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mb-20 flex  items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Link href="/">
          <Image
            className="mx-2 h-28 w-28"
            src={logo}
            alt="logo"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <Link href="https://www.linkedin.com/in/muhammadumarshaikh">
          <FaLinkedin />
        </Link>
        <Link href="https://www.github.com/mhdum">
          <FaGithub />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
