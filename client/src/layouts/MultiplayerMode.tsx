import {Navbar} from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export function MultiplayerMode() {
  const navigate = useNavigate();

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

          <div className="flex-1 flex items-center justify-center gap-96 text-2xl text-gray-900 font-Changa">

            <button
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={() => navigate('/create-classroom')}
            >
              <img
                src="/assets/group.svg"
                alt="Create a Classroom"
                className="w-28 h-28 transition-transform duration-200 group-hover:scale-110"
              />
              <span>Create a Classroom</span>
            </button>

            <button
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={() => navigate('/join-classroom')}
            >
              <img
                src="/assets/creategroup.svg"
                alt="Join a Classroom"
                className="w-28 h-28 transition-transform duration-200 group-hover:scale-110"
              />
              <span>Join a Classroom</span>
            </button>

          </div>

          <div className="pb-8">
            <p className="text-2xl text-gray-900 font-Changa">
              Choose one to start multiplayer
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}