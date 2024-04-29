import { Skeleton } from "../ui/skeleton";

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
