import { Skeleton } from '@/components/ui/skeleton'
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const LoadingSettings = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }
  
  return (
    <div className="flex flex-col justify-center items-center px-8 lg:px-12 py-8 gap-2 w-full h-full mx-auto">
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-[500px]" />
    </div>
  )
}

export default LoadingSettings