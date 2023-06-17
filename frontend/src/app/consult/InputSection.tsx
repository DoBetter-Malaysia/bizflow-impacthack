import Button from "@/components/buttons/Button";
import useMessageStore from "@/stores/useMessageStore";
import { blobToWav } from "@/utils/helpers/blobHelper";
import useStore from "@/utils/hooks/useStore";
import { Input } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { FiMic, FiMicOff, FiPaperclip, FiSend } from "react-icons/fi";

const InputSection = ({ onChange }: { onChange: () => void }) => {
  const [text, setText] = useState("");
  const { addMessage } = useStore(useMessageStore, (state) => state) ?? {
    addMessage: () => null,
  };
  const { startRecording, stopRecording, recordingBlob, isRecording } =
    useAudioRecorder();

  useEffect(() => {
    if (!recordingBlob) return;

    const recognizeVoice = async () => {
      const formData = new FormData();
      try {
        const blob = await blobToWav(
          new Blob([recordingBlob], { type: "audio/webm;codecs=opus" })
        );

        formData.append("file", blob, "voice.wav");

        axios
          .post(`http://127.0.0.1:5050/speech`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            addMessage({ text: res.data["message"], origin: "user" });
            onChange();
          });
      } catch (error) {
        console.log(error);
      }
    };

    recognizeVoice();
  }, [recordingBlob]);

  const onEnter = ({ message }: { message: string }) => {
    addMessage({
      text: message,
      origin: "bot",
    });
    setText("");
    onChange();
  };

  return (
    <div className="grid w-full grid-cols-12 gap-4 p-2 ">
      <div className="col-span-10 w-full">
        <Input
          classNames={{ wrapper: "flex items-center", input: "py-3 h-[auto]" }}
          h={"100%"}
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

      <div className="col-span-2 flex items-center justify-center space-x-2">
        <Button
          onClick={() => (isRecording ? stopRecording() : startRecording())}
          variant="filled"
          w={"100%"}
          className="col-span-1 rounded-md"
        >
          {isRecording ? <FiMicOff size="1rem" /> : <FiMic size="1rem" />}
        </Button>
        <Button variant="subtle" w={"100%"} className="rounded-full">
          <FiPaperclip size="1.5rem" />
        </Button>
        <Button
          variant="subtle"
          w={"100%"}
          className="rounded-full"
          onClick={() => {
            if (text.trim() !== "") onEnter({ message: text });
          }}
        >
          <FiSend size="1.5rem" />
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
