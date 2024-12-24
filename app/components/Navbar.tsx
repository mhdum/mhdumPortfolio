import React from "react";
import logo from "@/assets/logo2.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="mb-20 flex  items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/">
          <Image className="mx-2 h-28 w-28" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/muhammadumarshaikh">
          <FaLinkedin />
        </a>
        <a href="https://www.github.com/mhdum">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
