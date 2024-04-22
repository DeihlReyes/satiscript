import { team } from "@/lib/constant";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import adviser from "@/public/assets/adviser.png";

const Reseachers = () => {
  return (
    <div
      className="flex flex-col justify-start items-center w-full h-full py-32"
      id="researchers">
      <h2 className="text-7xl font-bold mb-6">Meet the Team</h2>
      <p className="text-center">
        Step into the core of Satiscript&apos;s essence, where proficiency
        intertwines with passion. Allow us to introduce the remarkable
        individuals steering the helm of innovation. Meet the esteemed team
        whose collective expertise and unwavering commitment have sculpted the
        exceptional journey of Satiscript.
      </p>
      <Card className="flex flex-col items-center justify-center w-full max-w-[280px] h-auto mt-16">
        <CardHeader></CardHeader>
        <CardContent className="flex flex-col justify-center items-center">
          <Image
            src={adviser}
            width={200}
            height={150}
            alt={'Dr. Nelson C. Rodelas'}
            className="rounded-lg mb-8"
          />
        </CardContent>
        <CardFooter className="flex flex-col">
          <h3 className="text-2xl font-bold text-center">
            Dr. Nelson Rodelas
          </h3>
          <p className="mt-4 text-secondary-foreground">Ultimate Thesis Adviser</p>
        </CardFooter>
      </Card>
      <div className="flex flex-row justify-between items-center h-full w-full mt-16">
        {team.map(
          (member, index) => (
            <Card
              key={index}
              className="flex flex-col items-center justify-center w-full max-w-[280px] h-auto">
              <CardHeader></CardHeader>
              <CardContent className="flex flex-col justify-center items-center">
                <Image
                  src={member.image}
                  width={200}
                  height={150}
                  alt={member.name}
                  className="rounded-lg mb-8"
                />
              </CardContent>
              <CardFooter>
                <h3 className="text-2xl font-bold line-clamp-2 text-center max-w-[200px]">
                  {member.name}
                </h3>
              </CardFooter>
            </Card>
          ),
          []
        )}
      </div>
    </div>
  );
};

export default Reseachers;
