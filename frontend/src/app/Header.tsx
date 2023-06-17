"use client";

import { Button } from "@mantine/core";
import { GiRapidshareArrow } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" sticky top-0 z-10 flex h-20 items-center justify-between bg-blue-600 px-4 text-white drop-shadow-xl">
      <a href="./">
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
      </a>
      <Button
        leftIcon={
          <div className="h-4 w-4">
            <GiRapidshareArrow size={20} />
          </div>
        }
        variant="outline"
        className="rounded-xl border-white text-white drop-shadow-lg"
      >
        <Link href={"/consult"}>FlowAI</Link>
      </Button>
    </div>
  );
};

export default Header;
