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

// TODO: Remove hardcoded data and fetch from API when database is ready
const HARDCODED_BIO =
  'Maps, scores, and bragging rights. Lets go. Every country is a new level. Every score is a passport stamp. Still exploring!!';

const HARDCODED_CLASSROOMS = [
  { id: 1, name: 'Class A' },
  { id: 2, name: 'Class B' },
  { id: 3, name: 'Class C' },
  { id: 4, name: 'Class D' },
  { id: 5, name: 'Class E' },
];

const HARDCODED_GAME_HISTORY = [
  { score: '90', mode: 'S', team: 'Rishikesh',             date: '03/25/26' },
  { score: '95', mode: 'M', team: 'Rishikesh & Nithin',    date: '03/25/26' },
  { score: '80', mode: 'M', team: 'Rishikesh & Prathmesh', date: '03/24/26' },
  { score: '82', mode: 'S', team: 'Rishikesh',             date: '03/24/26' },
  { score: '86', mode: 'M', team: 'Rishikesh & Atharva',   date: '03/24/26' },
  { score: '92', mode: 'M', team: 'Rishikesh & ABI',       date: '03/23/26' },
  { score: '89', mode: 'M', team: 'Rishikesh & Jyotsana',  date: '03/22/26' },
];

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
            Authorization: `authtoken ${token}`,
          },
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
          // TODO: uncomment when API returns these fields
          // bio: data.bio || '',
          // classrooms: data.classrooms || [],
          // gameHistory: data.gameHistory || [],
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
      <div className="profile-page auth-center-both">
        <p className="auth-helper-text">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-page auth-center-both">
        <div className="auth-server-error auth-server-error-visible">{error}</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <Navbar showIcons={true} />

      <main className="profile-main">

        {/* ── User Hero ── */}
        <section className="profile-hero">
          <img
            src={user?.profileImage || '/assets/icon-profile.png'}
            alt="User Profile"
            className="profile-avatar"
          />
          <div className="profile-hero-info">
            <h1 className="profile-name">{user?.name || 'N/A'}</h1>
            <p className="profile-username">@{user?.username || 'N/A'}</p>
            <p className="profile-email">{user?.email || 'N/A'}</p>
          </div>
          <button
            type="button"
            className="profile-edit-btn"
            onClick={handleEdit}
          >
            Edit
          </button>
        </section>

        {/* ── Bio ── */}
        {/* TODO: Replace HARDCODED_BIO with data.bio from API */}
        <section className="profile-bio-section">
          <p className="profile-bio">{HARDCODED_BIO}</p>
        </section>

        {/* ── Classrooms ── */}
{/* TODO: Replace with data.classrooms from API */}
<section className="profile-section">
  <h2 className="profile-section-title">Classrooms</h2>
  <div className="classroom-scroll-wrap">
    <div className="classroom-cards">
      {HARDCODED_CLASSROOMS.map((c) => (
        <div key={c.id} className="classroom-card">
          <span className="classroom-card-name">{c.name}</span>
        </div>
      ))}
      <button className="classroom-card classroom-card-add" title="Create new classroom">
        <span className="classroom-card-add-icon">+</span>
        <span className="classroom-card-add-text">New</span>
      </button>
    </div>
  </div>
</section>

        {/* ── Game History ── */}
        {/* TODO: Replace HARDCODED_GAME_HISTORY with data.gameHistory from API */}
        <section className="profile-section">
          <h2 className="profile-section-title">Game History</h2>
          <div className="game-history-wrap">
            <table className="game-history-table">
              <thead>
                <tr>
                  <th>Score</th>
                  <th>Mode</th>
                  <th>Team</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {HARDCODED_GAME_HISTORY.map((game, index) => (
                  <tr key={index}>
                    <td>{game.score}</td>
                    <td>{game.mode}</td>
                    <td className="game-history-team">{game.team}</td>
                    <td>{game.date}</td>
                  </tr>
                ))}
                <tr className="game-history-empty-row">
                  <td colSpan={4}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}