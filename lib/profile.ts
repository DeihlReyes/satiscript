// this is for getting profile data 
import { cookies } from "next/headers";
import { getSession } from "./auth"
import { db } from "./db"

const getProfile = async () => {
  const session = await getSession()
  // session is a object with user key
  if (!session) {
    return null
  }

  const userId = session.user
  const user = await db.user.findUnique({
    where: { id: userId}
  })

  return { firstName: user!.firstName as string, lastName: user!.lastName as string, username: user!.username as string}
}

export { getProfile }