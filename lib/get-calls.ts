import { z } from "zod";
import { db } from "./db";
import { callsSchema } from "./validation";

export async function getCalls(userId: string) {
  const data = await db.call.findMany({
    where: {
      userId: userId, // Using the userId parameter
    },
  });
  const calls = z.array(callsSchema).parse(data);
  
  return calls;
}