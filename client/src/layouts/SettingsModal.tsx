import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface SettingsModalProps {
  onClose: () => void;
}

export default function SettingsModal({ onClose }: SettingsModalProps) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
    if (saved) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleDarkModeToggle = () => {
    const newVal = !darkMode;
    setDarkMode(newVal);
    localStorage.setItem('darkMode', String(newVal));
    if (newVal) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleDeleteAccount = () => {
    // TODO: Call delete account API when endpoint is ready
    Cookies.remove('authtoken');
    navigate('/login');
  };

  return (
    <div
      className="fixed inset-0 bg-black/45 backdrop-blur-sm flex items-center justify-center z-[999]"
      onClick={onClose}
    >
      {/* ── Container — increased size ── */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-6 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >

        {/* ── Header ── */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Settings</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-800 transition-colors text-lg"
          >
            ✕
          </button>
        </div>

        <div className="px-8 py-6 flex flex-col gap-8">

          {/* ── Appearance ── */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Appearance
            </p>
            <div className="flex items-center justify-between py-4 px-5 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-gray-800">Dark Mode</p>
                <p className="text-xs text-gray-500">Switch between light and dark theme</p>
              </div>

              {/* Toggle — ON/OFF label outside, color changes */}
              <div className="flex items-center gap-3">
                <span
                  className={`text-sm font-bold w-8 text-right transition-colors duration-200 ${
                    darkMode ? 'text-blue-500' : 'text-gray-400'
                  }`}
                >
                  {darkMode ? 'ON' : 'OFF'}
                </span>
                <button
                  onClick={handleDarkModeToggle}
                  className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none ${
                    darkMode ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
                      darkMode ? 'translate-x-7' : 'translate-x-0.5'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* ── Danger Zone ── */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold text-red-400 uppercase tracking-wider">
              Danger Zone
            </p>
            <div className="flex flex-col gap-3 py-4 px-5 border border-red-100 rounded-xl bg-red-50">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-semibold text-gray-800">Delete Account</p>
                  <p className="text-xs text-gray-500">
                    Permanently delete your account and all data
                  </p>
                </div>
                {!confirmDelete ? (
                  <button
                    onClick={() => setConfirmDelete(true)}
                    className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg transition-colors shrink-0"
                  >
                    Delete
                  </button>
                ) : (
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setConfirmDelete(false)}
                      className="px-4 py-2 border border-gray-300 text-gray-600 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleDeleteAccount}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </div>
              {confirmDelete && (
                <p className="text-xs text-red-500 font-medium">
                  ⚠️ Are you sure? This action cannot be undone.
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}