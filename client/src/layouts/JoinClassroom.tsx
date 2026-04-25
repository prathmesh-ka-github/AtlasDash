import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function JoinClassroom() {
  const navigate = useNavigate();
  const [classId, setClassId] = useState('');
  const [password, setPassword] = useState('');

  const handleJoin = () => {
    console.log('Join classroom clicked', { classId, password });
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">

      <Navbar />

      <div className="relative flex-1 w-full">

        <div className="relative w-full max-w-6xl mx-auto px-6">
          <img
            src="/assets/Map.png"
            alt="World map"
            className="w-full object-contain"
            style={{ opacity: 0.85 }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0) 45%)',
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

        <div className="absolute inset-0 flex flex-col items-center">

          <div className="flex flex-col items-center pt-4 pb-2">
            <h1
              className="leading-none mb-1 font-Ceviche"
              style={{
                fontSize: 'clamp(3rem, 8vw, 5rem)',
                color: '#1494F3',
              }}
            >
              AtlasDash
            </h1>
            <p
              className="text-sm font-Changa"
              style={{ color: '#1494F3' }}
            >
              Can you master the map?
            </p>
          </div>
         </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">

          <h2
            className="text-4xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: '"Baloo Bhai 2", cursive' }}
          >
            Join a Classroom
          </h2>

          <input
            type="text"
            placeholder="Class ID"
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            className="w-80 px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
            style={{
              backgroundColor: '#EAF4FF',
              border: '1.5px solid #B8D9F5',
              fontFamily: '"Inter", sans-serif',
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-80 px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
            style={{
              backgroundColor: '#EAF4FF',
              border: '1.5px solid #B8D9F5',
              fontFamily: '"Inter", sans-serif',
            }}
          />

          <p className="text-xs font-Changa">
            <span
              className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              onClick={() => navigate('/create-classroom')}
            >
              Want to create your own classroom instead?
            </span>
          </p>

          <button
            className="px-10 py-2.5 rounded-full text-white font-semibold text-base shadow-md
                       transition-all duration-200 hover:brightness-110 active:scale-95 mt-1"
            style={{
              backgroundColor: '#A2E260',
              fontFamily: '"Inter", sans-serif',
            }}
            onClick={handleJoin}
          >
            Join
          </button>

        </div>
      </div>
    </div>
  );
}