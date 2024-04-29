import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const LoadingCallLogs = () => {
  return (
    <div className="flex flex-col justify-center items-center px-8 lg:px-12 py-8 gap-8 w-full h-full mx-auto">
      <div className="flex flex-col gap-8 lg:flex-row md:justify-between justify-start items-start md:items-center w-full h-full">
        <Skeleton className="w-48 h-8" />
        <Skeleton className="md:hidden w-16 h-8" />
      </div>
      <Skeleton className="w-full h-[500px]" />
    </div>
  )
}

export default LoadingCallLogs