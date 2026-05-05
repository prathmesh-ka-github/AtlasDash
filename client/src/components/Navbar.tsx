import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import EditProfile from '../layouts/EditProfile';
import SettingsModal from '../layouts/settingsModal';

interface NavbarProps {
  showIcons?: boolean;
}

export default function Navbar({ showIcons = true }: NavbarProps) {
  const navigate = useNavigate();
  const [showEditModal, setShowEditModal]         = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  const handleProfileClick = () => {
    const token = Cookies.get('authtoken');
    if (token) {
      navigate('/ProfilePage');
    } else {
      navigate('/login');
    }
  };

  return (
    <>
      <nav className="relative">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 cursor-pointer select-none fixed top-2 left-2 z-50"
        >
          <img src="/assets/appicon.png" alt="AtlasDash" className="w-9 h-9" />
          <span className="text-2xl text-gray-800 font-Ceviche">AtlasDash</span>
        </button>

        {showIcons && (
          <div className="flex flex-col items-center gap-3 fixed pt-1 top-2 right-2 z-50">
            <button
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              title="Profile"
              onClick={handleProfileClick}
            >
              <img src="/assets/icon-profile.png" alt="Profile" className="w-12 h-12" />
            </button>

            {/* Settings — opens SettingsModal */}
            <button
              className="w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              title="Settings"
              onClick={() => setShowSettingsModal(true)}
            >
              <img src="/assets/icon-settings.png" alt="Settings" className="w-6 h-6" />
            </button>

            <button
              className="w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              title="Info"
              onClick={() => navigate('/game-info')}
            >
              <img src="/assets/icon-info.png" alt="Info" className="w-6 h-6" />
            </button>

            {/* Edit Profile */}
            <button
              className="w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              title="Edit Profile"
              onClick={() => setShowEditModal(true)}
            >
              <img src="/assets/icon-edit.svg" alt="Edit Profile" className="w-5 h-5" />
            </button>

            <button
              className="w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              title="Exit"
              onClick={() => {
                Cookies.remove('authtoken');
                navigate('/login');
              }}
            >
              <img src="/assets/icon-exit.png" alt="Exit" className="w-5 h-5" />
            </button>
          </div>
        )}
      </nav>

      {/* ── Edit Profile Modal ── */}
      {showEditModal && (
        <div
          className="edit-modal-overlay"
          onClick={() => setShowEditModal(false)}
        >
          <div
            className="edit-modal-container"
            onClick={e => e.stopPropagation()}
          >
            <EditProfile onClose={() => setShowEditModal(false)} isModal />
          </div>
        </div>
      )}

      {/* ── Settings Modal ── */}
      {showSettingsModal && (
        <SettingsModal onClose={() => setShowSettingsModal(false)} />
      )}
    </>
  );
}