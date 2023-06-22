"use client";

import ShenYienButton from "@/components/buttons/Button";
import useIntegrationStore, {
  Integration,
  availableIntegrations,
} from "@/stores/useIntegrationStore";
import openModal from "@/utils/modals/openModal";
import {
  Accordion,
  ActionIcon,
  Autocomplete,
  Avatar,
  Badge,
  Button,
  Container,
  Group,
  SelectItemProps,
  Switch,
  Text,
} from "@mantine/core";
import { forwardRef } from "react";
import { FaCheck, FaPlus, FaSync, FaTrash } from "react-icons/fa";

type ItemProps = SelectItemProps & Integration;

const AutoCompleteItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ tags, img, description, name, id, ...others }: ItemProps, ref) => {
    return (
      <div ref={ref} {...others}>
        <Group noWrap>
          <Avatar src={img ?? ""} />

          <div>
            <Text>{name}</Text>
            <Text size="xs" color="dimmed" lineClamp={2}>
              {description}
            </Text>
            <div className="flex flex-wrap gap-4">
              {tags.map((tag) => (
                <Badge key={`${id}-${tag}`}>{tag}</Badge>
              ))}
            </div>
          </div>
        </Group>
      </div>
    );
  }
);
AutoCompleteItem.displayName = "AutoCompleteItem";

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
        <div className="my-4 flex items-center gap-4">
          <Autocomplete
            className="w-full"
            placeholder="Choose an app to integrate with."
            itemComponent={AutoCompleteItem}
            data={availableIntegrations
              .filter((x) => !integrations.includes(x))
              .slice(0, 5)
              .map((item) => ({
                ...item,
                value: item.name,
              }))}
            filter={(value, item) =>
              item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
              item.description
                .toLowerCase()
                .includes(value.toLowerCase().trim()) ||
              item.tags.some((x: string) =>
                x.trim().toLowerCase().includes(value.toLowerCase().trim())
              )
            }
          />
          <ShenYienButton
            onClick={() =>
              openModal({
                type: "Add Integration Modal",
                innerProps: { integrationId: 2 },
              })
            }
            leftIcon={<FaPlus />}
          >
            Add Integration
          </ShenYienButton>
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
                    {e.syncOptions.map((iopts, index) => (
                      <Switch label={iopts.name} key={index} />
                    ))}
                    <Button
                      className="w-min bg-red-500 hover:bg-red-600 active:bg-red-700"
                      leftIcon={<FaTrash />}
                    >
                      Disconnect
                    </Button>
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
