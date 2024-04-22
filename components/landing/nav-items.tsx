'use client';

import { headerLinks } from '@/lib/constant';
import Link from 'next/link';

const NavItems = () => {
    return (
        <ul className="flex flex-col w-full items-center justify-between gap-12 md:flex-row">
        {headerLinks.map((link, index) => {
            return (
                <>
                    <li
                        key={link.route}
                        className={`flex-center p-medium-16 whitespace-nowrap transition-all ease-in-out duration-300 border-b-2 border-transparent hover:border-foreground ${index === 2 ? 'md:mx-[5%] border-none' : ''}`}
                    >
                        <Link className={`${index === 2 ? 'font-extrabold text-2xl' : 'font-semibold'}`} href={link.route}>{link.label}</Link>
                    </li>
                    {(index === 0 || index === 3) && <li className="flex-center p-medium-16">|</li>}
                </>
            )
        })}
        </ul>
    )
}

export default NavItems