"use client";
import {
  ActionIcon,
  Badge,
  Card,
  Divider,
  Image,
  Table,
  Text,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const profile = {
  name: "John & John Sdn Bhd",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis enim consectetur temporibus maxime beatae ipsa officiis sequi provident nostrum. Similique, blanditiis. Quidem nobis quia maiores iste odio vitae saepe accusantium.",
  image: "https://picsum.photos/200",
  tags: ["Family-owned", "Micro", "Nasi Lemak", "1-5 Employees"],
  contact_details: [
    { method: "Phone", value: "0395433834" },
    { method: "Email", value: "hello@johnjohn.com" },
  ],
  ratings: [
    {
      aspect: "Du bist kartoffelsalat",
      rating: 3,
      comments: "Du hast brot und nudel",
    },
    {
      aspect: "Du bist kartoffelsalat",
      rating: 4,
      comments: "Du hast brot und nudel",
    },
    {
      aspect: "Du bist kartoffelsalat",
      rating: 3,
      comments: "Du hast brot und nudel",
    },
  ],
};

const CompanyProfile = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Link href="/deals">
        <ActionIcon
          variant="transparent"
          size="xl"
          className="absolute left-6 top-6 text-white"
        >
          <BsChevronLeft size="2rem" />
        </ActionIcon>
      </Link>
      <main className="relative -top-48 w-full px-4">
        <div className="grid grid-cols-[1fr_61.8%]">
          <div className="flex flex-col gap-4 p-4">
            <Card withBorder shadow="sm" radius="md">
              <Card.Section inheritPadding withBorder py="md">
                <Text fz="md" weight="bold">
                  Profile
                </Text>
              </Card.Section>
              <div className="flex flex-col gap-4 pt-4">
                <Card.Section
                  inheritPadding
                  className="aspect-square max-h-[300px] overflow-hidden"
                >
                  <img
                    src={profile.image}
                    className="h-full w-full rounded-md object-cover"
                    alt="profile picture"
                  />
                </Card.Section>
                <Card.Section inheritPadding>
                  <Text fz="lg" weight="bold">
                    {profile.name}
                  </Text>
                  <Text fz="md" color="dimmed">
                    {profile.description}
                  </Text>
                </Card.Section>

                <Card.Section inheritPadding className="flex flex-wrap gap-2">
                  {profile.tags.map((t, i) => (
                    <Badge key={i}>{t}</Badge>
                  ))}
                </Card.Section>
              </div>
            </Card>

            <Card withBorder shadow="sm" radius="md">
              <Card.Section inheritPadding withBorder py="md">
                <Text fz="md" weight="bold">
                  Contact Details
                </Text>
              </Card.Section>
              <div className="flex flex-col gap-4 pt-4">
                <Card.Section inheritPadding className="flex flex-col gap-4">
                  {profile.contact_details.map((c, i) => (
                    <div key={i}>
                      <Text fz="lg" weight="bold">
                        {c.method}
                      </Text>
                      <Text fz="md" color="dimmed">
                        {c.value}
                      </Text>
                    </div>
                  ))}
                </Card.Section>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4 p-4">
            <Card withBorder shadow="sm" radius="md">
              <Card.Section inheritPadding withBorder py="md">
                <Text fz="md" weight="bold">
                  BizSense
                </Text>
              </Card.Section>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex h-[200px] w-[200px] items-center justify-center self-center rounded-full bg-yellow-300 text-8xl font-bold">
                  A+
                </div>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Rating</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profile.ratings.map((r, i) => (
                      <tr key={i}>
                        <td>{r.aspect}</td>
                        <td className="flex">
                          {Array.from({ length: r.rating }, (v, k) => (
                            <FaStar key={k} color="gold" />
                          ))}
                        </td>
                        <td>{r.comments}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default CompanyProfile;
