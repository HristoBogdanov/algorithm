import { Link } from "react-router-dom";

export default function ContactsList() {
  return (
    <div className="w-full flex flex-col gap-10 lg:gap-20">
      <div className="flex flex-col w-full gap-10 text-[18px] lg:text-[22px] lg:leading-[35px]">
        <p className="font-bold">Производствена база и магазин:</p>
        <ul className="w-full flex flex-col gap-4 lg:pb-8">
          <li className="hover:text-customGreen transition-all duration-300">
            <Link to="tel: 02 / 123 456" target="_blank">
              Тел. 02 / 123 456
            </Link>
          </li>
          <li className="hover:text-customGreen transition-all duration-300">
            <Link to="tel: 02 / 123 456" target="_blank">
              Факс: 02 / 123 456
            </Link>
          </li>
          <li className="hover:text-customGreen transition-all duration-300">
            <Link to="mailto: offfice@forthepeople.bg" target="_blank">
              е-mail: offfice@forthepeople.bg
            </Link>
          </li>
          <li className="hover:text-customGreen transition-all duration-300">
            <Link
              to="https://www.google.com/maps/place/%D0%B6.%D0%BA.+%D0%9B%D0%BE%D0%B7%D0%B5%D0%BD%D0%B5%D1%86,+%D0%B1%D1%83%D0%BB.+%E2%80%9E%D0%A7%D0%B5%D1%80%D0%BD%D0%B8+%D0%B2%D1%80%D1%8A%D1%85%E2%80%9C+1,+1421+%D0%A1%D0%BE%D1%84%D0%B8%D1%8F/@42.681869,23.3192272,17z/data=!3m1!4b1!4m6!3m5!1s0x40aa85060410735b:0x50c52110b11a5266!8m2!3d42.6818651!4d23.3218021!16s%2Fg%2F11c3q39r86?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Адрес: Черни Връх 1
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-fit p-2 bg-white rounded-md">
        <img src="/Contact-us.png" className="w-full md:w-[660px]"></img>
      </div>
    </div>
  );
}
