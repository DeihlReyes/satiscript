import DataCardsLoading from '@/components/loading/datacards-loading'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const LoadingDashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 lg:px-12 py-8 gap-8 w-full h-full mx-auto">
      <DataCardsLoading />
      <div className="flex flex-col gap-8 lg:flex-row justify-between items-center w-full h-full">
        <Skeleton className="w-full lg:w-2/3 h-96" />
        <Skeleton className="w-full lg:w-1/3 h-96" />
      </div>
      <Skeleton className="w-full h-96" />
    </div>
  )
}

export default LoadingDashboard