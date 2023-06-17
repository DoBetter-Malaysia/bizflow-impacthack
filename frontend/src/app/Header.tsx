"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const Header = () => {
  return (
    <div className=" sticky top-0 z-10 flex h-20 items-center justify-between border-b-[1px] border-solid border-gray-400 bg-white px-4 shadow-sm">
      <Link href="./">
        <div className="flex items-center">
          <Image
            src="/logo_plain.png"
            alt="logo"
            className="mr-4"
            width={40}
            height={40}
          />
          <h1 className="text-3xl font-bold">BizFlow</h1>
        </div>
      </Link>
      <Link href={"/consult"}>
        <div className="flex items-center justify-center gap-0 rounded-md bg-[#004be0] px-4 py-2 align-middle text-white">
          <Image
            src="/logo_icon_split.png"
            alt="logo"
            width={40}
            height={40}
            className="object-cover"
          />
          <p>FlowAI</p>
          {/* <FiArrowRight size={30} className="font-bold text-[#004be0]" /> */}
        </div>
      </Link>
    </div>
  );
};

export default Header;
