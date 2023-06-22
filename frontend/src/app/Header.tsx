"use client";

import { Button, Popover, Select } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FiBell, FiGlobe, FiUploadCloud } from "react-icons/fi";

// const Notification = ({
//   title,
//   description,
//   date,
//   priority,
//   type,
//   icon,
//   isLast,
// }: Notification) => {
//   return (
//     <>
//       <div className=" flex gap-2 px-2 py-2">
//         div.
//         <div>{icon({ size: 40 })}</div>
//         <div>{title}</div>
//         <div >{date}</div>
//       </div>
//       {!isLast && <Divider my={4} />}
//     </>
//   );
// };

const Header = () => {
  return (
    <div className=" sticky top-0 z-[1000] flex h-20 items-center justify-between border-b-[1px] border-solid border-gray-400 bg-white px-4 shadow-sm">
      <Link href="/?tab=overview">
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
      <div className="flex items-center space-x-4">
        <Popover
          width={600}
          position="bottom-end"
          shadow="md"
          arrowPosition="center"
          radius={"md"}
          withArrow
        >
          <Popover.Target>
            <Button variant="light" color="blue.6">
              <FiBell size="1.5rem" />
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            {/* <div className="flex flex-col gap-2">
              {NOTIFICATIONS.map((notification) => (
                <div key={notification.title}>
                  <Notification
                    {...notification}
                    isLast={
                      NOTIFICATIONS.indexOf(notification) ===
                      NOTIFICATIONS.length - 1
                    }
                  />
                </div>
              ))}
            </div> */}
          </Popover.Dropdown>
        </Popover>

        <Select
          placeholder="English"
          data={["English", "Bahasa Malaysia", "Mandarin", "Tamil"]}
          icon={<FiGlobe size="1rem" />}
          classNames={{ input: "!h-[unset] py-2" }}
        />
        <Link href={"/integrations"}>
          <div className="flex items-center justify-center gap-0 rounded-md bg-[#004be0] px-4 py-[14px] align-middle text-white">
            <FiUploadCloud size="1rem" className="mr-2" />
            <p>Integrations</p>
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
          </div>
        </Link>
        <Link href={"/?tab=profile"}>
          <Image src={"/user.png"} alt="user" width={40} height={40} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
