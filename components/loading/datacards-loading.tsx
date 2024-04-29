import { Skeleton } from "../ui/skeleton";

interface DataCardsProps {
  data:{
    totalCalls: number;
    averageCallTime: number;
    satisfiedCustomers: number;
    dissatisfiedCustomers: number;
  }
}

const DataCardsLoading= () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 w-full">
        <Skeleton className="h-[110px] w-full" />
        <Skeleton className="h-[110px] w-full" />
        <Skeleton className="h-[110px] w-full" />
        <Skeleton className="h-[110px] w-full" />
    </div>
  );
};

export default DataCardsLoading;
