export default function HomeBanner() {
  return (
    <div
      style={{
        backgroundImage: `url("https://server.internal.anjela.info/uploads/image_95c7461820.png")`,
      }}
      className="w-full h-[473px] bg-cover bg-left-top bg-no-repeat overflow-y-hidden"
    >
      <div className="relative flex w-full lg:w-1/2 h-full flex-col justify-center gap-10 lg:gap-20 text-white px-6 md:px-10 xl:px-20 py-7 xl:py-14">
        <h1 className="font-black text-[30px] md:text-[40px] lg:text-[50px] z-20">
          Свържете се с нас
        </h1>
        <p className="z-20 font-bold text-[18px] lg:text-[22px] lg:leading-[35px]">
          Изпратете запитване за изготвяне на проект и ценово предложение, не се
          колебайте да попитате ако имате въпроси, нашия екип е винаги отзивчив
          и любезен.
        </p>
        <div className="absolute top-0 left-0 w-full bg-black h-full opacity-50 z-10"></div>
      </div>
    </div>
  );
}
