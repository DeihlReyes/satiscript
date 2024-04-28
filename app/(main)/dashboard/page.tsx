import { AreaChartComponent } from "@/components/charts/areacharts";
import { GaugeChart } from "@/components/charts/gauge";
import { LineChartComponent } from "@/components/charts/linecharts";
import DataCards from "@/components/datacards";
import { getSession } from "@/lib/auth";
import { getCalls } from "@/lib/get-calls";
import { Call } from "@prisma/client";
import { redirect } from "next/navigation";

function prepareAreaChartData(calls: Call[]) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const initialData = months.map(month => ({ month, calls: 0 }));

  // Reduce the calls to sum them up per month
  const updatedData = calls.reduce((acc, call) => {
    const monthIndex = new Date(call.createdAt).getMonth();
    acc[monthIndex].calls += 1;
    return acc;
  }, initialData);

  return updatedData;
}

function prepareLineChartData(calls: Call[]) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const initialData = months.map(month => ({
    month,
    satisfied: 0,
    dissatisfied: 0
  }));

  // Reduce the calls to sum them up per month and satisfaction type
  const updatedData = calls.reduce((acc, call) => {
    const monthIndex = new Date(call.createdAt).getMonth();
    if (call.satisfaction === 'satisfied') {
      acc[monthIndex].satisfied += 1;
    } else if (call.satisfaction === 'dissatisfied') {
      acc[monthIndex].dissatisfied += 1;
    }
    return acc;
  }, initialData);

  return updatedData;
}

function prepareSatisfactionData(calls: Call[]) {
  const data = prepareLineChartData(calls);
  const satisfiedCount = data.reduce((acc, month) => acc + month.satisfied, 0);
  const dissatisfiedCount = data.reduce((acc, month) => acc + month.dissatisfied, 0);

  return {
    satisfied: satisfiedCount,
    dissatisfied: dissatisfiedCount
  };
}

function prepareDataCardData(calls: Call[]) {
  const totalCalls = calls.length;
  const satisfiedCustomers = calls.filter((call) => call.satisfaction === "satisfied").length;
  const dissatisfiedCustomers = calls.filter((call) => call.satisfaction === "dissatisfied").length;
  const averageCallTime = Math.round(calls.reduce((acc, call) => acc + parseInt(call.duration), 0) / calls.length);


  const data = {
    totalCalls: totalCalls,
    averageCallTime: averageCallTime,
    satisfiedCustomers: satisfiedCustomers,
    dissatisfiedCustomers: dissatisfiedCustomers
  };

  return data;
}


const dashboard = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }

  const calls = await getCalls(session.userId)
  const areaChartData = prepareAreaChartData(calls);
  const lineChartData = prepareLineChartData(calls);
  const dataCardData = prepareDataCardData(calls);
  const gaugeData = prepareSatisfactionData(calls);

  return (
    <div className="flex flex-col justify-center items-center px-8 lg:px-12 py-8 gap-8 w-full h-full mx-auto">
      <DataCards data={dataCardData}/>
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center w-full h-full">
        <AreaChartComponent data={areaChartData} />
        <GaugeChart data={gaugeData} />
      </div>
      <LineChartComponent data={lineChartData} />
    </div>
  );
};

export default dashboard;
