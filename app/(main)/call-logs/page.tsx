import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'
import { getSession } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getCalls } from '@/lib/get-calls'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Call Logs | Satiscript",
  description: "Call logs for Satiscript, a customer satisfaction priority platform. View your call data in a table.",
};


const CallLogs = async () => {
  const session = await getSession();

  if (!session) {
    redirect("/sign-in");
  }
  
  const calls = await getCalls(session.user)
  
  return (
    <div className='px-8 lg:px-12 py-8'>
      <DataTable columns={columns} data={calls}/>
    </div>
  )
}

export default CallLogs