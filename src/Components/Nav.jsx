import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="p-4 flex items-center justify-between">
            <h1 className="font-bold text-[2em]">Hellie<span className='text-[#F25C0C]'>.</span></h1>
            <ul className='flex'>
                <li className='font-bold px-2 cursor-pointer hover:text-[#F25C0C]'>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? 'text-[#F25C0C]' : ""}
                    >
                        Home
                    </NavLink>
                </li>
                <li className='font-bold px-2 cursor-pointer hover:text-[#F25C0C]'>
                    <NavLink
                        to="/About"
                        className={({ isActive }) => isActive ? 'text-[#F25C0C]' : ""}
                    >
                        About
                    </NavLink>
                </li>
                <li className='font-bold px-2 cursor-pointer hover:text-[#F25C0C]'>
                    <NavLink
                    to="#"
                        className={({ isActive }) => isActive ? 'text-[#F25C0C]' : ""}
                    >
                        Works
                    </NavLink>
                </li>
                <li className='font-bold px-2 cursor-pointer hover:text-[#F25C0C]'>
                    <NavLink
                    to="#"
                        className={({ isActive }) => isActive ? 'text-[#F25C0C]' : ""}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;