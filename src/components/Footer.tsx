import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full bg-black h-fit xl:h-[60px] py-3 text-center px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center leading-[35.44px] text-customBrown">
      <p className="text-[15px] lg:text-[18.35px]">
        © Всички права запазени 2004-2018
      </p>
      <p className="text-[12px] lg:text-[15.8px]">
        Design and development by{" "}
        <span className="text-customGreen hover:underline pb-1 transition-all duration-300">
          <Link to="https://forthepeople.bg/" target="_blank">
            for the people creative studio
          </Link>
        </span>
      </p>
    </div>
  );
}
