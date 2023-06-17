"use client";

import { Metadata } from "next";
import { Group, Select, TextInput, clsx } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import DisplayStyle from "./DisplayStyle";
import { BiFilter } from "react-icons/bi";
import DocumentGrid from "./DocumentGrid";
const Home = () => {
  return (
    <>
      <div className="bg-blue-600 px-8 pb-12 pt-6">
        <h1 className="text-3xl font-semibold text-white">My Documents</h1>
        <div className="mt-4 flex space-x-2">
          <TextInput
            className="max-w-[50%] flex-1"
            placeholder="Search document"
            icon={<RiSearchLine />}
          />
          <div className="flex-1" />
          <Select
            placeholder="Pick one"
            data={["Newest First", "Oldest First"]}
            defaultValue={"Newest First"}
            icon={<BiFilter size="24" />}
          />
          <DisplayStyle />
        </div>
        <div className="mt-4 flex space-x-3">
          {[
            "All",
            "Receipts",
            "Invoices",
            "Purchase Orders",
            "Credit Notes",
            "Debit Notes",
          ].map((type, index) => (
            <div
              key={index}
              className={clsx(
                "cursor-pointer rounded-md border-2 bg-white px-3 py-1 text-sm shadow-sm",
                {
                  "border-blue-200 !bg-blue-200 font-medium text-blue-600":
                    index === 1,
                }
              )}
            >
              {type}
            </div>
          ))}
        </div>
      </div>

      <div className="px-12 py-6">
        <DocumentGrid />
      </div>
      <Dropzone.FullScreen
        active={true}
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) => {
          const formData = new FormData();
          formData.append("file", files[0]);
        }}
      >
        <Group
          position="center"
          spacing="xl"
          mih={220}
          sx={{ pointerEvents: "none" }}
        >
          <Dropzone.Accept>UPLOAD</Dropzone.Accept>
          <Dropzone.Reject>X</Dropzone.Reject>
          <Dropzone.Idle>PHOTO</Dropzone.Idle>

          <div>
            <p>Drag images here or click to select files</p>
            <p>
              Attach as many files as you like, each file should not exceed 5mb
            </p>
          </div>
        </Group>
      </Dropzone.FullScreen>
    </>
  );
};

export const metadata: Metadata = {
  title: "Home | BizFLow",
};

export default Home;
