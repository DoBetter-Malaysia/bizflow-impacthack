"use client";

import { useState } from "react";
import { Tabs } from "@mantine/core";

interface Tab {
  value: string;
  label: string;
}

const tabs = [
  { value: "overview", label: "Overview" },
  { value: "kpi", label: "KPI" },
  { value: "competitor", label: "Competitors" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <div className="flex h-80 w-full rounded-br-[50px] bg-blue-600 text-white drop-shadow-xl">
      <div className="w-full px-24 py-16">
        <h1 className="pb-4 text-5xl font-bold">Sales and Performance</h1>
        <Tabs defaultValue="overview" color="blue.3" keepMounted={false}>
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab value={tab.value} key={tab.value}>
                <span className="font-semibold text-white">{tab.label}</span>
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {/* <Tabs.Panel value={activeTab.value}></Tabs.Panel> */}
        </Tabs>
      </div>
    </div>
  );
};

export default Header;
