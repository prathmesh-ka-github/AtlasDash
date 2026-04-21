import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './layouts/LandingPage';
import Login from './layouts/Login';
import Signup from './layouts/Signup';
import PlayMode from './layouts/PlayMode';
import SinglePlayer from './layouts/SinglePlayer';
import FaqPage from './layouts/FaqPage';
import ProfilePage from './layouts/ProfilePage';
import './App.css';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playmode" element={<PlayMode />} />
        <Route path="/singleplayer" element={<SinglePlayer />} />
        <Route path="/Faqs" element={<FaqPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />

      </Routes>
    </Router>
  );
}

export default App;