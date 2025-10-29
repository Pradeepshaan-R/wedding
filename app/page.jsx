import Hero from "./components/Hero";
import Story from "./components/Story";
import Events from "./components/Events";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import WeddingTimeline from "./components/WeddingTimeline";
import ClientOnly from "./components/ClientOnly";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main className="bg-ivory text-burgundy font-playfair">
      <ClientOnly>
        <Hero />
        <Story />
        <Events />
        <WeddingTimeline />
        <RSVP />
        <Footer />
      </ClientOnly>
    </main>
  );
}
