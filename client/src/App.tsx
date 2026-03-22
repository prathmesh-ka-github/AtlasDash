import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './layouts/LandingPage';
import PlayMode from './layouts/PlayMode';
import Login from './layouts/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/PlayMode" element={<PlayMode />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;