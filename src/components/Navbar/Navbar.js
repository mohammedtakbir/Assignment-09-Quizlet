import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=' bg-[#ddd]'>
            <nav className='md:container mx-auto py-4 flex justify-between items-center relative'>
                <p className='text-3xl font-medium md:pl-0 pl-3'>
                    <Link to='/'>Playbuzz</Link>
                </p>
                <ul className={`md:flex md:justify-end md:static absolute duration-300 bg-[#ddd] w-full text-center ${open ? 'top-14' : 'top-[-200px]'}`}>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink className='text-xl font-medium' to='/home'>Home</NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink className='text-xl font-medium' to='/statistics'>Statistics</NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-5'>
                        <NavLink className='text-xl font-medium' to='/blog'>Blog</NavLink>
                    </li>
                </ul>
                <div className='md:hidden md:pr-0 pr-3'>
                    {
                        open ? 
                        <XMarkIcon onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" /> :
                        <Bars3Icon onClick={() => setOpen(!open)} className="h-9 w-9 text-black cursor-pointer" />
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;