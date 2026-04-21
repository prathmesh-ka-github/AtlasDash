import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './layouts/LandingPage';
import Login from './layouts/Login';
import Signup from './layouts/Signup';
import PlayMode from './layouts/PlayMode';
import SinglePlayer from './layouts/SinglePlayer';
import FaqPage from './layouts/FaqPage';
import './App.css';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/playmode" element={<PlayMode />}></Route>
        <Route path="/singleplayer" element={<SinglePlayer />}></Route>
        <Route path="/Faqs" element={<FaqPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;