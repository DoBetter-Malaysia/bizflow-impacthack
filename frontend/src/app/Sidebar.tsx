"use client";

import { AiFillHome, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { HiLink } from "react-icons/hi";
import { ImLink } from "react-icons/im";
import {
  RiBarChartBoxFill,
  RiBarChartBoxLine,
  RiSearchFill,
  RiSearchLine,
} from "react-icons/ri";
import {
  IoDocumentOutline,
  IoDocument,
  IoCartOutline,
  IoCartSharp,
} from "react-icons/io5";
import SidebarNavButton from "@/components/buttons/SidebarNavButton";
import Logo from "@/components/branding/Logo";
import { Accordion } from "@mantine/core";
import { MdOutlineInventory2, MdInventory } from "react-icons/md";

const navs = [
  {
    name: "inventory",
    children: [
      {
        label: "My Inventory",
        Icon: MdOutlineInventory2,
        IconActive: MdInventory,
        href: "/inventory",
      },
      {
        label: "Integration",
        Icon: HiLink,
        IconActive: ImLink,
        href: "/inventory/integration",
      },
    ],
  },
  {
    name: "sales & performance",
    children: [
      {
        label: "Dashboard",
        Icon: RiBarChartBoxLine,
        IconActive: RiBarChartBoxFill,
        href: "/sales",
      },
      {
        label: "Deal Finders",
        Icon: RiSearchLine,
        IconActive: RiSearchFill,
        href: "/deals",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 flex max-h-screen w-64 overflow-auto border-r-[1px] border-r-gray-200 bg-white">
      <div className="relative flex max-h-screen flex-1 flex-col">
        <div className="px-6 py-3">
          <div className="mb-4 flex items-end justify-start space-x-1">
            <Logo size={36} />
            <h1 className="text-2xl font-semibold text-blue-600">BizFlow</h1>
          </div>
        </div>

        <div className="relative space-y-1 px-2 py-2">
          <SidebarNavButton
            href="/"
            text="Home"
            logo={(isActive) => (isActive ? AiFillHome : AiOutlineHome)}
          />
          <SidebarNavButton
            href="/documents"
            text="My Documents"
            logo={(isActive) => (isActive ? IoDocument : IoDocumentOutline)}
          />
          <SidebarNavButton
            href="/marketplace"
            text="Marketplace"
            logo={(isActive) => (isActive ? IoCartSharp : IoCartOutline)}
          />
        </div>
        <Accordion
          multiple
          defaultValue={["inventory"]}
          classNames={{
            item: "!border-b-0 border-t-[1px] space-y-2",
            label: "uppercase text-blue-gray-500 text-sm !py-3",
            control: "-mb-2",
            content: "!p-0",
          }}
          className="space-y-2"
        >
          {navs.map((nav) => (
            <Accordion.Item value={nav.name} key={nav.name}>
              <Accordion.Control>{nav.name}</Accordion.Control>
              {nav.children.map((child) => (
                <Accordion.Panel key={child.label} className="px-2">
                  <SidebarNavButton
                    href={child.href}
                    text={child.label}
                    logo={(isActive) =>
                      isActive ? child.IconActive : child.Icon
                    }
                  />
                </Accordion.Panel>
              ))}
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
