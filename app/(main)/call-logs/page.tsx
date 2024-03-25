import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'
import React from 'react'
import { z } from 'zod'
import { promises as fs } from "fs"
import path from "path"
import { callsSchema } from '@/components/table/data/schema'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'


async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/table/data/calls.json")
  )

  const calls = JSON.parse(data.toString())

  return z.array(callsSchema).parse(calls)
}

const CallLogs = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }
  
  const calls = await getTasks()
  return (
    <div className='p-12'>
      <DataTable columns={columns} data={calls}/>
    </div>
  )
}

export default CallLogs