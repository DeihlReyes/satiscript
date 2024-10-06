import { features } from "@/lib/constant";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Features = () => {
  return (
    <div id="features" className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Powerful Features
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Level up customer satisfaction with Satiscript&apos;s advanced system.
          Determine customer emotions and evaluate agent performance to improve
          your customer service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center space-x-4">
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
