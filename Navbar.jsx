import React from 'react'
import logo from "../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/Landingpage', label: 'Beranda' },
    { path: '/kontak', label: 'Kontak' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/PaketWisata', label: 'Paket Wisata' },
  ];
  return (
    <>
    <nav  className= 'h-20 w-full flex bg-white shadow-[0px_4px_4px_#3a86d4]' >
        <div className='flex pl-10 items-center'>
          <img className='w-20 h-20 ' src={logo} alt="" />
        </div>
        <div className='flex flex-grow justify-end items-center gap-6 pr-10'>
          {navigationItems.map((navItem, index) => (
            <Link to={navItem.path} key={index} className={`font-body ${location.pathname === navItem.path ? 'text-[#3c87ca]' : 'text-black'} hover:text-[#3c87ca]`}>
              {navItem.label}
            </Link>
          ))}
          <Link to="/Profil" className='text-4xl hover:text-[#3c87ca]'><FaRegUserCircle /></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar