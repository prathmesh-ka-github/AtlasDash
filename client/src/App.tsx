import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import LandingPage from './layouts/LandingPage';
import Login from './layouts/Login';
import Signup from './layouts/Signup';
import PlayMode from './layouts/PlayMode';
import SinglePlayer from './layouts/SinglePlayer';
import FaqPage from './layouts/FaqPage';
import ProfilePage from './layouts/ProfilePage';
import MultiplayerMode from './layouts/MultiplayerMode';
import CreateClassroom from './layouts/CreateClassroom';
import JoinClassroom from './layouts/JoinClassroom';
import './App.css';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>

      <Toaster
        position="bottom-right"
        richColors
        expand={false}
        duration={4000}
      />

      <ScrollToTop/>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playmode" element={<PlayMode />} />
        <Route path="/singleplayer" element={<SinglePlayer />} />
        <Route path="/Faqs" element={<FaqPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/multiplayer" element={<MultiplayerMode />} />
        <Route path="/create-classroom" element={<CreateClassroom />} />
        <Route path="/join-classroom" element={<JoinClassroom />} />

      </Routes>
    </Router>
  );
}

export default App;