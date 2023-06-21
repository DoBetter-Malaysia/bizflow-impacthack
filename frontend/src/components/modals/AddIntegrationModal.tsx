"use client";

import useIntegrationStore, {
  Integration,
  availableIntegrations,
} from "@/stores/useIntegrationStore";
import { MantineModal } from "@/utils/modals/types";
import { Avatar, Loader } from "@mantine/core";
import { closeAllModals } from "@mantine/modals";
import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import ModalLayout from "./ModalLayout";
import { notifications } from "@mantine/notifications";

export interface AddIntegrationModalProps {
  integrationId: number;
}

const AddIntegrationModal: MantineModal<AddIntegrationModalProps> = ({
  innerProps: { integrationId },
}) => {
  const { integrations, add, set, remove } = useIntegrationStore();
  const [selectedIntegration, setSelectedIntegration] = useState<Integration>();

  useEffect(() => {
    if (integrations == null || integrations.length == 0) return;

    setSelectedIntegration(
      availableIntegrations.find((x) => x.id == integrationId)
    );
  }, [integrations]);

  if (selectedIntegration == null) return <Loader />;

  function openAuthorizeWindow(): void {
    const newWindow = window.open(
      "/test-integration",
      "_blank",
      "toolbar=0,location=0,menubar=0,height=600,width=600"
    );
    newWindow!.onbeforeunload = (ev) => {
      add(integrationId);
      notifications.show({
        title: "Integration Success",
        message: `${selectedIntegration?.name} has been successfully integrated with BizFlow!`,
        color: "green",
      });
      closeAllModals();
    };
  }

  return (
    <ModalLayout title="Add Integration">
      <div className="flex flex-col gap-4 justify-center items-center h-full my-8">
        <div className="rounded-md overflow-hidden aspect-square max-h-[200px]">
          <img height="1024" width="1024" src={selectedIntegration.img} />
        </div>
        <div>
          {selectedIntegration.name} needs to be authorized to integrate into
          BizFlow.
        </div>
        <Button onClick={() => openAuthorizeWindow()}>Authorize</Button>
      </div>
    </ModalLayout>
  );
};

AddIntegrationModal.properties = { size: "xl" };

export default AddIntegrationModal;
