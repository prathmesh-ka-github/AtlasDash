import { useLocation, useNavigate } from 'react-router-dom';
import {Navbar} from '../components/Navbar';

type Slot = {
  filled: boolean;
  username?: string;
};

type Team = {
  id: number;
  slots: [Slot, Slot];
};

export function ClassroomLobby() {
  const location = useLocation();
  const navigate = useNavigate();

  const { classroomName, totalTeams, classroomID } = location.state || {};

  if (!classroomName || !totalTeams || !classroomID) {
    navigate('/create-classroom');
    return null;
  }

  const teams: Team[] = Array.from({ length: totalTeams }, (_, i) => ({
    id: i + 1,
    slots: [{ filled: false }, { filled: false }],
  }));

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">

      <Navbar />

      <div className="relative flex-1 w-full flex flex-col">

        <div className="absolute inset-0 pointer-events-none">
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
        </div>

        <div className="relative z-10 flex flex-col items-center pt-4 pb-2">
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

        <div className="relative z-10 flex flex-col items-center px-8 pb-8 pt-6 overflow-y-auto flex-1">

          <h2
            className="text-4xl font-bold text-gray-900 mb-1"
            style={{ fontFamily: '"Baloo Bhai 2", cursive' }}
          >
            Classroom Name: {classroomName}
          </h2>

          <p className="text-sm text-gray-500 mb-2 font-Changa">
            Click on an empty slot to join a team
          </p>

          <div
            className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{
              backgroundColor: '#EAF4FF',
              border: '1.5px solid #B8D9F5',
              fontFamily: '"Inter", sans-serif',
              color: '#1494F3',
            }}
          >
            <span>Classroom ID:</span>
            <span className="tracking-widest font-bold">{classroomID}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
            {teams.map((team) => (
              <div key={team.id} className="flex flex-col gap-1">

                <p className="text-xs font-semibold text-gray-600 mb-1 font-Changa">
                  Team {team.id}
                </p>

                <div
                  className="flex gap-2 p-3 rounded-lg"
                  style={{
                    border: '1.5px solid #D1D5DB',
                    backgroundColor: '#FAFAFA',
                  }}
                >
                  {team.slots.map((slot, slotIndex) => (
                    <button
                      key={slotIndex}
                      className="flex-1 aspect-square flex items-center justify-center rounded-md
                                 transition-all duration-200 hover:brightness-95 active:scale-95"
                      style={{
                        border: '1.5px solid #D1D5DB',
                        backgroundColor: slot.filled ? '#EAF4FF' : '#F3F4F6',
                      }}
                      onClick={() =>
                        console.log(`Team ${team.id} slot ${slotIndex + 1} clicked`)
                      }
                      title={slot.filled ? slot.username : 'Join this slot'}
                    >
                      {slot.filled ? (
                        <img
                          src="/assets/icon-profile.png"
                          alt={slot.username}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      ) : (
                        <span
                          className="text-3xl font-light text-gray-400"
                          style={{ lineHeight: 1 }}
                        >
                          +
                        </span>
                      )}
                    </button>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}