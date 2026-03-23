import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  showIcons?: boolean;
}

export default function Navbar({ showIcons = true }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav className="w-full flex items-start justify-between px-6 py-4 bg-white">

      <div className="flex items-center gap-2 cursor-pointer select-none">
        <img src="/assets/appicon.png" alt="AtlasDash" className="w-9 h-9" />
        <span
          className="text-2xl text-gray-800"
          style={{
            fontFamily: '"Ceviche One", cursive',
            letterSpacing: '0.05em',
          }}
        >
        </span>
      </div>

      {showIcons && (
        <div className="flex flex-col items-center gap-3 pt-1">

          <button
            className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            title="Profile"
            onClick={() => navigate('/Login')}
          >
            <img src="/assets/icon-profile.png" alt="Profile" className="w-12 h-12" />
          </button>

          <button
            className="w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            title="Settings"
          >
            <img src="/assets/icon-settings.png" alt="Settings" className="w-6 h-6" />
          </button>

          <button
            className="w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            title="Info"
          >
            <img src="/assets/icon-info.png" alt="Info" className="w-6 h-6" />
          </button>

          <button
            className="w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
            title="Exit"
          >
            <img src="/assets/icon-exit.png" alt="Exit" className="w-5 h-5" />
          </button>

        </div>
      )}
    </nav>
  );
}