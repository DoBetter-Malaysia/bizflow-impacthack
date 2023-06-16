import { Accordion } from "@mantine/core";

const ChatBox = () => {
  return (
    <>
      <div className="h-400 flex flex-col gap-2"></div>
    </>
  );
};

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

export default ChatAccordion;
