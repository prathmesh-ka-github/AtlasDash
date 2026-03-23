import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreate = () => {
    console.log('Create clicked', { username, email, password, confirmPassword });
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">

      <Navbar showIcons={false} />

      <div className="flex flex-col items-center pt-2 pb-2">
        <h1
          className="leading-none mb-1"
          style={{
            fontFamily: '"Ceviche One", cursive',
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            letterSpacing: '0.04em',
            color: '#1494F3',
          }}
        >
          AtlasDash
        </h1>
        <p
          className="text-sm"
          style={{
            color: '#1494F3',
            fontFamily: '"Changa", sans-serif',
          }}
        >
          Can you master the map?
        </p>
      </div>

      <div className="relative flex-1 w-full">

        <div className="relative w-full max-w-6xl mx-auto px-6">
          <img
            src="/assets/Map.png"
            alt="World map"
            className="w-full object-contain"
            style={{ opacity: 0.45 }}
          />

          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 15%, rgba(255,255,255,0) 40%)',
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, transparent 35%, rgba(255,255,255,0.90) 36%)`,
              backgroundSize: '10px 10px',
            }}
          />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">

          <h2
            className="text-4xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: '"Baloo Bhai 2", cursive' }}
          >
            Create User
          </h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-80 px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
            style={{
              backgroundColor: '#EAF4FF',
              border: '1.5px solid #B8D9F5',
              fontFamily: '"Inter", sans-serif',
            }}
          />

          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-80 px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
            style={{
              backgroundColor: '#EAF4FF',
              border: '1.5px solid #B8D9F5',
              fontFamily: '"Inter", sans-serif',
            }}
          />

          <input
            type="password"
            placeholder="Set Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
            style={{
              backgroundColor: '#EAF4FF',
              border: '1.5px solid #B8D9F5',
              fontFamily: '"Inter", sans-serif',
            }}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-80 px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
            style={{
              backgroundColor: '#EAF4FF',
              border: '1.5px solid #B8D9F5',
              fontFamily: '"Inter", sans-serif',
            }}
          />

          <p
            className="text-xs"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <span className="text-gray-500">Already a User? </span>
            <span
              className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              onClick={() => navigate('/Login')}
            >
              Go to Login
            </span>
          </p>

          <button
            className="px-10 py-2.5 rounded-full text-white font-semibold text-base shadow-md
                       transition-all duration-200 hover:brightness-110 active:scale-95 mt-1"
            style={{
              backgroundColor: '#A2E260',
              fontFamily: '"Inter", sans-serif',
            }}
            onClick={handleCreate}
          >
            Create
          </button>

        </div>
      </div>
    </div>
  );
}