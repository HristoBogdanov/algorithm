import Hamburger from "hamburger-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden overflow-hidden z-30">
      <Hamburger toggled={isOpen} toggle={setIsOpen} />
      <div
        className={`w-screen max-w-[250px] absolute top-[100px] md:top-[150px] right-0 bg-white bg-gradient-to-tr shadow-md from-white to-customGray p-6 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col justify-center items-end gap-6 w-full text-[15px]">
          <li>
            <Link to="/">Начало</Link>
          </li>
          <li>
            <Link to="/">За нас</Link>
          </li>
          <li>
            <Link to="/">Продукти</Link>
          </li>
          <li>
            <Link to="/">Портфолио</Link>
          </li>
          <li>
            <Link to="/" className="pb-2 border-b-2 border-black">Контакти</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
