import React, { ForwardedRef, ReactElement, RefObject } from "react";
import useStore from "@/utils/hooks/useStore";
import useMessageStore from "@/stores/useMessageStore";
import Image from "next/image";
import MarkdownEmbed from "./MarkdownEmbed";

const ChatSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { messages } = useStore(useMessageStore, (state) => state) ?? {
    messages: [],
  };

  return (
    <div ref={ref} className="space-y-2">
      {messages.map((message) => {
        return (
          <div key={message.text} className="py-2">
            {message.origin === "user" ? (
              <div className=" p-2">
                <div className="rounded-lg p-2">{message.text}</div>
              </div>
            ) : (
              <div className="flex flex-col justify-start bg-blue-100 py-2">
                <div className="flex p-2">
                  <Image
                    src="/logo_plain.png"
                    alt="logo"
                    className="mr-4"
                    width={40}
                    height={40}
                  />
                  <div className="rounded-lg p-2">{message.text}</div>
                </div>
                {message.body && (
                  <div className="flex items-start p-2">
                    <Image
                      src="/logo_plain.png"
                      alt="logo"
                      className="relative mr-4 object-contain py-4"
                      width={40}
                      height={40}
                    />
                    {message.isMarkdown ? (
                      <MarkdownEmbed markdown={message.body} />
                    ) : (
                      <>{message.body}</>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
});
ChatSection.displayName = "ChatSection";

export default ChatSection;
