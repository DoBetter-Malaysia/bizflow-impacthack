"use client";
import Button from "@/components/buttons/Button";
import { Container, Image } from "@mantine/core";
import Link from "next/link";

const Hero = () => {
  return (
    <Container size="xl" className="mt-32">
      <div className="mt-16 grid grid-cols-[1fr_1.5fr] gap-4">
        <div className="space-y-4 py-20">
          <div className="space-y-2">
            <p className="text-slate-400">
              Accelerate growth through Data Transformation
            </p>
            <div>
              <h2 className="mb-4 text-7xl font-bold text-blue-500">
                Transform
              </h2>
              <p className="text-6xl font-semibold">Data into Action</p>
            </div>
            <p className="text-slate-600">
              with integrated visibility, actionable insights & endless
              possibilities
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/integrations">
              <Button className="text-xl">Get Started</Button>
            </Link>
            <Button className="text-xl" variant="outline">
              How it Works
            </Button>
          </div>
        </div>
        <div>
          <Image src="/hero.png" alt="Hero image" w="100%" h="50%" />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
