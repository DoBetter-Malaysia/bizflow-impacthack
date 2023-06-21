"use client";

import Button from "@/components/buttons/Button";
import useIntegrationStore, { Integration } from "@/stores/useIntegrationStore";
import openModal from "@/utils/modals/openModal";
import {
  Accordion,
  ActionIcon,
  Avatar,
  Container,
  Group,
  Switch,
  Text,
} from "@mantine/core";
import { useState } from "react";
import { FaCheck, FaPlus, FaSync } from "react-icons/fa";

const Integrations = () => {
  const { integrations, add, remove, set } = useIntegrationStore();
  const onSyncPressed = (integration: Integration) => {
    set((x) =>
      x.map((type) => {
        if (type.id == integration.id) {
          return {
            ...type,
            syncState: 0,
          };
        }
        return type;
      })
    );

    setTimeout(() => {
      set((x) =>
        x.map((type) => {
          if (type.id == integration.id) {
            return {
              ...type,
              syncState: 1,
            };
          }
          return type;
        })
      );
    }, 2500);
  };

  return (
    <>
      <Container className="mt-8 w-full">
        <div className="pb-2 text-4xl">Integrations</div>
        <div className="text-slate-400">
          Integrations allow BizFlow to seamlessly synchronize your data between
          your existing services so you can keep using the applications you are
          familiar with, while extending their features and/or data.
        </div>
      </Container>
      <Container className="mb-8 h-full w-full">
        <div className="my-4 flex justify-end">
          <Button
            onClick={() =>
              openModal({ type: "Add Integration Modal", innerProps: {} })
            }
            leftIcon={<FaPlus />}
          >
            Add Integration
          </Button>
        </div>
        {integrations.length == 0 ? (
          <Text color="dimmed" align="center" fz="lg">
            There are no integrations yet
          </Text>
        ) : (
          <Accordion chevronPosition="left" multiple variant="separated">
            {integrations.map((e) => (
              <Accordion.Item value={e.name} key={e.id}>
                <div className="flex items-center">
                  <Accordion.Control>
                    <Group noWrap>
                      <Avatar src={e.img} radius="sm" size="lg" />
                      <div>
                        <Text>{e.name}</Text>
                        <Text
                          size="sm"
                          color="dimmed"
                          weight={400}
                          lineClamp={2}
                        >
                          {e.description}
                        </Text>
                      </div>
                    </Group>
                  </Accordion.Control>
                  {
                    <ActionIcon
                      className="mx-4"
                      variant="outline"
                      color={e.syncState == 1 ? "green" : "blue"}
                      size="lg"
                      loading={e.syncState == 0}
                      onClick={() => onSyncPressed(e)}
                    >
                      {e.syncState == -1 ? (
                        <FaSync size="1rem" />
                      ) : (
                        <FaCheck size="1rem" />
                      )}
                    </ActionIcon>
                  }
                </div>
                <Accordion.Panel>
                  <div className="flex flex-col gap-4">
                    {e.syncOptions.map((iopts) => (
                      <Switch label={iopts.name} />
                    ))}
                  </div>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Container>
    </>
  );
};

export default Integrations;
