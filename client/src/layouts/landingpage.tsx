import Navbar from '../components/navbar';
import MainSection from '../components/mainsection';
import KnowMore from '../components/knowmore';
import FAQs from '../components/faqs';
import Footer from '../components/footer';

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