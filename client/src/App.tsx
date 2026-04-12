import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './layouts/LandingPage';
import Login from './layouts/Login';
import Signup from './layouts/Signup';
import PlayMode from './layouts/PlayMode';
import SinglePlayer from './layouts/SinglePlayer';
import './App.css';
import FaqPage from './layouts/FaqPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playmode" element={<PlayMode />} />
        <Route path="/singleplayer" element={<SinglePlayer />} />
        <Route path="/Faqs" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;