import { team } from "@/lib/constant";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import adviser from "@/public/assets/adviser.png";

const Researchers = () => {
  return (
    <div id="researchers" className="py-16 lg:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Meet the Team</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Discover the brilliant minds behind Satiscript. Our team combines
          expertise and passion to drive innovation in call center technology.
        </p>
      </div>
      <div className="flex flex-col items-center mb-16">
        <Card className="max-w-sm bg-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-0">
            <Image
              src={adviser}
              width={280}
              height={375}
              alt="Dr. Nelson C. Rodelas"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </CardContent>
          <CardFooter className="flex flex-col items-center py-4">
            <h3 className="text-2xl font-bold">Dr. Nelson Rodelas</h3>
            <p className="mt-2 font-medium">Thesis Adviser</p>
          </CardFooter>
        </Card>
      </div>
      <div className="mt-16">
        <h3 className="text-2xl lg:text-4xl font-bold text-center mb-12">
          Researchers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-primary text-primary-foreground overflow-hidden"
            >
              <CardContent className="p-0">
                <Image
                  src={member.image}
                  width={280}
                  height={375}
                  alt={member.name}
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </CardContent>
              <CardFooter className="flex flex-col items-center py-4">
                <h3 className="text-xl font-bold text-center">{member.name}</h3>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Researchers;
