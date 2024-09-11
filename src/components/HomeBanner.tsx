import RevealDivBottomToTop from "./animations/BottomToTopTransition";

export default function HomeBanner() {
  return (
    <RevealDivBottomToTop>
      <div
        style={{
          backgroundImage: `url("https://server.internal.anjela.info/uploads/image_95c7461820.png")`,
        }}
        className="w-full h-[473px] bg-cover bg-center bg-no-repeat overflow-y-hidden"
      >
        <div className="relative flex w-full lg:w-1/2 h-full flex-col justify-center items-center text-white">
          <div className="w-full max-w-[600px] flex flex-col gap-10 lg:gap-20 z-20 max-xl:px-6">
            <h1 className="font-black text-[30px] md:text-[40px] lg:text-[50px]">
              Свържете се с нас
            </h1>
            <p className="font-bold text-[18px] lg:text-[22px] lg:leading-[35px]">
              Изпратете запитване за изготвяне на проект и ценово предложение,
              не се колебайте да попитате ако имате въпроси, нашия екип е винаги
              отзивчив и любезен.
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full bg-black h-full opacity-50 z-10"></div>
        </div>
      </div>
    </RevealDivBottomToTop>
  );
}
