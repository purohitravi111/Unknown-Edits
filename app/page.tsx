import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Workflow } from '../components/Workflow';
import { Team } from '../components/Team';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { ContactAndFAQ } from '../components/ContactAndFAQ';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-default)] text-[var(--primary)] font-sans antialiased overflow-x-hidden">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Workflow />
      <Team />
      <Testimonials />
      <Pricing />
      <ContactAndFAQ />
      <Footer />
    </main>
  );
}
