import ContactsList from "./ContactsList";

export default function ContactsSection() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between max-sm:px-6 xl:px-20 bg-customGray">
      <ContactsList />
    </div>
  );
}
