"use client";

import {
  ActionIcon,
  Button,
  Card,
  Group,
  Image,
  Input,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { FaFilter, FaSearch } from "react-icons/fa";

const DealFinder = () => {
  return (
    <main className="relative -top-48 w-full p-10">
      <Input
        size="lg"
        placeholder="Search query here..."
        className="mb-8 w-full"
        classNames={{ rightSection: "w-min px-2" }}
        rightSection={
          <div className="flex gap-2">
            <ActionIcon size="lg">
              <FaFilter size="1.25rem" />
            </ActionIcon>
            <ActionIcon size="lg">
              <FaSearch size="1.25rem" />
            </ActionIcon>
          </div>
        }
      />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 9 }, (v, k) => (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://picsum.photos/200"
                height={160}
                alt="SME Image"
              />
            </Card.Section>
            <Text fz="xl" weight="bold" mt="md" mb="xs">
              Single Moms Enterprise
            </Text>
            <Text size="sm" color="dimmed" lineClamp={3}>
              Single Moms Enteprise is a Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Maxime, dolores. Quidem dolorum temporibus
              veniam, reprehenderit numquam ipsum odio fuga incidunt.
            </Text>

            <Link href={`/deals/profile/${k}`}>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                See Details
              </Button>
            </Link>
          </Card>
        ))}
      </section>
    </main>
  );
};

export default DealFinder;
