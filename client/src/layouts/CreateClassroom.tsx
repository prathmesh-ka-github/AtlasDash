import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {Navbar} from '../components/Navbar';

export function CreateClassroom() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [teams, setTeams] = useState(10);

  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [teamsError, setTeamsError] = useState('');

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Classroom name is required.');
    } else if (name.trim().length < 3) {
      setNameError('Name must be at least 3 characters.');
    } else {
      setNameError('');
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

  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password.');
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const validateTeams = () => {
    if (teams < 2 || teams > 10) {
      setTeamsError('Number of teams must be between 2 and 10.');
    } else {
      setTeamsError('');
    }
  };

  const validateAll = (): boolean => {
    validateName();
    validatePassword();
    validateConfirmPassword();
    validateTeams();
    return (
      name.trim().length >= 3 &&
      password.length >= 6 &&
      password === confirmPassword &&
      teams >= 2 && teams <= 10
    );
  };

  const handleCreate = () => {
    if (!validateAll()) {
      toast.error('Please fix the errors before submitting.');
      return;
    }

    // Generate a random classroom ID
    const classroomID = Math.random().toString(36).substring(2, 8).toUpperCase();

    toast.success('Classroom created successfully!');
    console.log('Create classroom clicked', { name, password, confirmPassword, teams });
    // API call

    navigate('/classroom', {
      state: {
        classroomName: name.trim(),
        totalTeams: teams,
        classroomID: classroomID,
      },
    });
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
            className="text-4xl font-bold text-gray-900 mb-1"
            style={{ fontFamily: '"Baloo Bhai 2", cursive' }}
          >
            Create a classroom
          </h2>

          <p className="text-xs text-gray-500 mb-2 font-Changa">
            Your ClassroomID will be auto generated
          </p>

          <div className="w-80 flex flex-col gap-1">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onBlur={validateName}
              onChange={(e) => {
                setName(e.target.value);
                if (nameError) setNameError('');
              }}
              className="w-full px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
              style={{
                backgroundColor: '#EAF4FF',
                border: nameError ? '1.5px solid #ef4444' : '1.5px solid #B8D9F5',
                fontFamily: '"Inter", sans-serif',
              }}
            />
            {nameError && (
              <p className="text-xs text-red-500 pl-4 font-Changa">{nameError}</p>
            )}
          </div>

          <div className="w-80 flex flex-col gap-1">
            <input
              type="password"
              placeholder="Set Password"
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

          <div className="w-80 flex flex-col gap-1">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onBlur={validateConfirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (confirmPasswordError) setConfirmPasswordError('');
              }}
              className="w-full px-5 py-3 rounded-full outline-none text-gray-700 text-sm"
              style={{
                backgroundColor: '#EAF4FF',
                border: confirmPasswordError ? '1.5px solid #ef4444' : '1.5px solid #B8D9F5',
                fontFamily: '"Inter", sans-serif',
              }}
            />
            {confirmPasswordError && (
              <p className="text-xs text-red-500 pl-4 font-Changa">{confirmPasswordError}</p>
            )}
          </div>

          <div className="w-80 flex flex-col gap-1">
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm text-gray-700 font-medium font-Changa">
                Total Number of teams -
              </span>
              <input
                type="number"
                value={teams}
                min={2}
                max={10}
                onBlur={validateTeams}
                onChange={(e) => {
                  setTeams(Number(e.target.value));
                  if (teamsError) setTeamsError('');
                }}
                className="w-16 px-3 py-1.5 rounded-lg outline-none text-gray-700 text-sm text-center"
                style={{
                  backgroundColor: '#EAF4FF',
                  border: teamsError ? '1.5px solid #ef4444' : '1.5px solid #B8D9F5',
                }}
              />
            </div>
            {teamsError && (
              <p className="text-xs text-red-500 text-center font-Changa">{teamsError}</p>
            )}
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