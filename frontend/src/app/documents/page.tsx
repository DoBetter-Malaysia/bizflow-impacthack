"use client";

import { send } from "@/actions/gpt";
import Button from "@/components/buttons/Button";
import useServerAction from "@/utils/hooks/useServerAction";
import { useState, useTransition } from "react";

export default function Home() {
  const { invoke, isLoading, data, isSuccess } = useServerAction(send);

  return (
    <main className="flex  w-full flex-col items-stretch px-24">
      <div className="self-start">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/documents.tsx</code>
        </p>
      </div>
      <div className="pt-16">{isSuccess ? data : "Nothing yet..."}</div>
      <Button onClick={() => invoke("hi")} loading={isLoading}>
        Click to test
      </Button>
    </main>
  );
}
