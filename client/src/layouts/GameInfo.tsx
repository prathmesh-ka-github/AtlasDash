import '../styles/gameinfopage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GameInfo() {
  return (
    <div className="gameinfo-page">
      <Navbar showIcons={true} />

      <main className="gameinfo-main">
        <h1 className="gameinfo-title">Instructions Manual</h1>

        {/* ── 1. Game Objectives — icon LEFT, text RIGHT ── */}
        <section className="gameinfo-section">
          <div className="gameinfo-icon-block">
            <img src="/assets/icon-objectives.png" alt="Objectives" className="gameinfo-icon" />
            <p className="gameinfo-icon-label">Game Objectives</p>
          </div>
          <div className="gameinfo-content">
            <p className="gameinfo-intro">
              AtlasDash is a fast-paced, browser-based geography game. Your mission is simple 
              identify as many countries as possible before the timer runs out.
            </p>
            <ul className="gameinfo-bullets">
              <li>Identify the correct country on the world map based on the name shown on screen.</li>
              <li>Answer as many countries as you can within the 60-second time limit.</li>
              <li>Maximize your score, climb classroom leaderboards.</li>
            </ul>
          </div>
        </section>

        {/* ── 2. Game Rules — icon RIGHT, text LEFT ── */}
        <section className="gameinfo-section gameinfo-section-reverse">
          <div className="gameinfo-icon-block">
            <img src="/assets/icon-rules.png" alt="Rules" className="gameinfo-icon" />
            <p className="gameinfo-icon-label">Game Rules</p>
          </div>
          <div className="gameinfo-content">
            <p className="gameinfo-intro">
              Keep these ground rules in mind before you start your dash across the atlas.
            </p>
            <ol className="gameinfo-list">
              <li>
                <strong>Integrity &amp; Fair Play:</strong> The use of external resources,
                third-party software, or outside assistance to gain a competitive advantage
                is strictly prohibited.
              </li>
              <li>
                <strong>Time Constraints:</strong> Each session concludes precisely when the
                countdown reaches 0:00. No extensions can be granted under any circumstances.
              </li>
              <li>
                <strong>Progression Requirements:</strong> Players must successfully identify
                the currently displayed country before proceeding to the next one, skipping
                a country is not permitted.
              </li>
              <li>
                <strong>Continuous Play:</strong> To ensure a level playing field, you cannot
                pause the game. Gameplay must remain continuous until the round concludes.
              </li>
            </ol>
          </div>
        </section>

        {/* ── 3. How to Play — icon LEFT, text RIGHT ── */}
        <section className="gameinfo-section">
          <div className="gameinfo-icon-block">
            <img src="/assets/icon-howtoplay.png" alt="How to Play" className="gameinfo-icon" />
            <p className="gameinfo-icon-label">How to Play</p>
          </div>
          <div className="gameinfo-content">
            <p className="gameinfo-intro">Get started in seconds. Here's your step-by-step guide to playing AtlasDash.</p>
            <p className="gameinfo-intro">Choose your preferred game mode: <strong>Solo</strong> or <strong>Multiplayer</strong>.</p>
                <div className="gameinfo-box">
                <div className="gameinfo-mode-row">         
                <div className="gameinfo-mode-col">
                  <p className="gameinfo-mode-title">Solo mode:</p>
                  <p>
                    Select Solo to play at your own pace. Customize your experience by
                    configuring your preferences, then hit Start to jump into the game.
                  </p>
                </div>
                <div className="gameinfo-mode-col">
                  <p className="gameinfo-mode-title">Multiplayer mode:</p>
                  <p>Select Multiplayer to compete or collaborate with others. You'll have two options:</p>
                  <ul>
                    <li>
                      <strong>Create a Classroom</strong> — Set up a new session and become the host.
                      Share your unique Class ID and password with players to invite them.
                    </li>
                    <li>
                      <strong>Join a Classroom</strong> — Enter the Class ID and password provided
                      by your host to jump straight into their session.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Points System — icon RIGHT, text LEFT ── */}
        <section className="gameinfo-section gameinfo-section-reverse">
          <div className="gameinfo-icon-block">
            <img src="/assets/icon-points.png" alt="Points" className="gameinfo-icon" />
            <p className="gameinfo-icon-label">Points System</p>
          </div>
          <div className="gameinfo-content">
            <p className="gameinfo-intro">
              Every second, every click matters. Understand how the scoring works to plan your strategy.
            </p>
            <div className="gameinfo-points-row">
              <div className="gameinfo-points-card gameinfo-points-correct">
                <p className="gameinfo-points-label">Correct Answer</p>
                <p className="gameinfo-points-value">+5</p>
              </div>
              <div className="gameinfo-points-card gameinfo-points-wrong">
                <p className="gameinfo-points-label">Wrong Answer</p>
                <p className="gameinfo-points-value">-1</p>
              </div>
              <div className="gameinfo-points-card gameinfo-points-time">
                <p className="gameinfo-points-label">Time Limit</p>
                <p className="gameinfo-points-value">60s</p>
              </div>
            </div>
            <p className="gameinfo-points-note">
              Final scores are tallied and displayed at the conclusion of each round. In multiplayer
              mode, team totals are aggregated and presented on the final results screen. High scores
              are a direct reflection of team synergy and strategic coordination.
            </p>
          </div>
        </section>

        {/* ── 5. Classroom — icon LEFT, text RIGHT ── */}
        <section className="gameinfo-section">
          <div className="gameinfo-icon-block">
            <img src="/assets/icon-classroom.png" alt="Classroom" className="gameinfo-icon" />
            <p className="gameinfo-icon-label">Classroom</p>
          </div>
          <div className="gameinfo-content">
            <ul className="gameinfo-classroom-bullets">
              <li>
                A <strong>Classroom</strong> is a custom multiplayer room that simulates a real
                school environment. The player who creates the room becomes <strong>The Teacher</strong> -
                the admin who controls the session, while everyone who joins is a <strong>Student</strong>.
              </li>
              <li>
                To join a session, enter the <strong>Class ID</strong> and <strong>Password</strong> provided
                by your teacher. These credentials are unique to your class and let you sync directly
                into your specific session.
              </li>
              <li>
                Teachers have access to a <strong>live dashboard</strong> where they can monitor team scores,
                individual performance, and overall class progress in real time, making every game a
                learning opportunity.
              </li>
            </ul>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}