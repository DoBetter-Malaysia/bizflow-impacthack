"use client";

import Button from "@/components/buttons/Button";
import { GiRapidshareArrow } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";

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
        <Button
          leftIcon={
            <div className="h-4 w-4">
              <GiRapidshareArrow size={20} />
            </div>
          }
          className="rounded-md py-2 "
        >
          FlowAI
        </Button>
      </Link>
    </div>
  );
};

export default Header;
