import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "../utils/submitFormData";
import { Emailcon } from "./EmailIcon";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  firstName: z.string().min(3, "Въведете име"),
  lastName: z.string(),
  email: z.string().email("Въведете валиден имейл адрес"),
  phone: z.string(),
  theme: z.string(),
  question: z.string(),
});

type ContactFormInputs = z.infer<typeof schema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      await submitContactForm(data);
      reset();
      navigate("/successfully-sent");
    } catch {
      alert("Грешка при изпращане на заявката. Моля, опитайте отново.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-12 text-[18px] lg:text-[22px] lg:leading-[35px]"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-full relative">
          <input
            type="text"
            {...register("firstName")}
            placeholder="Име"
            className="w-full p-4 border-2 border-borderColor text-black h-[66px] placeholder:text-black"
          />
          <div className="absolute top-1 right-3">*</div>
          {errors.firstName && (
            <p className="text-red-800">{errors.firstName.message}</p>
          )}
        </div>

        <input
          type="text"
          {...register("lastName")}
          placeholder="Фамилия"
          className="w-full p-4 border-2 border-borderColor text-black h-[66px] placeholder:text-black"
        />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="w-full relative">
          <input
            type="text"
            {...register("email")}
            placeholder="Е-маил"
            className="w-full p-4 border-2 border-borderColor text-black h-[66px] placeholder:text-black"
          />
          <div className="absolute top-1 right-3">*</div>
          {errors.email && (
            <p className="text-red-800">{errors.email.message}</p>
          )}
        </div>

        <input
          type="text"
          {...register("phone")}
          placeholder="Телефон"
          className="w-full p-4 border-2 border-borderColor text-black h-[66px] placeholder:text-black"
        />
      </div>

      <input
        type="text"
        {...register("theme")}
        placeholder="Тема"
        className="w-full p-4 border-2 border-borderColor text-black h-[66px] placeholder:text-black"
      />

      <textarea
        {...register("question")}
        rows={5}
        placeholder="Запитване"
        className="w-full p-4 border-2 border-borderColor text-black h-[282px] placeholder:text-black"
      />

      <button
        className="flex font-semibold gap-2 p-4 items-center justify-around w-[259px] h-[66px] border-2 bg-[#2f2f2f] text-white border-[#2f2f2f] hover:text-customGreen hover:border-customGreen transition-all duration-500"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "изпращане..." : "изпрати"}
        <Emailcon />
      </button>
    </form>
  );
};

export default ContactForm;
