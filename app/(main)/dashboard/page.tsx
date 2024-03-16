import { AreaChartComponent } from "@/components/charts/areacharts";
import DataCards from "@/components/datacards";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const dashboard = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <section className="flex flex-col justify-center items-center px-12 py-8 gap-8 w-full">
      <DataCards />
      <div className="flex flex-row justify-between items-center w-full">
        <AreaChartComponent />
      </div>
    </section>
  );
};

export default dashboard;
