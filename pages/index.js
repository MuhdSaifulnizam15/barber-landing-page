import Head from 'next/head';

import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import ContactUs from '../components/ContactUs';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Pricing from '../components/Pricing';

export default function Home() {
  return (
    <div className="py-1">
      <Head>
        <title>Rolex Barbershop</title>
        <meta name="description" content="Rolex Barbershop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactUs />
      </main>

      <Footer />
    </div>
  );
}
