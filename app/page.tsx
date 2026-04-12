import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyGermany from './components/WhyGermany';
import WebinarModules from './components/WebinarModules';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <HeroSection />
      <WhyGermany />
      <WebinarModules />
      <Footer />
    </PageWrapper>
  );
}
