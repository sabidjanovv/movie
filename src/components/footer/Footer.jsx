import React from "react";
import footer1 from "@/assets/images/footer1.png";
import footer2 from "@/assets/images/footer2.png";
import footer3 from "@/assets/images/footer3.png";
import footer4 from "@/assets/images/footer4.png";
import footer5 from "@/assets/images/footer5.png";
import footer6 from "@/assets/images/footer6.png";
import footer7 from "@/assets/images/footer7.png";
import footer8 from "@/assets/images/footer8.png";
import footer10 from "@/assets/images/footer10.png";
import footer11 from "@/assets/images/footer11.png";
import footer12 from "@/assets/images/footer12.png";
import footer13 from "@/assets/images/footer13.png";
import footer14 from "@/assets/images/footer14.png";

const Footer = () => {
  return (
    <footer className="container bg-[#111111] mt-10 text-white py-8 rounded-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4">
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <div className="mb-4">
            <img src={footer1} alt="Logo" className="w-16 h-16" />
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col gap-2">
            <a href="#">
              <img src={footer2} alt="Google Play" className="h-12" />
            </a>
            <a href="#">
              <img src={footer3} alt="App Store" className="h-12" />
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-red-500 text-lg font-semibold mb-2">О нас</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <img src={footer4} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                Публичная оферта
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={footer5} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                Реклама
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={footer6} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                F.A.Q
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={footer7} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                Контакты
              </a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-red-500 text-lg font-semibold mb-2">Категории</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <img src={footer8} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                Кино
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={footer10} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                Театр
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={footer11} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                Концерты
              </a>
            </li>
            <li className="flex items-center gap-2">
              <img src={footer12} alt="Icon" className="w-5 h-5" />
              <a href="#" className="hover:text-red-500">
                Спорт
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-red-500 text-lg font-semibold mb-2">
            Связаться с нами
          </h4>
          <p className="text-red-500 font-bold mb-4">+998 (95) 897-33-38</p>
          <h4 className="text-white font-semibold mb-2">Социальные сети</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500">
              <img src={footer13} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-500">
              <img src={footer14} alt="Telegram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-red-500">
              <img src={footer12} alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
