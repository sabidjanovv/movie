import React, { useState } from "react";
import header1 from "@/assets/images/header1.png";
import header2 from "@/assets/images/header2.png";
import header3 from "@/assets/images/header3.png";
import header4 from "@/assets/images/header4.png";
import logo from "@/assets/images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menyuni ochish yoki yopish
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
        </div>

        {/* Hamburger menu */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-white"
            onClick={toggleMenu} // Menyuni ochish yoki yopish
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav
          className={`${
            isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"
          } lg:flex items-center space-x-8 text-lg transition-all duration-300 fixed top-0 right-0 h-full bg-black lg:bg-transparent lg:flex-row lg:h-auto lg:static lg:w-auto w-64`}
        >
          <a
            href="/"
            className="flex items-center space-x-2 text-white group hover:text-red-500"
          >
            <img
              src={header1}
              alt="Header Icon 1"
              className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:sepia group-hover:invert group-hover:saturate-[500%] group-hover:hue-rotate-[0deg]"
            />
            <span className="group-hover:text-red-500">Афиша</span>
          </a>
          <a
            href="/"
            className="flex items-center space-x-2 text-white group hover:text-red-500"
          >
            <img
              src={header2}
              alt="Header Icon 2"
              className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:sepia group-hover:invert group-hover:saturate-[500%] group-hover:hue-rotate-[0deg]"
            />
            <span className="group-hover:text-red-500">Сеансы</span>
          </a>
          <a
            href="/"
            className="flex items-center space-x-2 text-white group hover:text-red-500"
          >
            <img
              src={header3}
              alt="Header Icon 3"
              className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:sepia group-hover:invert group-hover:saturate-[500%] group-hover:hue-rotate-[0deg]"
            />
            <span className="group-hover:text-red-500">Билеты</span>
          </a>
          <a
            href="/"
            className="flex items-center space-x-2 text-white group hover:text-red-500"
          >
            <img
              src={header4}
              alt="Header Icon 4"
              className="w-6 h-6 transition-all duration-300 group-hover:brightness-0 group-hover:sepia group-hover:invert group-hover:saturate-[500%] group-hover:hue-rotate-[0deg]"
            />
            <span className="group-hover:text-red-500">Поиск</span>
          </a>
        </nav>

        {/* Select and Button */}
        <div className="flex items-center space-x-6">
          <div>
            <select
              className="bg-black text-white border border-gray-500 rounded px-2 py-1 focus:outline-none"
              defaultValue="ru"
            >
              <option value="ru">Рус</option>
              <option value="en">Eng</option>
            </select>
          </div>

          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-500">
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
