import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <div className="my-4 ">
          <div className="m-1 p-1">
            <IoIosMail className="inline-block text-4xl text-neutral-500 h-7" />
            mhdumar115@gmail.com
          </div>
          <div className="m-1 p-1">
            <Link href="https://www.github.com/mhdum">
              <FaGithub className="inline-block text-4xl text-neutral-500 h-7" />
              Muhammadumar Shaikh
            </Link>
          </div>
          <div className="m-1 p-1">
            <Link href="https://www.linkedin.com/in/muhammadumarshaikh">
              <FaLinkedin className="inline-block text-4xl text-neutral-500 h-7" />
              Muhammadumar Shaikh
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
