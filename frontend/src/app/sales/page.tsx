"use client";

import { Tabs } from "@mantine/core";
import Overview from "./Overview";
import Kpi from "./Kpi";
import Competitors from "./Competitors";

const tabs = [
  { value: "overview", label: "Overview" },
  { value: "kpi", label: "KPI" },
  { value: "competitor", label: "Competitors" },
];

export default function Sales() {
  return (
    <main className="relative flex w-full flex-col items-stretch px-24">
      <div className="relative -top-48">
        <Tabs defaultValue="overview" color="blue.3" keepMounted={false}>
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab value={tab.value} key={tab.value}>
                <span className="font-semibold text-white">{tab.label}</span>
              </Tabs.Tab>
            ))}
          </Tabs.List>
          <div className="py-8">
            <Tabs.Panel value={"overview"}>
              <Overview />
            </Tabs.Panel>
            <Tabs.Panel value={"kpi"}>
              <Kpi />
            </Tabs.Panel>
            <Tabs.Panel value={"competitor"}>
              <Competitors />
            </Tabs.Panel>
          </div>
        </Tabs>
      </div>
    </main>
  );
}
