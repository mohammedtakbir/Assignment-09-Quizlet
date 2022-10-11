import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' bg-[#ddd]'>
            <nav className='container mx-auto py-4 flex justify-between items-center'>
                <p className='text-3xl font-medium'>
                    <Link to='/'>Playbuzz</Link>
                </p>
                <ul className='md:flex'>
                    <li className='ml-10'>
                        <NavLink className='text-xl font-medium' to='/home'>Home</NavLink>
                    </li>
                    <li className='ml-10'>
                        <NavLink className='text-xl font-medium' to='/statistics'>Statistics</NavLink>
                    </li>
                    <li className='ml-10'>
                        <NavLink className='text-xl font-medium' to='/blog'>Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;