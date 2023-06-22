import ArrowLink from "@/components/links/ArrowLink/ArrowLink";
import { ActionIcon } from "@mantine/core";
import { HiPencilSquare } from "react-icons/hi2";
import { FaShare } from "react-icons/fa";

interface ChatBubbleProps {
  message: string;
  res: any;
  onChange: (val: string) => void;
}

const ChatBubble = ({ message, res, onChange }: ChatBubbleProps) => {
  return message.includes("poster") ? (
    <div>
      <div className="mb-3">Here are some posters that you can refer to:</div>
      <div className="flex space-x-3">
        {["", "2", "3"].map((poster, index) => {
          return (
            <div className="relative flex" key={index}>
              <img
                src={`http://localhost:5050/uploads/pizza-poster${poster}.jpg`}
                alt="Poster"
                height="400px"
                width="300px"
                className="relative z-10 object-contain"
              />
              <div className="absolute right-2 top-2 z-20 flex space-x-2">
                <ActionIcon
                  className="rounded-md bg-blue-400 px-2 py-2 hover:bg-blue-500"
                  size="xl"
                >
                  <HiPencilSquare className="text-white" size="24" />
                </ActionIcon>
                <ActionIcon
                  className="rounded-md bg-blue-400 px-2 py-2 hover:bg-blue-500"
                  size="xl"
                >
                  <FaShare className="text-white" size="24" />
                </ActionIcon>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : message.includes("video") ? (
    <div>
      <div className="mb-3">
        Here is a sample promotional video for your inspiration:{" "}
      </div>
      <video
        className="h-[600px] w-[600px] object-cover"
        src="/pizza-promotion.mp4"
        muted
        controls
        autoPlay
      ></video>
    </div>
  ) : message.includes("membuat") || message.includes("recipe") ? (
    <div>
      {res}
      <div className="mb-2 mt-8">
        {message.includes("membuat")
          ? "Anda boleh merujuk pada <b>video</b> di bawah untuk membuat cheese pepperoni pizza:"
          : "You can refer to the following video for making the cheese pepperoni pizza"}
      </div>
      <div className="flex justify-center">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/HCAPjIVOdJw?start=17"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  ) : message.includes("supplier") && !res.includes("WhatsApp") ? (
    <div>
      <div>{res}</div>
      <div>
        <ArrowLink
          onClick={() => {
            onChange("Send supplier a message");
          }}
        >
          Send him a message
        </ArrowLink>
      </div>
    </div>
  ) : (
    <div>{res}</div>
  );
};

export default ChatBubble;
