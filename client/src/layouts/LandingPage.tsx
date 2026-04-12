import Navbar from '../components/Navbar';
import MainSection from '../components/Mainsection';
import KnowMore from '../components/Knowmore';
import FAQs from '../components/Faqs';
import Footer from '../components/Footer';
import { io } from "socket.io-client"

export default function LandingPage() {
  // const server = import.meta.env.VITE_SERVER_URL;
  // const socket = io(server)
  // socket.on('connect',()=> {
  //   console.log(`You connected to the socket!!! ${socket.id}`)
  // })

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