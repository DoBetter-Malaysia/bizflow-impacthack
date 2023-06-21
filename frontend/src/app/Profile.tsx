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
import RankingCard from "@/components/cards/RankingCard";

const profile = {
  name: "Johns Pizza Sdn Bhd",
  description:
    "John's Pizza Sdn Bhd is a renowned pizzeria known for its exceptional flavors and commitment to quality. With a rich heritage as a family-owned establishment, they have perfected the art of crafting mouthwatering pizzas that leave customers craving for more. Their dedication to using the finest ingredients and traditional cooking methods ensures that each pizza is a delectable masterpiece.",
  image: "./user.png",
  tags: ["Family-owned", "Micro", "Italian", "5-10 Employees"],
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

const Profile = () => {
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
      <main className="relative w-full">
        <div className="grid grid-cols-[1fr_61.8%] gap-4">
          <div className="flex flex-col gap-4">
            <Card withBorder shadow="sm" radius="lg">
              <Card.Section inheritPadding withBorder py="md">
                <Text fz="md" weight="bold">
                  Profile
                </Text>
              </Card.Section>
              <div className="flex flex-col gap-4 pt-4">
                <Card.Section
                  inheritPadding
                  className="aspect-square max-h-[360px] overflow-hidden"
                >
                  <img
                    src={profile.image}
                    className="h-full w-full rounded-md object-contain"
                    alt="profile picture"
                  />
                </Card.Section>
                <Card.Section inheritPadding>
                  <Text fz="lg" weight="bold">
                    {profile.name}
                  </Text>
                  <Text fz="md" color="dimmed" className="text-justify">
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

            <Card withBorder shadow="sm" radius="lg">
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

          <div className="flex flex-col gap-4 ">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <RankingCard rank={4} type="Industry" industry="Food" />
              </div>
              <div className="col-span-1">
                <RankingCard rank={4} type="Platform" />
              </div>
              <div className="col-span-1">
                <RankingCard rank={20000} type="Total No of Customers" />
              </div>
            </div>

            <Card withBorder shadow="sm" radius="lg">
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

export default Profile;
