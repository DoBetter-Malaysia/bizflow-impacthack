"use client";
import { Metadata } from "next";
import { Tabs } from "@mantine/core";
import { AiOutlineDashboard, AiOutlineUser } from "react-icons/ai";
import Overview from "./Overview";
import Profile from "./Profile";

export default function Home() {
  return (
    <main className="relative flex flex-col px-40 py-8">
      <h3 className="mb-2 text-3xl font-semibold">
        Welcome Back <span className="text-[#004be0]"> Johns Pizza</span>
      </h3>
      <Tabs defaultValue="overview" color="dark" keepMounted={false}>
        <Tabs.List>
          <Tabs.Tab
            value={"overview"}
            icon={<AiOutlineDashboard size="1rem" />}
          >
            <span className="text-md font-semibold">Overview</span>
          </Tabs.Tab>
          <Tabs.Tab value={"profile"} icon={<AiOutlineUser size="1rem" />}>
            <span className="text-md font-semibold">Profile</span>
          </Tabs.Tab>
        </Tabs.List>
        <div className="py-8">
          <Tabs.Panel value={"overview"}>
            <Overview />
          </Tabs.Panel>
          <Tabs.Panel value={"profile"}>
            <Profile />
          </Tabs.Panel>
        </div>
      </Tabs>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Home | BizFLow",
};
