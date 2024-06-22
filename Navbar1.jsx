import React from 'react'
import logo from "../assets/Logo.png";
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Beranda' },
    { path: '/kontak', label: 'Kontak' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/daftar', label: 'Paket Wisata' },
  ];
  return (
    <>
    <nav  className= 'h-20 flex bg-white shadow-[0px_4px_4px_#3a86d4]' >
        <div className='flex pl-10 items-center'>
          <img className='w-20 h-20 ' src={logo} alt="" />
        </div>
        <div className='flex flex-grow justify-end items-center gap-6 pr-10'>
          {navigationItems.map((navItem, index) => (
            <Link to={navItem.path} key={index} className={`font-body ${location.pathname === navItem.path ? 'text-[#3c87ca]' : 'text-black'} hover:text-[#3c87ca]`}>
              {navItem.label}
            </Link>
          ))}
          <button className=' font-body border-solid border-2 border-sky-500 px-4 rounded-2xl text-sky-500 font-bold hover:bg-sky-500 hover:text-white'><a href="/daftar">Daftar</a></button>
        </div>
    </nav>
    </>
  )
}

export default Navbar