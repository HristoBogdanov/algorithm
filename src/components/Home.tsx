import ContactsSection from "./ContactsSection";
import HomeBanner from "./HomeBanner";

export default function Home() {
  return (
    <main className="w-full overflow-y-hidden flex flex-col gap-10 lg:gap-20 pb-10">
      <HomeBanner />
      <ContactsSection />
    </main>
  );
}
