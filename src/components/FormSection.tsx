import RevealDivRightToLeft from "./animations/RightToLeftTransition";
import ContactForm from "./ContactForm";

export default function FormSection() {
  return (
    <RevealDivRightToLeft>
      <div className="w-full flex flex-col justify-center md:justify-between gap-10 lg:gap-20 pb-10 lg:pb-32">
        <h2 className="font-bold text-[18px] lg:text-[22px] lg:leading-[35px]">
          Изпрати запитване:
        </h2>
        <ContactForm />
      </div>
    </RevealDivRightToLeft>
  );
}
