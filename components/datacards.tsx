import { Phone, Timer, Star, StarOff } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface DataCardsProps {
  data:{
    totalCalls: number;
    averageCallTime: number;
    satisfiedCustomers: number;
    dissatisfiedCustomers: number;
  }
}

const DataCards= ({ data }: DataCardsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
      <Card className="bg-blue-500 text-white shadow-sm shadow-slate-400">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-3">
          <CardTitle className="text-xs font-medium md:text-sm">
            Total Calls
          </CardTitle>
          <Phone className="h-6 w-6" />
        </CardHeader>
        <CardContent className="pb-3">
          <div className="mb-1 text-3xl font-bold leading-none md:text-5xl">
            {data.totalCalls}
          </div>
          <p className="text-xs text-white md:text-sm">Overall calls made</p>
        </CardContent>
      </Card>

      <Card className="bg-yellow-500 text-white shadow-sm shadow-slate-400">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-3">
          <CardTitle className="text-xs font-medium md:text-sm">
            Average Call Time
          </CardTitle>
          <Timer className="h-6 w-6" />
        </CardHeader>
        <CardContent className="pb-3">
          <div className="mb-1 text-3xl font-bold leading-none md:text-5xl">
            {data.averageCallTime} <span className="font-light text-xl">mins</span>
          </div>
          <p className="text-xs text-white md:text-sm">Length of call</p>
        </CardContent>
      </Card>

      <Card className="bg-green-500 text-white shadow-sm shadow-slate-400">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-3">
          <CardTitle className="text-xs font-medium md:text-sm">
            Satisfied Callers
          </CardTitle>
          <Star className="h-6 w-6" />
        </CardHeader>
        <CardContent className="pb-3">
          <div className="mb-1 text-3xl font-bold leading-none md:text-5xl">
            {data.satisfiedCustomers}
          </div>
          <p className="text-xs text-white md:text-sm">
            Number of callers satisfied
          </p>
        </CardContent>
      </Card>

      <Card className="bg-red-500 text-white shadow-sm shadow-slate-400">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-3">
          <CardTitle className="text-xs font-medium md:text-sm">
            Dissatisfied Callers
          </CardTitle>
          <StarOff className="h-6 w-6" />
        </CardHeader>
        <CardContent className="pb-3">
          <div className="mb-1 text-3xl font-bold leading-none md:text-5xl">
            {data.dissatisfiedCustomers}
          </div>
          <p className="text-xs text-white md:text-sm">Number of callers dissatisfied</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCards;
