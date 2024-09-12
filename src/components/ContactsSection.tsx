import ContactsList from "./ContactsList";
import FormSection from "./FormSection";

export default function ContactsSection() {
  return (
    <div className="container overflow-x-hidden mx-auto flex flex-col gap-10 2xl:gap-0 lg:flex-row justify-center lg:justify-between max-sm:px-6 pb-10">
      <ContactsList />
      <FormSection />
    </div>
  );
}
