import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroImage from "./hero-image";
import Image from "next/image";
import heroImage from "@/public/assets/landing-nomove.png";

export default function Hero() {
  return (
    <div className="py-32 lg:py-24 flex flex-col lg:flex-row justify-between items-center w-full min-h-screen">
      <div className="flex flex-col justify-center max-w-xl w-full lg:w-1/2 mb-12 lg:mb-0">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
          Revolutionize Your <span className="text-primary">Call Center</span>{" "}
          Performance
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Satiscript provides real-time emotion detection and script suggestions
          to improve customer service quality and agent performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="#demo">
            <Button size="lg" className="w-full sm:w-auto font-semibold">
              Watch Demo
            </Button>
          </Link>
          <Link href="#features">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-semibold"
            >
              Explore Features
            </Button>
          </Link>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center items-center">
        <Image
          src={heroImage}
          width={500}
          height={500}
          alt="Hero Image"
          className="lg:hidden"
        />
        <HeroImage />
      </div>
    </div>
  );
}
