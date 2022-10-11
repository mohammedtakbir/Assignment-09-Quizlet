import React from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=' bg-[#f1f5f6]'>
            <nav className='md:container mx-auto py-5 flex justify-between items-center relative'>
                <p className='md:text-4xl text-3xl font-semibold md:pl-0 pl-3'>
                    <Link to='/' className='text-teal-400'>Quizlet</Link>
                </p>
                <ul className={`md:flex md:justify-end md:static absolute duration-300 bg-[#f1f5f6] w-full text-center z-10 ${open ? 'top-14' : 'top-[-200px]'}`}>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink className='lg:text-2xl md:text-xl text-lg font-medium text-teal-500' to='/home'>Home</NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-4'>
                        <NavLink className='lg:text-2xl md:text-xl text-lg font-medium text-teal-500' to='/statistics'>Statistics</NavLink>
                    </li>
                    <li className='md:ml-10 md:mb-0 mb-5'>
                        <NavLink className='lg:text-2xl md:text-xl text-lg font-medium text-teal-500' to='/blog'>Blog</NavLink>
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