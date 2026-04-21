import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../styles/profilepage.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


type UserProfile = {
  gender?: string;
  profileImage?: string;
  name?: string;
  username?: string;
  email?: string;
};

export default function ProfilePage() {
  const navigate = useNavigate();
  const server = import.meta.env.VITE_SERVER_URL;

  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = Cookies.get('authtoken');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        setLoading(true);
        setError('');

        const response = await fetch(`${server}/getuserdetails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `authtoken ${token}`
          }
        });
        
        const data = await response.json();

        if (!response.ok) {
          if (response.status === 401 || response.status === 403) {
            Cookies.remove('authtoken');
            navigate('/login');
            return;
          }

          setError(data?.err || 'Unable to load profile. Please try again later.');
          return;
        }

        setUser({
          gender: data.gender || 'N/A',
          profileImage: data.profileImage || '/assets/icon-profile.png',
          name: data.name
           ? `${data.name.firstname || ''} ${data.name.lastname || ''}`.trim()
           : `${data.firstname || ''} ${data.lastname || ''}`.trim() || 'N/A',
          username: data.username || 'N/A',
          email: data.email || 'N/A',
        });
      } catch (err) {
        setError('Unable to load profile. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, server]);

  const handleEdit = () => {
    console.log('Edit clicked');
  };

  if (loading) {
    return (
      <div className="auth-page profile-page auth-center-both">
        <p className="auth-helper-text">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="auth-page profile-page auth-center-both">
        <div className="auth-server-error auth-server-error-visible">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page profile-page">
      <Navbar showIcons={true} />

      <main className="profile-main">
        <section className="profile-card">
          <h1 className="auth-title profile-title">User Profile</h1>

          <div className="profile-content">
            <div className="profile-left">
              <img
                src={user?.profileImage || '/assets/icon-profile.png'}
                alt="User Profile"
                className="profile-avatar"
              />
              <p className="profile-gender">Gender - {user?.gender || 'N/A'}</p>
            </div>

            <div className="profile-right">
              <div className="profile-info-block">
                <p className="profile-label">Username</p>
                <p className="profile-value">{user?.username || 'N/A'}</p>
              </div>

              <div className="profile-info-block">
                <p className="profile-label">Name</p>
                <p className="profile-value">{user?.name || 'N/A'}</p>
              </div>

              <div className="profile-info-block">
                <p className="profile-label">Email Address</p>
                <p className="profile-value">{user?.email || 'N/A'}</p>
              </div>

              <div className="profile-info-block">
                <p className="profile-label">Password</p>
                <p className="profile-value">********</p>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="auth-submit-btn profile-edit-btn"
            onClick={handleEdit}
          >
            Edit
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}