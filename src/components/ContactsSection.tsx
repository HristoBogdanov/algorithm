import ContactsList from "./ContactsList";

export default function ContactsSection() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-between max-sm:px-6 pb-10 lg:pb-32">
      <ContactsList />
    </div>
  );
}
