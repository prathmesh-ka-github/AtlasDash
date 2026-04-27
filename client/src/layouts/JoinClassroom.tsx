import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';

export default function JoinClassroom() {
  const navigate = useNavigate();
  const [classId, setClassId] = useState('');
  const [password, setPassword] = useState('');

  const [classIdError, setClassIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateClassId = () => {
    if (!classId.trim()) {
      setClassIdError('Class ID is required.');
    } else if (classId.trim().length < 3) {
      setClassIdError('Class ID must be at least 3 characters.');
    } else if (/\s/.test(classId)) {
      setClassIdError('Class ID cannot contain spaces.');
    } else {
      setClassIdError('');
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required.');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters.');
    } else {
      setPasswordError('');
    }
  };

  const validateAll = (): boolean => {
    validateClassId();
    validatePassword();
    return (
      classId.trim().length >= 3 &&
      !(/\s/.test(classId)) &&
      password.length >= 6
    );
  };

  const handleJoin = () => {
    if (!validateAll()) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    // API call
    navigate('/classroom', {
      state: {
        classroomName: `${classId}`,
        totalTeams: 6, //placeholder
        classroomID: classId,
      },
    });

    toast.success('Joined classroom successfully!');
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

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">

          <h2
            className="text-4xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: '"Baloo Bhai 2", cursive' }}
          >
            Join a Classroom
          </h2>

          <div className="w-80 flex flex-col gap-1">
            <input
              type="text"
              placeholder="Class ID"
              value={classId}
              onBlur={validateClassId}
              onChange={(e) => {
                setClassId(e.target.value);
                if (classIdError) setClassIdError('');
              }}
              className="w-full px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
              style={{
                backgroundColor: '#EAF4FF',
                border: classIdError ? '1.5px solid #ef4444' : '1.5px solid #B8D9F5',
                fontFamily: '"Inter", sans-serif',
              }}
            />
            {classIdError && (
              <p className="text-xs text-red-500 pl-4 font-Changa">{classIdError}</p>
            )}
          </div>

          <div className="w-80 flex flex-col gap-1">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onBlur={validatePassword}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError('');
              }}
              className="w-full px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
              style={{
                backgroundColor: '#EAF4FF',
                border: passwordError ? '1.5px solid #ef4444' : '1.5px solid #B8D9F5',
                fontFamily: '"Inter", sans-serif',
              }}
            />
            {passwordError && (
              <p className="text-xs text-red-500 pl-4 font-Changa">{passwordError}</p>
            )}
          </div>

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