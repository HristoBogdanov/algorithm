import { Link } from "react-router-dom";

export default function SuccessfullySent() {
  return (
    <div className="container min-h-screen flex flex-col justify-center items-center gap-20">
      <h1 className="font-black text-[30px] max-w-[800px] text-center">
        Вашeто запитване беше изпратено успешно! Ще се свържем с Вас при първа
        възможност.
      </h1>
      <Link
        to="/"
        className="flex font-semibold gap-2 p-4 items-center justify-around w-[259px] h-[66px] border-2 bg-[#2f2f2f] text-white border-[#2f2f2f] hover:text-[#2f2f2f] hover:bg-white transition-all duration-500"
      >
        Начало
      </Link>
    </div>
  );
}
