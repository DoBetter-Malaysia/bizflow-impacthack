"use client";

import { useCallback, useRef, useState } from "react";
import InputSection from "./InputSection";
import ChatSection from "./ChatSection";
import useConsult from "./useConsult";
import useMessageStore from "@/stores/useMessageStore";
import useStore from "@/utils/hooks/useStore";
import { List, clsx } from "@mantine/core";
import ArrowLink from "@/components/links/ArrowLink/ArrowLink";
import { useScrollIntoView } from "@mantine/hooks";
import ChatBubble from "./ChatBubble";

type PromptType = "prompt" | "recommendations" | "steps" | "solve";

export default function Consultation() {
  const ref = useRef<HTMLDivElement>(null);
  const [promptType, setPromptType] = useState<PromptType>("prompt");
  const [options, setOptions] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);
  const mutation = useConsult({ type: promptType });
  const { addMessage } = useStore(useMessageStore, (state) => state) ?? {
    messages: [],
  };
  const scrollIntoView = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
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
                <span className={clsx("mr-4")}>
                  {index + 1}.{" "}
                  {fixString(nested ? item["recommendation"] : item)}
                </span>

                <ArrowLink
                  onClick={() => {
                    onChange(fixString(nested ? item["recommendation"] : item));
                  }}
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
    setPromptType("solve");

    addMessage?.({
      origin: "user",
      isMarkdown: true,
      text: message,
    });
    setTimeout(() => {
      scrollIntoView();
    }, 300);
    mutation.mutateAsync(message).then((res) => {
      addMessage?.({
        origin: "bot",
        isMarkdown: true,
        text: "",
        body: (
          <ChatBubble message={message} res={res} onChange={thirdOnChange} />
        ),
      });
      if (message.includes("poster")) {
        addMessage?.({
          origin: "bot",
          isMarkdown: true,
          text: "",
          body: (
            <div>
              <div>Do you want a sample video for that?</div>
              <div>
                <ArrowLink
                  onClick={() => {
                    thirdOnChange(
                      "Show me a sample video for pepperoni cheese pizza promotion"
                    );
                  }}
                >
                  Yes
                </ArrowLink>
              </div>
            </div>
          ),
        });
      } else if (!message.includes("supplier")) {
        addMessage?.({
          origin: "bot",
          isMarkdown: true,
          text: "",
          body: "What else can I help you with?",
        });
      }
      setTimeout(() => {
        scrollIntoView();
      }, 100);
    });
  };

  const secondOnchange = (message: string) => {
    addMessage?.({
      origin: "user",
      isMarkdown: true,
      text: `Explore more about ${message}`,
    });
    setTimeout(() => {
      scrollIntoView();
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
        scrollIntoView();
      }, 100);
    });
  };

  const onChange = (message: string) => {
    setTimeout(() => {
      scrollIntoView();
    }, 300);
    if (promptType === "recommendations") {
      setOptions([]);
    }
    if (promptType === "solve") {
      thirdOnChange(message);
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
      }
      setTimeout(() => {
        scrollIntoView();
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
        <div className="mb-4 border-t-2 bg-slate-200 px-8">
          <InputSection
            onChange={onChange}
            loading={mutation.isLoading || disabled}
          />
        </div>
      </div>
    </main>
  );
}
