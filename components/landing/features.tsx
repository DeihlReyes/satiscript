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
    <div id="features" className="flex flex-col justify-center items-center w-full h-full py-16 lg:py-32 px-0 lg:px-24">
      <h2 className="text-4xl lg:text-7xl font-bold mb-6">Features</h2>
      <p className="w-full max-w-5xl text-center leading-relaxed">
        Level up customer satisfaction with Satiscript&apos;s, using our system
        to determine the emotion of your customers and know if an agent is doing
        a good job or not. Our system is designed to help you improve your
        customer service and increase customer satisfaction.
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 mt-16 gap-5 w-fit mx-auto">
        {features.map(
          (feature) => (      
            <li
              key={feature.title}>
              <Card className="w-full lg:w-[27rem] h-full hover:shadow-md hover:shadow-slate-500 hover:dark:shadow-slate-800 transition-all ease-linear duration-150">
                <CardHeader className="flex flex-row justify-between items-center">
                  <CardTitle>{feature.title}</CardTitle>
                  <feature.icon className="h-10 w-10 text-[#3664ef]" />
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </li>
          ),
          []
        )}
      </ul>
    </div>
  );
};

export default Features;
