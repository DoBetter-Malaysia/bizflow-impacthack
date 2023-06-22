import ArrowLink from "@/components/links/ArrowLink/ArrowLink";

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
        <img
          src={`http://localhost:5050/uploads/pizza-poster.jpg`}
          alt="Poster"
          height="400px"
          width="300px"
          className="object-contain"
        />
        <img
          src={`http://localhost:5050/uploads/pizza-poster2.jpg`}
          alt="Poster"
          height="400px"
          width="300px"
          className="object-contain"
        />
        <img
          src={`http://localhost:5050/uploads/pizza-poster3.jpg`}
          alt="Poster"
          height="400px"
          width="300px"
          className="object-contain"
        />
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
  ) : message.includes("membuat") ? (
    <div>
      {res}
      <div className="mb-2 mt-8">
        Anda boleh merujuk pada <b>video</b> di bawah untuk membuat pepperoni
        pizza:
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
