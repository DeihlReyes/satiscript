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
      className="flex flex-col justify-start items-center w-full h-fit py-16 lg:py-32"
      id="researchers">
      <h2 className="text-4xl lg:text-7xl font-bold mb-6">Meet the Team</h2>
      <p className="text-center leading-relaxed">
        Step into the core of Satiscript&apos;s essence, where proficiency
        intertwines with passion. Allow us to introduce the remarkable
        individuals steering the helm of innovation. Meet the esteemed team
        whose collective expertise and unwavering commitment have sculpted the
        exceptional journey of Satiscript.
      </p>
      <Card className="flex flex-col items-center justify-center w-full max-w-[280px] h-auto mt-16 bg-primary overflow-hidden z[-100]">
        <CardContent className="flex flex-col justify-center items-center p-0">
          <Image
            className="w-full h-full rounded-t-md hover:scale-110 transition-all ease-in-out duration-500"
            src={adviser}
            width={0}
            height={375}
            alt={"Dr. Nelson C. Rodelas"}
          />
        </CardContent>
        <CardFooter className="flex flex-col justify-center items-center py-4 text-white">
          <h3 className="text-2xl font-extrabold text-center w-full">
            Dr. Nelson Rodelas
          </h3>
          <p className="mt-4 font-semibold">
            Thesis Adviser
          </p>
        </CardFooter>
      </Card>
      <div className="flex flex-col justify-between items-center h-full w-full mt-24">
        <h3 className="text-2xl lg:text-5xl font-bold">Researchers</h3>
        <ul className="flex flex-col lg:flex-row justify-center items-center gap-12 mt-24 z[-100]">
          {team.map(
            (member, index) => (
              <li className="w-full h-full rounded-md overflow-hidden" key={index}>
                <Card
                  className="w-full max-w-[280px] h-full bg-primary">
                  <CardContent className="flex flex-col justify-center items-center p-0">
                    <Image
                      className="w-full h-full rounded-t-md hover:scale-110 transition-all ease-in-out duration-500"
                      src={member.image}
                      width={0}
                      height={375}
                      alt={member.name}
                    />
                  </CardContent>
                  <CardFooter className="flex flex-col justify-center items-center py-4 text-white">
                    <h3 className="text-2xl font-bold line-clamp-2 text-center max-w-[200px]">
                      {member.name}
                    </h3>
                  </CardFooter>
                </Card>
              </li>
            ),
            []
          )}
        </ul>
      </div>
    </div>
  );
};

export default Reseachers;
