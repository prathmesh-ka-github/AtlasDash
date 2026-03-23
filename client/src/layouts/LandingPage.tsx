import Navbar from '../components/Navbar';
import MainSection from '../components/Mainsection';
import KnowMore from '../components/Knowmore';
import FAQs from '../components/Faqs';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      <MainSection />
      <KnowMore />
      <FAQs />
      <Footer />
    </div>
  );
}