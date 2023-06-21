import {
  ActionIcon,
  Badge,
  Card,
  Divider,
  Image,
  List,
  Select,
  Table,
  Text,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import { BsChevronLeft } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import RankingCard from "@/components/cards/RankingCard";

const pizzaCompanies = [
  {
    name: "Pizza Hut",
    industryRank: 2,
    platformRank: 13,
    isYourCompany: false,
  },
  {
    name: "Dominos Pizza",
    industryRank: 3,
    platformRank: 14,
    isYourCompany: false,
  },
  {
    name: "Johns Pizza",
    industryRank: 4,
    platformRank: 16,
    isYourCompany: true,
  },
  {
    name: "Woon Beans Pizza",
    industryRank: 5,
    platformRank: 17,
    isYourCompany: false,
  },
];

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
      aspect: "Food Safety and Hygiene",
      rating: 5,
      comments:
        "Adheres to strict food safety and hygiene standards, including proper food handling, storage, and preparation procedures, as mandated by local health authorities.",
    },
    {
      aspect: "Financial Recordkeeping",
      rating: 4,
      comments:
        "Maintains accurate financial records and documentation, including invoices, receipts, and financial statements, to ensure compliance with accounting and auditing standards.",
    },
    {
      aspect: "Labor Laws",
      rating: 4,
      comments:
        "Complies with labor laws and regulations regarding employee rights, minimum wage requirements, working hours, employee benefits, and proper employment contracts.",
    },
    {
      aspect: "Tax Compliance",
      rating: 5,
      comments:
        "Fulfills tax obligations by accurately reporting and paying all required taxes, including income tax, sales tax, and payroll taxes, in accordance with local tax laws.",
    },
    {
      aspect: "Licensing and Permits",
      rating: 5,
      comments:
        "Maintains all the required licenses and permits to operate a food establishment, including food service permits, health permits, and alcohol licenses.",
    },
  ],
};

const competitors = [
  "Domino's Pizza",
  "Pizza Hut",
  "Papa John's",
  "Little Caesars",
  "California Pizza Kitchen",
  "Papa Murphy's",
  "Sbarro",
  "Marco's Pizza",
  "Round Table Pizza",
  "Blaze Pizza",
  "Mellow Mushroom",
  "Cici's Pizza",
  "Jets Pizza",
  "Godfather's Pizza",
  "Uno Pizzeria & Grill",
];

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
                  className="aspect-square max-h-[300px] overflow-hidden"
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

            <Card withBorder shadow="sm" radius="lg">
              <Card.Section inheritPadding withBorder py="md">
                <Text fz="md" weight="bold">
                  Your Top Competitors
                </Text>
              </Card.Section>
              <div className="mb-2 flex flex-col gap-4 px-4 py-4">
                <Card.Section>
                  <div className="grid grid-cols-5 items-center gap-2">
                    <div className="col-span-3 items-start font-semibold">
                      Company Name
                    </div>
                    <div className="col-span-1 items-center font-semibold">
                      Industry Rank
                    </div>
                    <div className="col-span-1 items-center font-semibold">
                      Platform Rank
                    </div>
                    <Divider className="col-span-5" />
                    {pizzaCompanies.map((c, i) => (
                      <>
                        <div className="col-span-3 flex items-center ">
                          {i + 1}.{"  "}
                          {c.name}
                          {c.isYourCompany && (
                            <Badge className="ml-2 outline outline-1">
                              Your Company
                            </Badge>
                          )}
                        </div>
                        <div className="col-span-1">{c.industryRank}</div>
                        <div className="col-span-1">{c.platformRank}</div>
                      </>
                    ))}
                  </div>
                </Card.Section>
              </div>
            </Card>
          </div>

          <div className="flex flex-col gap-4 ">
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <RankingCard rank={4} type="Food Industry Rank" isRank={true} />
              </div>
              <div className="col-span-1">
                <RankingCard rank={16} type="Platform Rank" isRank={true} />
              </div>
              <div className="col-span-1">
                <RankingCard
                  rank={20000}
                  type="Total No of Customers"
                  isRank={false}
                />
              </div>
              <div className="col-span-1">
                <RankingCard
                  rank={24}
                  type="Total Product Types"
                  isRank={false}
                />
              </div>
            </div>

            <Card withBorder shadow="sm" radius="lg">
              <Card.Section inheritPadding withBorder py="md">
                <Text fz="md" weight="bold">
                  Compliance Rating
                </Text>
              </Card.Section>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex h-[200px] w-[200px] items-center justify-center self-center rounded-full bg-yellow-300 text-8xl font-bold">
                  A+
                </div>
                <Table>
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Rating</th>
                      <th>Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profile.ratings.map((r, i) => (
                      <tr key={i}>
                        <td>
                          <div className="text-lg font-medium">{r.aspect}</div>
                        </td>
                        <td className="">
                          <div className="flex">
                            {Array.from({ length: r.rating }, (v, k) => (
                              <FaStar key={k} color="gold" />
                            ))}
                          </div>
                        </td>
                        <td className="">{r.comments}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>

            <Card withBorder shadow="sm" radius="lg">
              <Card.Section inheritPadding withBorder py="md">
                <Text fz="md" weight="bold">
                  Smart Profile Comparison
                </Text>
              </Card.Section>
              <div className="flex flex-col gap-4 pt-4">
                <Card.Section
                  inheritPadding
                  className="grid grid-cols-12 max-w-[75%] m-auto gap-2"
                >
                  <div className="col-span-5 flex justify-center">
                    <Text fz="lg">John's Pizza</Text>
                  </div>
                  <div className="col-span-2 flex justify-center">vs</div>
                  <div className="col-span-5 flex justify-center">
                    <Select
                      data={competitors.map((c) => ({ value: c, label: c }))}
                      placeholder="Select competitor"
                    />
                  </div>
                  <div className="col-span-5 flex justify-center">
                    <Image
                      maw={240}
                      radius="md"
                      src="./user.png"
                      alt="John's Pizza Logo"
                    />
                  </div>
                  <div className="col-span-2 flex justify-center"></div>
                  <div className="col-span-5 flex justify-center">
                    <Image
                      maw={240}
                      radius="md"
                      src="./bot.png"
                      alt="Competitor Logo"
                    />
                  </div>
                </Card.Section>

                <div>
                  <Text fz="lg" pb="sm">
                    Our Smart Analysis
                  </Text>
                  <Divider />
                </div>
                <Card.Section inheritPadding>
                  <ul className="list-decimal mx-6">
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel earum temporibus, deserunt rem nobis ullam!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel earum temporibus, deserunt rem nobis ullam!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel earum temporibus, deserunt rem nobis ullam!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vel earum temporibus, deserunt rem nobis ullam!
                    </li>
                  </ul>
                </Card.Section>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
