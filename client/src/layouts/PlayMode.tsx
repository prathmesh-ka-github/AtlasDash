import Navbar from '../components/Navbar';

export default function PlayMode() {
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

          <div className="flex-1 flex items-center justify-center gap-48">

            <button
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={() => console.log('Solo clicked')}
            >
              <img
                src="/assets/solo.svg"
                alt="Solo"
                className="w-20 h-20 transition-transform duration-200 group-hover:scale-110"
              />
              <span
                className="text-2xl font-semibold text-gray-900"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Solo
              </span>
            </button>

            <button
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={() => console.log('Multiplayer clicked')}
            >
              <img
                src="/assets/group.svg"
                alt="Multiplayer"
                className="w-28 h-28 transition-transform duration-200 group-hover:scale-110"
              />
              <span
                className="text-2xl font-semibold text-gray-900"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                Multiplayer
              </span>
            </button>

          </div>

          <div className="pb-8">
            <p
              className="text-sm text-gray-900"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              Select which game mode would you like to play
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
