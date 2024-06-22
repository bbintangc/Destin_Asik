import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import element1 from "../../assets/Layer1.svg";
import element2 from "../../assets/Layer2.svg";
import logo from "../../assets/Logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Auth = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      if (response.data.role === "user") {
        navigate("/Landingpage");
      } else if (response.data.role === "admin") {
        navigate("/Admin");
      } else {
        Swal.fire({
          icon: "success",
          title: "Login Berhasil!",
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          Swal.close();
        }, 2000);
      }

      sessionStorage.setItem("user", response.data.uuid)
    } catch (error) {
      console.error("Error during login:", error);

      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: "Terjadi kesalahan",
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img className="w-1/3 absolute top-0 right-0" src={element1} alt="" />
      <img className="absolute w-28 top-2 left-5" src={logo} alt="" />
      <img className="w-1/3 absolute bottom-0 right-0" src={element2} alt="" />

      <div className="flex gap-x-80 items-center">
        <div className="w-96">
          <h1 className="text-[#3c87ca] font-body text-center font-bold text-3xl">
            Login
          </h1>
          <p className="text-black font-body text-center font-normal">
            <br />
            Masukkan email dan password untuk autentikasi
          </p>
          <form onSubmit={Auth}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mt-5 mb-2 font-body font-normal text-black"
              >
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email"
                className="w-full p-3  border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
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
                className="w-full p-3  border border-slate-300 rounded-2xl text-md shadow-md placeholder-slate-400
                focus:outline-none focus:border-[#3c87ca] focus:ring-1 focus:ring-[#3c87ca]"
              />
            </div>
            <a
              href="/Lupa"
              className="font-body py-2 text-[#3c87ca] float-right"
            >
              Lupa Password?
            </a>
            <button
              type="submit"
              className="w-full p-3 font-body my-3 bg-[#3c87ca] text-white font-semibold rounded-full hover:bg-sky-800"
            >
              Masuk
            </button>
            <p className="font-body text-black text-center pt-3">
              Belum punya akun?
              <a href="/Daftar" className="text-[#3c87ca]">
                {" "}
                Buat akun
              </a>
            </p>
          </form>
        </div>
        <div>
          <h1 className="text-[#3c87ca] font-body text-center font-bold text-5xl">
            Selamat Datang <br />
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

export default Login;
