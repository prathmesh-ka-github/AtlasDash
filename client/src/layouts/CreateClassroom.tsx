import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function CreateClassroom() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [teams, setTeams] = useState(10);

  const handleCreate = () => {
    console.log('Create classroom clicked', { name, password, confirmPassword, teams });
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
            className="text-4xl font-bold text-gray-900 mb-1"
            style={{ fontFamily: '"Baloo Bhai 2", cursive' }}
          >
            Create a classroom
          </h2>

          <p
            className="text-xs text-gray-500 mb-2 font-Changa"
          >
            Your ClassroomID will be auto generated
          </p>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          <div className="w-80 flex items-center justify-center gap-3">
            <span
              className="text-sm text-gray-700 font-medium font-Changa"
            >
              Total Number of teams -
            </span>
            <input
              type="number"
              value={teams}
              min={2}
              max={50}
              onChange={(e) => setTeams(Number(e.target.value))}
              className="w-16 px-3 py-1.5 rounded-lg outline-none text-gray-700 text-sm text-center"
              style={{
                backgroundColor: '#EAF4FF',
                border: '1.5px solid #B8D9F5',
              }}
            />
          </div>

          <p className="text-xs font-Changa">
            <span
              className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              onClick={() => navigate('/join-classroom')}
            >
              Want to join a classroom instead?
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