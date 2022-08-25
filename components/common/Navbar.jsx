import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';


const NavItem = ({href, text}) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href}> 
            <a 
             className={`${isActive
                ? 'font-semibold text-gray-800 '
                : 'font-medium text-gray-600 '} 
                "hidden md:inline-block px-5 py-2 rounded-lg   hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
              `}
            >
                <span className="capsize">{text}</span>
            </a>
        </Link>
    )
}


const Navbar = () => {    

    return (
        <nav
        className='py-4 left-0 right-0 top-0 z-[100000] transition-all duration-500  bg-transparent -top-1000 border-b border-slate-900/10 w-11/12 max-w-6xl mx-auto backdrop-blur'      
        >
            <div className=" mx-auto flex items-center justify-between">
                <ul className="font-lexend hidden xl:flex items-center space-x-6">
                    <NavItem href="/" text="Home" />
                    <NavItem href="/buy" text="Buy" />
                    <NavItem href="/rent" text="Rent" />
                </ul>
                <div className='flex gap-x-4'>
                    <Button variant='outlined' className=' border-violet-700 border-2 px-5 py-2 rounded-lg font-semibold '>Login</Button>
                    <Button variant='filled' className=' bg-violet-700 px-3 py-2 rounded-lg font-semibold'>Sign Up</Button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;