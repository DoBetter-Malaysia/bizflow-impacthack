"use client";

import RankingCard from "@/components/cards/RankingCard";
import {
  Badge,
  Card,
  Divider,
  Image,
  Select,
  Table,
  Text,
  clsx,
} from "@mantine/core";
import { LatLngTuple, icon } from "leaflet";
import { useState } from "react";
import { FaCheck, FaStar, FaThumbsUp } from "react-icons/fa";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";

const pizzaCompanies = [
  {
    name: "Dominos Pizza SS15 Subang Jaya",
    industryRank: 2,
    platformRank: 13,
    isYourCompany: false,
    img: "/dominos.png",
    latLng: [3.073725980060143, 101.58823698069999],
  },
  {
    name: "Pizza Hut Subang",
    industryRank: 3,
    platformRank: 14,
    isYourCompany: false,
    img: "/pizza-hut.png",
    latLng: [3.074612619218513, 101.58928243504766],
  },
  {
    name: "Johns Pizza",
    industryRank: 4,
    platformRank: 16,
    isYourCompany: true,
    img: "/user.png",
    latLng: [3.0762858022204864, 101.58789327069849],
  },
  {
    name: "Pizza Bean @ SS15",
    industryRank: 5,
    platformRank: 17,
    isYourCompany: false,
    img: "/pizza-bean.jpg",
    latLng: [3.07672912163979, 101.58803648394908],
  },
  {
    name: "Big Brooklyn Pizza @ SS15",
    industryRank: 7,
    platformRank: 12,
    isYourCompany: false,
    img: "/big-brooklyn.jpg",
    latLng: [3.0739256205643835, 101.59018600088208],
  },
  {
    name: "Daddy & Co @ SS15",
    industryRank: 8,
    platformRank: 18,
    isYourCompany: false,
    img: "/daddy-co.jpg",
    latLng: [3.0739690809309383, 101.59018467896557],
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

const comparisons = [
  {
    left: "Delivery within 15km radius in Kuala Lumpur",
    attribute: "Delivery Service",
    right: "Delivery across Klang Valley",
    direction: "left",
  },
  {
    left: "John's Pizza Membership & GrabFood Collaboration",
    attribute: "Customer Loyalty Programs",
    right: "Free Birthday Pizza & Midnight Discount",
    direction: "equal",
  },
  {
    left: "Active on social media with 10,000 followers and high engagement rates.",
    attribute: "Online Presence",
    right:
      "Well-established website with online ordering and 30,000 monthly website visitors.",
    direction: "right",
  },
  {
    left: "95% positive customer reviews mentioning quality ingredients and friendly service.",
    attribute: "Customer Reviews and Ratings",
    right: "Mixed reviews, with 60% positive and 40% negative feedback.",
    direction: "left",
  },
  {
    left: "Locally sourced ingredients, customizable toppings, and a gluten-free crust option.",
    attribute: "Unique Selling Points",
    right: "Authentic wood-fired pizzas with imported ingredients.",
    direction: "left",
  },
];

const Profile = () => {
  const [selectedCompetitor, setSelectedCompetitor] = useState(
    pizzaCompanies[0]
  );

  return (
    <>
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
                  Competitor Landscape
                </Text>
              </Card.Section>
              <div className="flex flex-col gap-4 pt-4">
                <Card.Section
                  inheritPadding
                  className="flex aspect-square flex-col gap-4"
                >
                  <MapContainer
                    center={
                      pizzaCompanies.find((x) => x.isYourCompany == true)!
                        .latLng as LatLngTuple
                    }
                    className="h-full w-full"
                    zoom={15.5}
                    scrollWheelZoom={false}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {pizzaCompanies.map((p, index) => (
                      <Marker
                        eventHandlers={{
                          click: p.isYourCompany
                            ? () => {}
                            : (_) => setSelectedCompetitor(p),
                        }}
                        position={p.latLng as LatLngTuple}
                        icon={icon({
                          iconUrl: p.img,
                          iconSize: [40, 40],
                          className: "rounded-full",
                          shadowUrl: p.isYourCompany
                            ? "/green.png"
                            : "/red.png",
                          shadowSize: [44, 44],
                        })}
                        key={index}
                      >
                        <Tooltip>{p.name}</Tooltip>
                      </Marker>
                    ))}
                  </MapContainer>
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
                  className="m-auto grid-cols-12 gap-2"
                  sx={{ display: "grid" }}
                >
                  <div className="col-span-5 flex justify-center">
                    <Text fz="lg" fw="bold">
                      {"John's Pizza"}
                    </Text>
                  </div>
                  <div className="col-span-2 flex justify-center">vs</div>
                  <div className="col-span-5 flex justify-center">
                    <Select
                      className="w-full"
                      classNames={{ wrapper: "max-w-full w-full" }}
                      value={selectedCompetitor.name}
                      data={pizzaCompanies
                        .filter((x) => !x.isYourCompany)
                        .map((c) => ({ value: c.name, label: c.name }))}
                      onChange={(v) => {
                        setSelectedCompetitor(
                          pizzaCompanies.find((x) => x.name == v)!
                        );
                      }}
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
                      src={selectedCompetitor.img}
                      alt="Competitor Logo"
                    />
                  </div>
                  {comparisons.map((comp, index) => (
                    <div
                      className="col-span-12 mb-2 grid grid-cols-12 gap-2"
                      key={index}
                    >
                      <div
                        className={clsx(
                          "relative col-span-5 line-clamp-2 flex items-center justify-center overflow-visible rounded-md border border-slate-300 px-2 py-2 text-center text-slate-800"
                        )}
                      >
                        {comp.direction == "left" && (
                          <FaThumbsUp
                            size="1.5rem"
                            color="green"
                            className="absolute -right-2 -top-2"
                          />
                        )}
                        {comp.left}
                      </div>
                      <div className="col-span-2 flex items-center text-center font-semibold">
                        {comp.attribute}
                      </div>
                      <div
                        className={clsx(
                          "relative col-span-5 line-clamp-2 flex items-center justify-center overflow-visible rounded-md border border-slate-300 px-2 py-2 text-center text-slate-800"
                        )}
                      >
                        {comp.direction == "right" && (
                          <FaThumbsUp
                            size="1.5rem"
                            color="green"
                            className="absolute -left-2 -top-2"
                          />
                        )}
                        {comp.right}
                      </div>
                    </div>
                  ))}
                </Card.Section>

                <div>
                  <Text fz="lg" pb="sm">
                    Our Smart Analysis
                  </Text>
                  <Divider />
                </div>
                <Card.Section inheritPadding>
                  <ul className="mx-6 list-decimal">
                    <li>
                      <strong>
                        Competitor A has a higher customer satisfaction rating
                        compared to {"John's"} Pizza.
                      </strong>
                      <Text color="dimmed" className="mb-6">
                        Recommendation: John should focus on improving customer
                        service and enhancing the overall dining experience to
                        increase customer satisfaction and loyalty.
                      </Text>
                    </li>
                    <li>
                      <strong>
                        Competitor B offers a wider variety of pizza toppings
                        and customization options than {"John's"} Pizza.
                      </strong>
                      <Text color="dimmed" className="mb-6">
                        Recommendation: John should consider expanding the menu
                        to include more diverse toppings and offer customizable
                        options to cater to a broader range of customer
                        preferences.
                      </Text>
                    </li>
                    <li>
                      <strong>
                        Competitor C has partnered with local food delivery
                        services, allowing customers to order their pizzas
                        conveniently.
                      </strong>
                      <Text color="dimmed" className="mb-6">
                        Recommendation: John should explore partnerships with
                        popular food delivery platforms to offer delivery
                        services and reach a wider customer base, especially in
                        the current trend of increased online food ordering.
                      </Text>
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
