import { getSession } from '@/lib/auth';
import React from 'react'

const LandingButton = async () => {
  const session = await getSession();

  return (
    {session ? (
      <li
      className='flex flex-col justify-center items-center whitespace-nowrap transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground'>
      <Link
        className='flex flex-col justify-center items-center font-extrabold text-2xl'
        href='/dashboard'>
        <Image
          className='pb-2'
          src={logo}
          alt={}
          width={100}
          height={100}
        />
        {}
      </Link>
    </li>
    ) : ()}
  )
}

export default LandingButton