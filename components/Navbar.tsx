import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/logo.png";
import SignInOut from "./SignInOut";
export default function Navbar() {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image src={logo} alt="Eventry" width={135} height={135} />
          </Link>
        </div>
        <ul className="flex gap-4 text-[#9C9C9C]">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <SignInOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}
