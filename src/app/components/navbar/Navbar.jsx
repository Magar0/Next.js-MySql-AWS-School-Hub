'use client'

import { FaSearch } from "react-icons/fa";
import logo from '@/app/favicon.ico'
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {

    const pathname = usePathname()

    return (
        <>
            <nav className=''>
                <div className="navbar flex gap-5 w-screen m-auto justify-between items-center bg-slate-200 py-4 px-10 ">
                    <Link href={'/'}>
                        <img src={logo} height={45} alt='logo' />
                    </Link>
                    <Link href={'/'} className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link href={'/about'} className={`link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                    <Link href={'/products'} className={`link ${pathname === '/products' ? 'active' : ''}`}>Products</Link>

                    <form action="" className="w-1/3 flex items-center ">
                        <input type="text" placeholder="Search..." className="w-4/5 py-1 px-4 text-slate-700" />
                        <FaSearch className="search-icon ms-2" />
                    </form>


                </div>
            </nav>
        </>
    )
}

export default Navbar