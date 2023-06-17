import useStore from "@/utils/hooks/useStore";
import useMessageStore from "@/stores/useMessageStore";
import Button from "@/components/buttons/Button";
import { Input } from "@mantine/core";
import { FiSend, FiPaperclip, FiMic } from "react-icons/fi";
import { useState } from "react";

const InputSection = ({ onChange }: { onChange: () => void }) => {
  const [text, setText] = useState("");
  const { addMessage } = useStore(useMessageStore, (state) => state) ?? {
    addMessage: () => null,
  };

  const onEnter = ({ message }: { message: string }) => {
    addMessage({
      text: message,
      origin: "user",
    });
    setText("");
    onChange();
  };

  return (
    <div className="grid w-full grid-cols-12 gap-4 p-2">
      <div className="col-span-9 w-full">
        <Input
          placeholder="Ask a question"
          value={text}
          onChange={(event) => setText(event.currentTarget.value)}
          onKeyDown={(evt) => {
            if (evt.key === "Enter" && !evt.shiftKey && text.trim() !== "") {
              evt.preventDefault();
              onEnter({ message: text });
            }
          }}
        />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <Button variant="filled" w={"100%"} className="col-span-1 rounded-md">
          <FiMic size="1rem" />
        </Button>
      </div>
      <div className="col-span-1 flex items-center justify-center ">
        <Button
          variant="filled"
          w={"100%"}
          className="col-span-1 rounded-md"
          color={"blue.6"}
        >
          <FiPaperclip size="1rem" />
        </Button>
      </div>
      <div className="col-span-1 flex items-center justify-center ">
        <Button
          variant="filled"
          w={"100%"}
          className="col-span-1 rounded-md"
          onClick={() => {
            if (text.trim() !== "") onEnter({ message: text });
          }}
        >
          <FiSend size="1rem" />
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
