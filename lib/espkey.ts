import React from 'react'
import { getSession } from './auth'
import { db } from './db'

const GetEspKey = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId}
  })

  if (!user){
    return null
  }

  const espKey = await db.espware.findUnique({
    where: {
      id: user?.espKey
    }
  })

  if(!espKey){
    return null
  }

  return { espKey: espKey.id }

}

export default GetEspKey