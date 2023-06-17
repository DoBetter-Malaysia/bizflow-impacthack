"use client";

import Button from "@/components/buttons/Button";
import { Container, Table, Text } from "@mantine/core";
import { useState } from "react";
import { FaCheck, FaKey, FaSync } from "react-icons/fa";

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
      img: "/storehub.jpg",
      name: "StoreHub",
      description:
        "StoreHub is a cloud-based point of sale (POS) and business management system designed specifically for retail and F&B businesses. It offers a comprehensive set of features and tools to help businesses streamline their operations, manage inventory, process sales transactions, track customer data, and analyze business performance. ",
      hasAuthenticated: -1,
      hasSynced: -1,
    },
    {
      id: 2,
      img: "/grabfood.png",
      name: "Grab Food",
      description:
        "GrabFood is a popular online food delivery platform that connects users with a wide range of restaurants and food establishments in their area. It offers a convenient and efficient way for customers to order food from their favorite restaurants and have it delivered to their doorstep. GrabFood provides a user-friendly mobile app or website where customers can browse menus, place orders, and track their delivery in real-time. ",
      hasAuthenticated: -1,
      hasSynced: -1,
    },
    {
      id: 3,
      img: "/foodpanda.png",
      name: "Foodpanda",
      description:
        "Foodpanda is an online food delivery platform that allows users to order food from a wide selection of restaurants in their area. It operates through a user-friendly website or mobile app, where customers can browse menus, place orders, and track their deliveries in real-time. Foodpanda partners with local restaurants to provide a convenient and reliable food delivery service to customers.",
      hasAuthenticated: -1,
      hasSynced: -1,
    },
  ]);

  const onSyncPressed = (integration: IntegrationType) => {
    setIntegration((prevIntegration) => {
      return prevIntegration.map((type) => {
        if (type.id == integration.id) {
          return {
            ...type,
            hasSynced: 0,
          };
        }
        return type;
      });
    });

    setTimeout(() => {
      setIntegration((prevIntegration) => {
        return prevIntegration.map((type) => {
          if (type.id == integration.id) {
            return {
              ...type,
              hasSynced: 1,
            };
          }
          return type;
        });
      });
    }, 5000);
  };

  const onAuthPressed = (integration: IntegrationType) => {
    setIntegration((prevIntegration) => {
      return prevIntegration.map((type) => {
        if (type.id == integration.id) {
          return {
            ...type,
            hasAuthenticated: 0,
          };
        }
        return type;
      });
    });

    setTimeout(() => {
      setIntegration((prevIntegration) => {
        return prevIntegration.map((type) => {
          if (type.id == integration.id) {
            return {
              ...type,
              hasAuthenticated: 1,
            };
          }
          return type;
        });
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
                <td className="h-max max-w-[500px]">
                  <img src={e.img} alt={`${e.name} Logo`} />
                </td>
                <td>
                  <Text fw="bold" fz="lg">
                    {e.name}
                  </Text>
                  <Text fz="md" color="dimmed" lineClamp={2}>
                    {e.description}
                  </Text>
                </td>
                <td className="flex gap-4" valign="middle">
                  <Button
                    onClick={() => onAuthPressed(e)}
                    className="px-4 py-4"
                    disabled={e.hasAuthenticated == 1}
                    loading={e.hasAuthenticated == 0}
                    variant="filled"
                    leftIcon={e.hasAuthenticated != 1 ? <FaKey /> : <FaCheck />}
                  >
                    {e.hasAuthenticated != 1 ? "Authenticate" : "Authenticated"}
                  </Button>
                  <Button
                    onClick={() => onSyncPressed(e)}
                    className="px-4 py-4"
                    disabled={e.hasSynced == 1}
                    loading={e.hasSynced == 0}
                    variant="filled"
                    leftIcon={e.hasSynced != 1 ? <FaSync /> : <FaCheck />}
                  >
                    {e.hasSynced != 1 ? "Synchronize" : "Synchronized"}
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
