import Reveal from "../components/Reveal";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <div className="pt-20 sm:pt-28">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            Get in touch
          </h1>
        </Reveal>
      </div>
      <ContactSection />
    </div>
  );
}
