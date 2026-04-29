import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../styles/editprofile.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EditProfile() {
  const navigate = useNavigate();
  const server = import.meta.env.VITE_SERVER_URL;

  const [username, setUsername]       = useState('');
  const [firstName, setFirstName]     = useState('');
  const [lastName, setLastName]       = useState('');
  const [email, setEmail]             = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword]       = useState('');
  const [gender, setGender]           = useState('');
  const [profileImage, setProfileImage] = useState('/assets/icon-profile.png');
  const [loading, setLoading]         = useState(true);
  const [saving, setSaving]           = useState(false);
  const [error, setError]             = useState('');
  const [success, setSuccess]         = useState('');

  useEffect(() => {
    const token = Cookies.get('authtoken');
    if (!token) { navigate('/login'); return; }

    fetch(`${server}/getuserdetails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `authtoken ${token}`,
      },
    })
      .then(r => r.json())
      .then(data => {
        setUsername(data.username || '');
        setFirstName(data.name?.firstname || data.firstname || '');
        setLastName(data.name?.lastname  || data.lastname  || '');
        setEmail(data.email || '');
        setGender(data.gender || '');
        setProfileImage(data.profileImage || '/assets/icon-profile.png');
      })
      .catch(() => navigate('/login'))
      .finally(() => setLoading(false));
  }, [navigate, server]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setProfileImage(reader.result as string);
    reader.readAsDataURL(file);
  };

   const handleSave = async () => {
  setSuccess('Changes saved! (API coming soon)');
  setTimeout(() => navigate('/ProfilePage'), 1000);
};

  if (loading) {
    return (
      <div className="edit-profile-page auth-center-both">
        <p className="auth-helper-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="edit-profile-page">
      <Navbar showIcons={true} />

      <main className="edit-profile-main">
        <div className="edit-profile-card">

          {/* ── Header ── */}
          <div className="edit-profile-header">
            <h1 className="edit-profile-title">Edit Your Profile</h1>
          </div>

          <div className="edit-profile-body">

            {/* ── Left: avatar + gender ── */}
            <div className="edit-profile-left">

              <div className="edit-avatar-wrap">
                <img src={profileImage} alt="Profile" className="edit-avatar-img" />
                <label className="edit-avatar-overlay" htmlFor="avatar-upload">
                  <span className="edit-avatar-icon">📷</span>
                </label>
                <input
                  type="file"
                  id="avatar-upload"
                  accept="image/*"
                  className="edit-avatar-input"
                  onChange={handleImageChange}
                />
              </div>
              <p className="edit-avatar-hint">Click photo to change</p>

              <div className="edit-gender-section">
                <p className="edit-gender-label">Gender</p>
                <div className="edit-gender-options">
                  {['male', 'female'].map(g => (
                    <label
                      key={g}
                      className={`edit-gender-option ${gender === g ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={() => setGender(g)}
                      />
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: form fields ── */}
            <div className="edit-profile-right">

              <div className="edit-field">
                <label className="edit-label">Username</label>
                <input
                  className="edit-input"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Enter username"
                />
              </div>

              <div className="edit-field-row">
                <div className="edit-field">
                  <label className="edit-label">First Name</label>
                  <input
                    className="edit-input"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="First name"
                  />
                </div>
                <div className="edit-field">
                  <label className="edit-label">Last Name</label>
                  <input
                    className="edit-input"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="edit-field">
                <label className="edit-label">Email Address</label>
                <input
                  className="edit-input"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </div>

                <div className="edit-field">
                   <label className="edit-label">Bio</label>
                   <textarea
                      className="edit-input edit-textarea"
                      value={bio}
                      onChange={e => setBio(e.target.value)}   
                      placeholder="Enter bio"
                      rows={3}
                      />
                </div>

              <div className="edit-field">
                <label className="edit-label">New Password</label>
                <input
                  className="edit-input"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Leave blank to keep current"
                />
              </div>

              {error   && <p className="edit-error">{error}</p>}
              {success && <p className="edit-success">{success}</p>}

              <button
                className="edit-save-btn"
                onClick={handleSave}
                disabled={saving}
              >
                {saving ? 'Saving…' : 'Save Changes'}
              </button>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}