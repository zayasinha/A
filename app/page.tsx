import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyGermany from './components/WhyGermany';
import FreeCallSection from './components/FreeCallSection';
import ShortTermCourses from './components/ShortTermCourses';
import WebinarModules from './components/WebinarModules';
import AboutDoctor from './components/AboutDoctor';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Navbar />
      <HeroSection />
      <WhyGermany />
      <FreeCallSection />
      <WebinarModules />
      <ShortTermCourses />
      <AboutDoctor />
      <Footer />
    </PageWrapper>
  );
}
