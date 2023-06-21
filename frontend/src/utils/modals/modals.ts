import HelloWorldModal from "@/components/modals/HelloWorldModal";
import {
  MantineModal,
  ModalType,
  addIntegrationModal,
  helloWorldModal,
  secondModal,
} from "./types";
import SecondModal from "@/components/modals/SecondModal";
import AddIntegrationModal from "@/components/modals/AddIntegrationModal";

export const modals: Record<ModalType, MantineModal<any>> = {
  [helloWorldModal]: HelloWorldModal,
  [secondModal]: SecondModal,
  [addIntegrationModal]: AddIntegrationModal,
};
