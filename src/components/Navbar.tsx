import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="w-full h-[100px] md:h-[150px] xl:h-[200px] max-sm:px-6 flex items-center justify-between container gap-20 lg:gap-0 mx-auto overflow-hidden">
      <Link to="/">
        <img
          src="/algorithm.png"
          className="w-[120px] md:w-[180px] xl:w-[203px] bg-contain"
        />
      </Link>
      <ul className="hidden md:flex w-full lg:w-[830px] h-full items-center justify-between text-[19.55px]">
        <li>
          <Link
            to="/"
            className="border-b-2 pb-2 transition-all duration-300 border-customGray hover:border-black"
          >
            Начало
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="border-b-2 pb-2 transition-all duration-300 border-customGray hover:border-black"
          >
            За нас
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="border-b-2 pb-2 transition-all duration-300 border-customGray hover:border-black"
          >
            Продукти
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="border-b-2 pb-2 transition-all duration-300 border-customGray hover:border-black"
          >
            Портфолио
          </Link>
        </li>
        <li>
          <Link to="/" className="border-b-2 pb-2 border-black">
            Контакти
          </Link>
        </li>
      </ul>
      <MobileMenu />
    </nav>
  );
}
