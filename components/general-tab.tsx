import React from 'react'
import { ModeToggle } from './mode-toggle'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const GeneralTab = () => {
  return (
    <div>
      <Card className='p-4 lg:p-8'>
        <CardHeader>
          <CardTitle>General</CardTitle>
          <CardDescription>Change your general settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='max-w-md py-8'>
            <h1 className='font-bold text-lg mb-6'>Theme Settings</h1>
            <ModeToggle />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default GeneralTab