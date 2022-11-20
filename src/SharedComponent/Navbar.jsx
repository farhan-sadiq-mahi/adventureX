import React from 'react';
import logo from '../../img/logo.png'
import './Navbar.css'
import { FaUserCircle } from 'react-icons/fa'
const Navbar = () => {
    const navItems = ["OUR COMPETITORS", "FOR PROFESSIONALS", "CONTACT"]
    return (
        <header className="p-4">
            <div className="container flex justify-between h-16 mx-auto">
                <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                    <img src={logo} className='w-24' alt="" />
                </a>
                <ul className="items-stretch hidden space-x-3 md:flex" id='navbarText'>

                    {
                        navItems.map((item, i) =>
                            <li key={i} className="flex">
                                <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">{item}</a>
                            </li>)
                    }

                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1">|</a>
                    </li>
                    <li className="flex">
                        <a rel="noopener noreferrer" href="#" className="text-red-600 text-lg flex items-center px-4 -mb-1"><FaUserCircle /> </a>
                    </li>
                </ul>
                <button className="flex justify-end p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;