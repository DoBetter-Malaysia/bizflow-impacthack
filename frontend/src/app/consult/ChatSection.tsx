import React, { ForwardedRef, ReactElement, RefObject } from "react";
import useStore from "@/utils/hooks/useStore";
import useMessageStore from "@/stores/useMessageStore";
import Image from "next/image";

const ChatSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { messages } = useStore(useMessageStore, (state) => state) ?? {
    messages: [],
  };

  return (
    <div ref={ref}>
      {messages.map((message) => {
        return (
          <div key={message.text}>
            {message.origin === "user" ? (
              <div className="flex justify-end p-2">
                <div className="rounded-lg bg-blue-800 p-2 text-white">
                  {message.text}
                </div>
              </div>
            ) : (
              <div className="flex justify-start p-2">
                <Image
                  src="/logo_plain.png"
                  alt="logo"
                  className="mr-4"
                  width={40}
                  height={40}
                />
                <div className="rounded-lg bg-blue-600 p-2 text-white">
                  {message.text}
                </div>
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
