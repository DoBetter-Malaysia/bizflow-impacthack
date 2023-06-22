import React, { ForwardedRef, ReactElement, RefObject } from "react";
import useStore from "@/utils/hooks/useStore";
import useMessageStore from "@/stores/useMessageStore";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import ArrowLink from "@/components/links/ArrowLink/ArrowLink";
import { useQuery } from "@tanstack/react-query";
import { Skeleton, Text } from "@mantine/core";
import axios from "axios";
import { MdChat } from "react-icons/md";

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
      <div className="relative h-full pr-[20%]">
        <div className="absolute right-0 top-0 w-[20%] border-l-2 bg-slate-100">
          <div className="flex flex-col p-2 gap-6">
            {messages.length === 0 &&
              (questions.isSuccess
                ? questions.data.map(
                    (
                      ques: { category: string; questions: string[] },
                      ind: any
                    ) => (
                      <div>
                        <Text fw="bold" fz="sm" color="dimmed">
                          {ques.category}
                        </Text>
                        <div className="pl-2">
                          {ques.questions.map((que) => (
                            <Button
                              leftIcon={<MdChat size="1.5rem" />}
                              classNames={{ label: "whitespace-normal" }}
                              variant="subtle"
                              key={ind}
                              onClick={() => {
                                addMessage?.({
                                  origin: "user",
                                  text: que,
                                });
                                onChange(que);
                              }}
                            >
                              {que}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )
                  )
                : new Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Skeleton key={index} w="100%" height="70px" />
                    )))}
          </div>
        </div>
        <div className="max-h-full overflow-auto">
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
                        width={60}
                        height={60}
                      />
                      <div className="text-md font-semibold">John</div>
                    </div>

                    <div className="min-h-[52px] flex-1 rounded-md px-4 py-6 text-xl">
                      {message.text}
                    </div>
                  </div>
                ) : (
                  <div className="mx-4 flex items-start px-4 py-2">
                    <Image
                      src="/bot.png"
                      alt="logo"
                      className="mr-4"
                      width={60}
                      height={60}
                    />
                    <div className="min-h-[52px] flex-1 whitespace-pre-wrap rounded-md bg-white px-6 py-6 text-lg">
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
              <div className="min-h-[52px] flex-1 rounded-md bg-white px-4 py-4">
                Loading...
              </div>
            </div>
          )}
          <div ref={ref}></div>
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
      </div>
    );
  }
);
ChatSection.displayName = "ChatSection";

export default ChatSection;
