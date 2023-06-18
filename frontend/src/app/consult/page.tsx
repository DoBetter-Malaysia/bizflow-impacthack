"use client";
import { Metadata } from "next";
import { useCallback, useRef, useState } from "react";
import InputSection from "./InputSection";
import ChatSection from "./ChatSection";
import useConsult from "./useConsult";
import useMessageStore from "@/stores/useMessageStore";
import useStore from "@/utils/hooks/useStore";
import { List } from "@mantine/core";
import ArrowLink from "@/components/links/ArrowLink/ArrowLink";

type PromptType = "prompt" | "recommendations" | "steps" | "solve";

export default function Consult() {
  const ref = useRef<HTMLDivElement>(null);
  const [promptType, setPromptType] = useState<PromptType>("prompt");
  const [options, setOptions] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  const mutation = useConsult({ type: promptType });
  const { addMessage } = useStore(useMessageStore, (state) => state) ?? {
    messages: [],
  };

  function fixString(val: string) {
    if (val.includes("-")) {
      return val.split("-")[1].trim();
    }
    return val.trim();
  }

  const NestedList = ({
    list,
    onChange,
    nested = true,
  }: {
    list: Record<string, string>[] | string[];
    onChange: (message: string) => void;
    nested: boolean;
  }) => {
    return (
      <div>
        <div>
          {nested
            ? "Check out the recommendations below, you may explore more for each option"
            : "Do you require further information on how to execute it?"}
        </div>
        <div className="mt-3 space-y-4">
          {list.map((item, index) => (
            <div key={index}>
              <div>
                <span className="mr-4">
                  {index + 1}.{" "}
                  {fixString(nested ? item["recommendation"] : item)}
                </span>

                <ArrowLink
                  onClick={() =>
                    onChange(nested ? item["recommendation"] : item)
                  }
                >
                  Explore
                </ArrowLink>
              </div>
              {nested && (
                <div className="ml-8 text-gray-600">{item["explanation"]}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const thirdOnChange = (message: string) => {
    addMessage?.({
      origin: "user",
      isMarkdown: true,
      text: message,
    });
    setTimeout(() => {
      ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth"
      });
    }, 300);
    mutation.mutateAsync(message).then((res) => {
      addMessage?.({
        origin: "bot",
        isMarkdown: true,
        text: "",
        body: message.includes("poster") ? (
          <img
            src={`http://localhost:5050/uploads/${res}`}
            alt="Poster"
            height="400px"
            width="300px"
            className="object-contain"
          />
        ) : (
          <div>{res}</div>
        ),
      });
      addMessage?.({
        origin: "bot",
        isMarkdown: true,
        text: "",
        body: "What else can I help you with?",
      });
      setPromptType("solve");
      setTimeout(() => {
         ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth"
      });
      }, 100);
    });
  };

  const secondOnchange = (message: string) => {
    setTimeout(() => {
       ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth"
      });
    }, 300);
    mutation.mutateAsync(message).then((res) => {
      addMessage?.({
        origin: "bot",
        isMarkdown: true,
        text: "",
        body: NestedList({ list: res, nested: false, onChange: thirdOnChange }),
      });
      setPromptType("solve");
      setTimeout(() => {
         ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth"
      });
      }, 100);
    });
  };

  const onChange = (message: string) => {
    setTimeout(() => {
      ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth"
      });
    }, 300);
    if (promptType === "recommendations") {
      setOptions([]);
    }
    if (promptType === "solve") {
      addMessage?.({
        origin: "user",
        isMarkdown: true,
        text: message,
      });
    }

    mutation.mutateAsync(message).then((res) => {
      if (promptType === "prompt") {
        addMessage?.({
          origin: "bot",
          isMarkdown: true,
          text: "",
          body: res,
        });
        addMessage?.({
          origin: "bot",
          text: "",
          body: "I have some recommendations based on the insights provided, are you interested to learn more?",
        });
        setPromptType("recommendations");
        setOptions(["Yes", "No"]);
        setDisabled(true);
      } else if (promptType === "recommendations") {
        setPromptType("steps");
        console.log(promptType);
        setDisabled(false);
        addMessage?.({
          origin: "bot",
          isMarkdown: true,
          text: "",
          body: NestedList({ list: res, onChange: secondOnchange }),
        });
        setPromptType("steps");
      } else if (promptType === "solve") {
        setTimeout(() => {
           ref.current?.scrollTo({
        top: ref.current.scrollHeight,
        behavior: "smooth"
      });
        }, 300);
        mutation.mutateAsync(message).then((res) => {
          addMessage?.({
            origin: "bot",
            isMarkdown: true,
            text: "",
            body: message.includes("poster") ? (
              <img
                src={res}
                alt="Poster"
                height="400px"
                width="300px"
                className="object-contain"
              />
            ) : (
              <div>{res}</div>
            ),
          });
          addMessage?.({
            origin: "bot",
            isMarkdown: true,
            text: "",
            body: "What else can I help you with?",
          });
          setPromptType("solve");
          setTimeout(() => {
            ref.current.scrollTop = ref.current?.scrollHeight;
          }, 100);
        });
      }
      setTimeout(() => {
        ref.current.scrollTop = ref.current?.scrollHeight;
      }, 100);
    });
  };

  const toList = (list: string[]) => {
    return (
      <List type="ordered" classNames={{ root: "list-decimal" }}>
        {list.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    );
  };

  return (
    <main className="relative flex w-full flex-col gap-2 px-16 py-3">
      <h2 className="mb-2 text-2xl font-bold">FlowAI</h2>

      <div className="rounded-md border-[1px] border-solid border-gray-400 bg-blue-50">
        <div
          className="overflow-auto rounded-lg"
          style={{ height: "calc(100vh - 250px)" }}
        >
          <ChatSection
            ref={ref}
            loading={mutation.isLoading}
            options={options}
            onChange={onChange}
          />
        </div>
        <div className="mx-8 mb-4 bg-slate-100">
          <InputSection
            onChange={onChange}
            loading={mutation.isLoading || disabled}
          />
        </div>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Consult | BizFLow",
};
