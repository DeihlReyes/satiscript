import { AreaChartComponent } from "@/components/charts/areacharts";
import { GaugeChart } from "@/components/charts/gauge";
import DataCards from "@/components/datacards";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const dashboard = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <section className="flex flex-col justify-center items-center px-8 lg:px-12 py-8 gap-8 w-full h-full">
      <DataCards />
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center w-full h-full">
        <AreaChartComponent />
        <GaugeChart />
      </div>
    </section>
  );
};

export default dashboard;
