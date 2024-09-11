import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import RevealDivBottomToTop from "./animations/BottomToTopTransition";
import RevealDivBottomToTopDelay from "./animations/BottomToTopDelayTransition";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <RevealDivBottomToTop className="overflow-hidden">
      <nav className="w-full h-[100px] md:h-[150px] xl:h-[200px] max-sm:px-6 flex items-center justify-between container gap-20 lg:gap-0 mx-auto overflow-hidden">
        <Link to="/">
          <img
            src="/algorithm.png"
            className="w-[120px] md:w-[180px] xl:w-[203px] bg-contain"
          />
        </Link>
        <ul className="hidden md:flex w-full lg:w-[830px] h-full items-center justify-between text-[19.55px]">
          <NavbarItem delay={0.25} link="/" text="Начало" />
          <NavbarItem delay={0.5} link="/" text="За нас" />
          <NavbarItem delay={0.75} link="/" text="Портфолио" />
          <NavbarItem delay={1} link="/" text="Начало" />
          <RevealDivBottomToTopDelay delay={1.25}>
            <li>
              <Link to="/" className="border-b-2 pb-2 border-black">
                Контакти
              </Link>
            </li>
          </RevealDivBottomToTopDelay>
        </ul>
        <MobileMenu />
      </nav>
    </RevealDivBottomToTop>
  );
}
