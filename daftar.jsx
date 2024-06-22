import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import element1 from "../../assets/Layer1.svg";
import element2 from "../../assets/Layer2.svg";
import logo from "../../assets/Logo.png";
import axios from "axios";
import Swal from "sweetalert2";

const Daftar = () => {
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [no_hp, setNo_hp] = useState("");
  const [password, setPassword] = useState("");

  const Register = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nama", nama);
      formData.append("email", email);
      formData.append("no_hp", no_hp);
      formData.append("password", password);

      await axios.post("http://localhost:5000/user", formData);
      
      Swal.fire({
        icon: "success",
        title: "Pendaftaran Berhasil!",
        showConfirmButton: false,
        timer: 2000,
      });

      setTimeout(() => {
        navigate("/Landingpage");
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error adding data:", error);

      Swal.fire({
        icon: "error",
        title: "Gagal Mendaftar!",
        text: "Terjadi kesalahan",
      });
    }
  };
 
  return (
    <div className="flex items-center justify-center relative bg-white">
      <img className="w-1/3 absolute top-0 right-0" src={element1} alt="" />
      <img className="absolute w-28 top-2 left-5" src={logo} alt="" />
      <img className="w-1/3 absolute bottom-0 right-0" src={element2} alt="" />

      <div className="flex gap-x-64 items-center">
        <div className="w-96">
          <h1 className="text-[#3c87ca] mt-32 font-body text-center font-bold text-3xl">
            Daftar Sekarang
          </h1>
          <p className="text-black font-body text-center font-normal">
            Masukkan data di bawah untuk daftar DestinAsyik
          </p>
          <form onSubmit={Register} >
            <div className="mb-4">
              <label
                htmlFor="nama"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Nama
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Masukkan Nama"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
                
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
               onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
               
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="no_hp"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Nomor Handphone
              </label>
              <input
                type="text"
                value={no_hp}
                onChange={(e) => setNo_hp(e.target.value)}
                placeholder="Masukkan Nomor"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
               
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 font-body font-normal text-black"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
            onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
               
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 font-body my-3 bg-[#3c87ca] text-white font-semibold rounded-full hover:bg-sky-800"
            >
              Daftar
            </button>
            <p className="font-body text-black text-center pt-3 mb-16">
              Sudah punya akun?
              <a href="/Login" className="text-[#3c87ca]">
                {" "}
                Masuk sekarang
              </a>
            </p>
          </form>
        </div>
        <div>
          <h1 className="text-[#3c87ca] font-body text-center font-bold text-5xl">
            Siap Menjelajah? <br />
          </h1>
          <p className="text-black font-body text-center font-semibold text-lg">
            <br />
            Bingung Mau Pergi Kemana? <br /> DestinAsyik Solusinya!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
