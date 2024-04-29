'use client';

import { headerLinks } from '@/lib/constant';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/logo.png'

const NavItems = () => {
    return (
        <ul className="flex flex-col w-full items-center justify-between gap-12 md:flex-row">
        {headerLinks.map((link, index) => {
            return (
                <>
                    <li
                        key={link.route}
                        className={`flex flex-col justify-center items-center whitespace-nowrap transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground ${index === 2 ? 'md:mx-[5%] border-none' : ''}`}
                    >
                        <Link className={`flex flex-col justify-center items-center ${index === 2 ? 'font-extrabold text-2xl' : 'font-semibold'}`} href={link.route}>
                            <Image className={`pb-2 ${index === 2 ? 'block' : 'hidden'}`} src={logo} alt={link.label} width={100} height={100} />
                            {link.label}
                        </Link>
                    </li>
                    {(index === 0 || index === 3) && <li className="flex-center p-medium-16">|</li>}
                </>
            )
        })}
        </ul>
    )
}

export default NavItems