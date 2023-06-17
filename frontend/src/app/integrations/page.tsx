"use client";

import Button from "@/components/buttons/Button";
import { Container, Group, Paper, Table, Text } from "@mantine/core";
import React, { useState } from "react";
import { FaKey, FaSync } from "react-icons/fa";

interface IntegrationType {
  id: number;
  img: string;
  name: string;
  description: string;
  hasAuthenticated: number;
  hasSynced: number;
}

const Integrations = () => {
  const [integration, setIntegration] = useState<IntegrationType[]>([
    {
      id: 1,
      img: "https://picsum.photos/200",
      name: "Swedish Man Enterprise Sdn Bhd",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia velit dolorem reiciendis laudantium modi soluta quam! Commodi quis sunt debitis!",
      hasAuthenticated: -1,
      hasSynced: -1,
    },
    {
      id: 2,
      img: "https://picsum.photos/200",
      name: "Swedish Man Enterprise Sdn Bhd",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia velit dolorem reiciendis laudantium modi soluta quam! Commodi quis sunt debitis!",
      hasAuthenticated: -1,
      hasSynced: -1,
    },
    {
      id: 3,
      img: "https://picsum.photos/200",
      name: "Swedish Man Enterprise Sdn Bhd",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia velit dolorem reiciendis laudantium modi soluta quam! Commodi quis sunt debitis!",
      hasAuthenticated: -1,
      hasSynced: -1,
    },
  ]);

  const onSyncPressed = (lol: IntegrationType) => {
    setIntegration((xd) => {
      xd.forEach((yolo: IntegrationType) => {
        if (yolo.id == lol.id) {
          yolo.hasSynced = 0;
          return;
        }
      });
      console.log(xd);

      return xd;
    });

    setTimeout(() => {
      setIntegration((xd) => {
        xd.forEach((yolo: IntegrationType) => {
          if (yolo.id == lol.id) {
            yolo.hasSynced = 1;
            return;
          }
        });
        return xd;
      });
    }, 5000);
  };

  return (
    <>
      <Container className="w-full pt-4">
        <div className="pb-2 text-4xl">Integrations</div>
        <div className="text-slate-400">
          Integrations allow BizFlow to seamlessly synchronize your data between
          your existing services so you can keep using the applications you are
          familiar with, while extending their features and/or data.
        </div>
      </Container>
      <Container className="my-8 h-full w-full rounded-xl bg-white drop-shadow-lg">
        <Table verticalSpacing="md">
          <thead>
            <tr>
              <th></th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {integration.map((e) => (
              <tr key={e.name}>
                <td>
                  <img src={e.img} alt={`${e.name} Logo`} />
                </td>
                <td>
                  <Text fw="bold" fz="lg">
                    {e.name}
                  </Text>
                  <Text fz="md" color="dimmed">
                    {e.description}
                  </Text>
                </td>
                <td className="flex gap-4">
                  <Button
                    disabled={e.hasAuthenticated != -1}
                    variant="filled"
                    leftIcon={<FaKey />}
                  >
                    Authenticate
                  </Button>
                  <Button
                    onClick={() => onSyncPressed(e)}
                    loading={e.hasSynced != -1}
                    variant="filled"
                    leftIcon={<FaSync />}
                  >
                    Synchronize
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Integrations;
