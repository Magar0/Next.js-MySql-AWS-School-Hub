'use client'

import { FaSearch } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {

    const pathname = usePathname()

    return (
        <>
            <nav className=''>
                <div className="navbar flex gap-5 w-screen m-auto justify-between items-center bg-slate-200 py-4 px-10 ">
                    <Link href={'/'}>
                        <img src='/logo.png' width={40} alt='logo' />
                    </Link>

                    <div className="flex gap-5 w-2/5">
                        <Link href={'/'} className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                        <Link href={'/addschool'} className={`link ${pathname === '/about' ? 'active' : ''}`}>Add School</Link>
                        <Link href={'/products'} className={`link ${pathname === '/products' ? 'active' : ''}`}>Products</Link>
                    </div>

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