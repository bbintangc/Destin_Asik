import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/Logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

import { FaHome } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineTour } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const NavbarAdmin = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/Admin', icon: <FaHome />, label: 'Dashboard' },
    { path: '/Destinasi', icon: <IoLocation />, label: 'Destinasi' },
    { path: '/DataPaketWisata', icon: <MdOutlineTour />, label: 'Paket Wisata' },
    { path: '/DataPenggunaWisata', icon: <FaUser />, label: 'Pengguna' },
    { path: '/DataTransaksi', icon: <FaHistory />, label: 'Transaksi' },
    { path: '/DataKontak', icon: <MdOutlineMailOutline />, label: 'Pesan Kontak' },
    { path: '/', icon: <BiLogOut />, label: 'Keluar' },
  ];

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-20 flex bg-white z-[1000]'>
        <div className='w-60 h-screen bg-white'>
          <div className='pl-10 items-center'>
            <img className='w-20 h-20' src={logo} alt="" />
          </div>
          <div className='w-full mt-10 flex flex-col items-center'>
            {menuItems.map((menuItem, index) => (
              <Link to={menuItem.path} key={index}>
                <div className={`w-52 mb-2 flex rounded-md py-2 px-5 ${location.pathname === menuItem.path ? 'bg-[#3c87ca] text-white' : 'bg-transparent hover:bg-[#3c87ca] hover:text-white'}`}>
                  <p className={`flex gap-4 text-base font-body font-bold justify-center items-center ${location.pathname === menuItem.path ? 'text-white' : 'text-black'}`}>
                    {menuItem.icon}
                    {menuItem.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className='flex flex-grow justify-end items-center gap-6 pr-10'>
        <h1 className='font-body font-bold'>Admin</h1>
          <Link to="/Admin" className='text-4xl hover:text-[#3c87ca]'><FaRegUserCircle /></Link>
        </div>
      </div>

      
      <div className='ml-60 mt-20'>
        
      </div>
    </>
  );
}

export default NavbarAdmin;
