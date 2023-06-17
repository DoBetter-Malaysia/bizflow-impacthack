import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { Accordion } from "@mantine/core";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatAccordion = () => {
  return (
    <>
      <Accordion
        defaultValue="chatbox"
        variant="separated"
        disableChevronRotation
      >
        <Accordion.Item value="chatbox">
          <Accordion.Control>Talk With Our FlowAI Consultant</Accordion.Control>
          <Accordion.Panel>
            <ChatBox />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

const ChatBox = () => {
  return (
    <>
      <div style={{ position: "relative", height: "300px" }}>
        <MainContainer>
          <ChatContainer className="py-4">
            <MessageList>
              <Messages />
            </MessageList>
            <MessageInput placeholder="Type message here" />
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
};

const Messages = () => {
  return (
    <>
      <Message
        model={{
          message: "Ask me anything about your business flow!",
          sentTime: "just now",
          sender: "FlowAI",
          direction: "incoming",
          position: "single",
        }}
      >
        <Avatar src={"/logo_plain.png"} name={"FlowAI"} />
      </Message>
      <Message
        model={{
          message: "Hello my friend",
          sentTime: "15 mins ago",
          direction: "outgoing",
          position: "first",
        }}
      />
      <Message
        model={{
          message: "Hello my friend",
          sentTime: "15 mins ago",
          direction: "outgoing",
          position: "normal",
        }}
      />
      <Message
        model={{
          message: "Hello my friend",
          sentTime: "15 mins ago",
          direction: "outgoing",
          position: "normal",
        }}
      />
      <Message
        model={{
          message: "Hello my friend",
          sentTime: "15 mins ago",
          direction: "outgoing",
          position: "normal",
        }}
      />
      <Message
        model={{
          message: "Hello my friend",
          sentTime: "15 mins ago",
          direction: "outgoing",
          position: "normal",
        }}
      />
    </>
  );
};

export default ChatAccordion;
