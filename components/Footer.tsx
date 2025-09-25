"use client";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className="w-full h-[700px] "
    >
      <div className="fixed bottom-0 w-full bg-black h-[700px] pt-24 md:pt-28 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
          <div className="col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide text-white">
              OUTBREAK
            </h1>
            <p className="text-gray-400 max-w-sm">
              Crafting digital experiences with precision, passion, and
              creativity.
            </p>
          </div>
          <div className="flex flex-row items-center justify-between ">
            <ul className="space-y-3 text-gray-400">
              <h2 className="text-lg font-semibold mb-4">Links</h2>
              <li className="hover:text-white cursor-pointer">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                {" "}
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li className="hover:text-white cursor-pointer">
                <Link href={"/contacts"}>Contact</Link>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-400 -mt-7">
              <h2 className="text-lg font-semibold mb-4">Contact</h2>
              <li className="flex hover:text-white cursor-pointer">
                <Mail className="w-5 h-5 mr-2" /> outbreak778@gmail.com
              </li>
              <li className="flex hover:text-white cursor-pointer">
                <Phone className="w-5 h-5 mr-2" /> +91 7972458025
              </li>
              <li className="flex hover:text-white cursor-pointer">
                <MapPin className="w-5 h-5 mr-2" /> Nashik, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>
        <div className="text-[clamp(4.7rem,5vw,6rem)] md:text-[clamp(5rem,13.5vw,16rem)] lg:text-[clamp(5rem,15.8vw,18rem)] text-white font-semibold">
          NIKHIL MISHRA
        </div>
        <div className=" border-gray-800 mt-1 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} OUTBREAK. 
          </p>
          <div className="flex gap-6">
            <Link href="https://github.com/outbreak778">
              <Image
                src="/github-logo.svg"
                height={20}
                width={20}
                className="bg-white p-[2px] rounded-[3px]"
                alt="linkedin"
              />
              {/* <Github className="w-5 h-5 hover:text-white cursor-pointer text-gray-400" /> */}
            </Link>
            <Link
              href="https://www.linkedin.com/in/nikhil-mishra-outbreak"
              target="_blank"
            >
              <Image
                src="/linked.svg"
                height={20}
                width={20}
                className="bg-white p-[2px] rounded-[3px]"
                alt="linkedin"
              />
              {/* <Linkedin className="w-5 h-5 hover:text-white cursor-pointer text-gray-400" /> */}
            </Link>
            <Link href="https://leetcode.com/u/OutBreak_code01/" target="_blank">
            <Image
              alt="leetcode"
              src="/leetcode.svg"
              className="bg-white p-[2px] rounded-[3px]"
              height={20}
              width={20}
            />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
