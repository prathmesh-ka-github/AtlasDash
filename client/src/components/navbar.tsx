export default function Navbar() {
  return (
    <nav className="w-full flex items-start justify-between px-6 py-4 bg-white">

      <div className="flex items-center gap-2 cursor-pointer select-none">
        <img src="/assets/appicon.png" alt="AtlasDash" className="w-15 h-15" />
        <span
          className="text-2xl text-gray-800"
          style={{
            fontFamily: '"Bangers", cursive',
            letterSpacing: '0.05em',
            fontStyle: 'italic',
          }}
        >
        </span>
      </div>

      <div className="flex flex-col items-center gap-3 pt-1">

        <button
          className=" flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          title="Profile"
        >
          <img src="/assets/icon-profile.png" alt="Profile" className="w-15 h-15" />
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
          <img src="/assets/icon-exit.png" alt="Exit" className="w-6 h-6" />
        </button>

      </div>
    </nav>
  );
}