import Button from "@/components/buttons/Button";
import useMessageStore from "@/stores/useMessageStore";
import { blobToWav } from "@/utils/helpers/blobHelper";
import useStore from "@/utils/hooks/useStore";
import { Input, clsx } from "@mantine/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import { FiMic, FiMicOff, FiPaperclip, FiSend } from "react-icons/fi";

const InputSection = ({
  onChange,
  loading,
}: {
  onChange: (message: string) => void;
  loading: boolean;
}) => {
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
            onChange(res.data["message"]);
          });
      } catch (error) {
        console.log(error);
      }
    };

    recognizeVoice();
  }, [recordingBlob]);

  const onEnter = ({ message }: { message: string }) => {
    setText("");
    onChange(message);
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
          disabled={loading}
        />
      </div>

      <div className="col-span-2 flex items-center justify-center space-x-2">
        <Button
          onClick={() => (isRecording ? stopRecording() : startRecording())}
          variant="subtle"
          w={"100%"}
          className={clsx("rounded-full", { "!text-red-600": isRecording })}
          disabled={loading}
          color={isRecording ? "red" : undefined}
        >
          {isRecording ? <FiMicOff size="1.5rem" /> : <FiMic size="1.5rem" />}
        </Button>
        <Button
          variant="subtle"
          w={"100%"}
          className="rounded-full"
          disabled={loading}
        >
          <FiPaperclip size="1.5rem" />
        </Button>
        <Button
          variant="subtle"
          w={"100%"}
          className="rounded-full"
          onClick={() => {
            if (text.trim() !== "") onEnter({ message: text });
          }}
          loading={loading}
        >
          <FiSend size="1.5rem" />
        </Button>
      </div>
    </div>
  );
};

export default InputSection;
