"use client";

import { Avatar, Tooltip, clsx } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons/lib";

type LogoType = (isActive: boolean) => IconType;

type SidebarNavButtonProps = {
  href: string;
  text: string;
  logo: LogoType;
};

const SidebarNavButton = ({ href, text, logo }: SidebarNavButtonProps) => {
  const pathname = usePathname();
  const isActive = pathname == href;
  const CurrentLogo = logo?.(isActive);
  return (
    <div>
      <Link href={href}>
        <Tooltip
          label={text.length > 15 && text}
          position="bottom-end"
          disabled={text.length <= 15}
        >
          <div
            className={clsx(
              "flex items-center space-x-2 rounded-md px-2 py-2",
              {
                "bg-blue-100 font-medium text-blue-600": isActive,
                "text-blue-gray-600 hover:bg-blue-50": !isActive,
              }
            )}
          >
            <CurrentLogo size="22" />
            <span className="line-clamp-1 flex-1">{text}</span>
          </div>
        </Tooltip>
      </Link>
    </div>
  );
};

export default SidebarNavButton;
