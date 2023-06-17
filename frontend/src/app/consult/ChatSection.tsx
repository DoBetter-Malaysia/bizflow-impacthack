import React, { ForwardedRef, ReactElement, RefObject } from "react";
import useStore from "@/utils/hooks/useStore";
import useMessageStore from "@/stores/useMessageStore";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import ArrowLink from "@/components/links/ArrowLink/ArrowLink";

interface ChatSectionProps {
  loading: boolean;
  onChange: (message: string) => void;
  options: string[];
}

const ChatSection = React.forwardRef<HTMLDivElement, ChatSectionProps>(
  ({ loading, onChange, options }, ref) => {
    const { messages, addMessage } = useStore(
      useMessageStore,
      (state) => state
    ) ?? {
      messages: [],
    };

    return (
      <div ref={ref} className="">
        {messages.map((message) => {
          return (
            <div key={message.text} className="py-2">
              {message.origin === "user" ? (
                <div className=" p-2">
                  <div className="rounded-lg p-2">{message.text}</div>
                </div>
              ) : (
                <div className="mx-4 flex items-start px-4 py-2">
                  <Image
                    src="/bot.png"
                    alt="logo"
                    className="mr-4"
                    width={40}
                    height={40}
                  />
                  <div className="min-h-[52px] flex-1 rounded-md bg-white px-4 py-2">
                    {message.body}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {loading && (
          <div className="mx-4 flex items-start px-4 py-2">
            <Image
              src="/logo_plain.png"
              alt="logo"
              className="mr-4 animate-[spin_2s_infinite_linear]"
              width={32}
              height={32}
            />
            <div className="min-h-[52px] flex-1 rounded-md bg-white px-4 py-2">
              Loading...
            </div>
          </div>
        )}
        <div className="flex-start ml-24 flex flex-col items-start space-y-2">
          {options.map((opt, index) => (
            <ArrowLink
              key={index}
              onClick={() => {
                addMessage?.({
                  origin: "user",
                  text: opt,
                });
                onChange(opt);
              }}
            >
              {opt}
            </ArrowLink>
          ))}
        </div>
      </div>
    );
  }
);
ChatSection.displayName = "ChatSection";

export default ChatSection;
