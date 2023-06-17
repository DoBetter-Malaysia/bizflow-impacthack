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
      origin: "user",
    });
    setText("");
    onChange();
  };

  return (
    <div className="grid w-full grid-cols-12 gap-4 p-2 ">
      <div className="col-span-9 w-full">
        <Input
          classNames={{ wrapper: "flex items-center" }}
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
      <div className="col-span-1 flex items-center justify-center">
        <Button
          onClick={() => (isRecording ? stopRecording() : startRecording())}
          variant="filled"
          w={"100%"}
          className="col-span-1 rounded-md"
        >
          {isRecording ? <FiMicOff size="1rem" /> : <FiMic size="1rem" />}
        </Button>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <Button variant="filled" w={"100%"} className="col-span-1 rounded-md ">
          <FiPaperclip size="1rem" />
        </Button>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <Button
          variant="filled"
          w={"100%"}
          className="col-span-1 rounded-md "
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
