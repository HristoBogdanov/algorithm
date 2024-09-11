import { Link } from "react-router-dom";
import RevealDivBottomToTopDelay from "./animations/BottomToTopDelayTransition";

type NavbarItemProps = {
  delay: number;
  link: string;
  text: string;
};

export default function NavbarItem({ delay, link, text }: NavbarItemProps) {
  return (
    <RevealDivBottomToTopDelay delay={delay}>
      <li>
        <Link
          to={link}
          className="border-b-2 pb-2 transition-all duration-300 border-customGray hover:border-black"
        >
          {text}
        </Link>
      </li>
    </RevealDivBottomToTopDelay>
  );
}
