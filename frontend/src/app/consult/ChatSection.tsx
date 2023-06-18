import React, { ForwardedRef, ReactElement, RefObject } from "react";
import useStore from "@/utils/hooks/useStore";
import useMessageStore from "@/stores/useMessageStore";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import ArrowLink from "@/components/links/ArrowLink/ArrowLink";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@mantine/core";
import axios from "axios";

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
    const questions = useQuery({
      queryKey: ["questions"],
      queryFn: async () => {
        const res = await axios.get("http://localhost:5050/good-questions");
        return res.data;
      },
      staleTime: Infinity,
    });

    return (
      <div ref={ref} className="relative h-full">
        <div
          className="absolute left-[50%] top-[50%] flex flex-col space-y-2"
          style={{ transform: "translateX(-50%) translateY(-50%)" }}
        >
          {messages.length === 0 &&
            (questions.isSuccess
              ? questions.data.questions.map((ques, ind) => (
                  <Button
                    variant="outline"
                    key={ind}
                    onClick={() => {
                      addMessage?.({ origin: "user", text: ques });
                      onChange(ques);
                    }}
                  >
                    {ques}
                  </Button>
                ))
              : new Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton key={index} w={"240px"} height="70px" />
                  )))}
        </div>
        {messages.map((message) => {
          return (
            <div key={message.text} className="py-2">
              {message.origin === "user" ? (
                <div className="mx-4 flex items-start px-4 py-2">
                  <div className="mr-4 text-center">
                    <Image
                      src="/user.png"
                      alt="logo"
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="text-xs font-semibold">John</div>
                  </div>

                  <div className="min-h-[52px] flex-1 rounded-md px-4 py-2">
                    {message.text}
                  </div>
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
