import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/Logo.png";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

const Navbar2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    // Assuming you are using localStorage to store the token
    localStorage.removeItem("Authorization");

    // Redirect to the login page
    navigate("/Login");
  };

  const menuItems = [
    { path: '/Profil', icon: <FaRegUser />, label: 'Profil' },
    { path: '/Like', icon: <GrFavorite />, label: 'Suka' },
    { path: '/Transaksi', icon: <GrHistory />, label: 'Transaksi' },
    { path: '/', icon: <BiLogOut />, label: 'Keluar', onClick: handleLogout },
  ];

  const navigationItems = [
    { path: '/Landingpage', label: 'Beranda' },
    { path: '/kontak', label: 'Kontak' },
    { path: '/about', label: 'Tentang Kami' },
    { path: '/PaketWisata', label: 'Paket Wisata' },
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
              <div
                key={index}
                onClick={menuItem.onClick || (() => {})}
              >
                <Link to={menuItem.path}>
                  <div className={`w-52 mb-2 flex rounded-md py-2 px-5 ${location.pathname === menuItem.path ? 'bg-[#3c87ca] text-white' : 'bg-transparent hover:bg-[#3c87ca] hover:text-white'}`}>
                    <p className={`flex gap-4 text-base font-body font-bold justify-center items-center ${location.pathname === menuItem.path ? 'text-white' : 'text-black'}`}>
                      {menuItem.icon}
                      {menuItem.label}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-grow justify-end items-center gap-6 pr-10'>
          {navigationItems.map((navItem, index) => (
            <Link to={navItem.path} key={index} className={`font-body ${location.pathname === navItem.path ? 'text-[#3c87ca]' : 'text-black'} hover:text-[#3c87ca]`}>
              {navItem.label}
            </Link>
          ))}
          <Link to="/profil" className='text-4xl hover:text-[#3c87ca]'><FaRegUserCircle /></Link>
        </div>
      </div>

      
      <div className='ml-60 mt-20'>
        {/* Content */}
      </div>
    </>
  );
}

export default Navbar2;
