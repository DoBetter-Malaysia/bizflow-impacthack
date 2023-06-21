"use client";

import { MantineModal } from "@/utils/modals/types";
import ModalLayout from "./ModalLayout";
import useIntegrationStore, { Integration } from "@/stores/useIntegrationStore";
import { useEffect, useState } from "react";
import { Avatar, Loader } from "@mantine/core";
import Button from "../buttons/Button";

export interface AddIntegrationModalProps {
  integrationId: number;
}

const AddIntegrationModal: MantineModal<AddIntegrationModalProps> = ({
  innerProps: { integrationId },
}) => {
  const { integrations } = useIntegrationStore();
  const [selectedIntegration, setSelectedIntegration] = useState<Integration>();

  useEffect(() => {
    setSelectedIntegration(integrations.find((x) => x.id == integrationId));
  }, []);

  if (selectedIntegration == null) return <Loader />;

  return (
    <ModalLayout title="Add Integration">
      <div className="flex flex-col gap-4">
        <Avatar src={selectedIntegration.img} radius="sm" size="lg" />
        <div>
          {selectedIntegration.name} needs to be authorized to integrate into
          BizFlow.
        </div>
        <Button>Authorize</Button>
      </div>
    </ModalLayout>
  );
};

AddIntegrationModal.properties = { size: "xl" };

export default AddIntegrationModal;
