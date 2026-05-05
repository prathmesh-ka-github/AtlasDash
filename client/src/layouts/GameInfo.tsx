import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function GameInfo() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar showIcons={true} />

      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 flex flex-col gap-16">

        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          Instructions Manual
        </h1>

        {/* ── 1. Game Objectives — icon LEFT, text RIGHT ── */}
        <section className="flex flex-row items-start gap-12">
          <div className="flex flex-col items-center gap-2 w-28 shrink-0">
            <img src="/assets/icon-objectives.png" alt="Objectives" className="w-20 h-20 object-contain" />
            <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-wider">
              Game Objectives
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              AtlasDash is a fast-paced, browser-based geography game. Your mission is simple
              identify as many countries as possible before the timer runs out.
            </p>
            <ul className="flex flex-col gap-2 list-none p-0">
              <li className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm leading-relaxed">
                Identify the correct country on the world map based on the name shown on screen.
              </li>
              <li className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm leading-relaxed">
                Answer as many countries as you can within the 60-second time limit.
              </li>
              <li className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm leading-relaxed">
                Maximize your score, climb classroom leaderboards.
              </li>
            </ul>
          </div>
        </section>

        {/* ── 2. Game Rules — icon RIGHT, text LEFT ── */}
        <section className="flex flex-row-reverse items-start gap-12">
          <div className="flex flex-col items-center gap-2 w-28 shrink-0">
            <img src="/assets/icon-rules.png" alt="Rules" className="w-20 h-20 object-contain" />
            <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-wider">
              Game Rules
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              Keep these ground rules in mind before you start your dash across the atlas.
            </p>
            <ol className="list-decimal pl-5 flex flex-col gap-3">
              <li className="text-sm text-gray-700 leading-relaxed">
                <strong>Integrity &amp; Fair Play:</strong> The use of external resources,
                third-party software, or outside assistance to gain a competitive advantage
                is strictly prohibited.
              </li>
              <li className="text-sm text-gray-700 leading-relaxed">
                <strong>Time Constraints:</strong> Each session concludes precisely when the
                countdown reaches 0:00. No extensions can be granted under any circumstances.
              </li>
              <li className="text-sm text-gray-700 leading-relaxed">
                <strong>Progression Requirements:</strong> Players must successfully identify
                the currently displayed country before proceeding to the next one, skipping
                a country is not permitted.
              </li>
              <li className="text-sm text-gray-700 leading-relaxed">
                <strong>Continuous Play:</strong> To ensure a level playing field, you cannot
                pause the game. Gameplay must remain continuous until the round concludes.
              </li>
            </ol>
          </div>
        </section>

        {/* ── 3. How to Play — icon LEFT, text RIGHT ── */}
        <section className="flex flex-row items-start gap-12">
          <div className="flex flex-col items-center gap-2 w-28 shrink-0">
            <img src="/assets/icon-howtoplay.png" alt="How to Play" className="w-20 h-20 object-contain" />
            <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-wider">
              How to Play
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              Get started in seconds. Here's your step-by-step guide to playing AtlasDash.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Choose your preferred game mode: <strong>Solo</strong> or <strong>Multiplayer</strong>.
            </p>
            <div className="bg-blue-400 text-white rounded-lg p-6 text-sm leading-relaxed">
              <div className="flex gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <p className="font-bold underline">Solo mode:</p>
                  <p>
                    Select Solo to play at your own pace. Customize your experience by
                    configuring your preferences, then hit Start to jump into the game.
                  </p>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <p className="font-bold underline">Multiplayer mode:</p>
                  <p>Select Multiplayer to compete or collaborate with others. You'll have two options:</p>
                  <ul className="list-disc pl-4 flex flex-col gap-1">
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
        <section className="flex flex-row-reverse items-start gap-12">
          <div className="flex flex-col items-center gap-2 w-28 shrink-0">
            <img src="/assets/icon-points.png" alt="Points" className="w-20 h-20 object-contain" />
            <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-wider">
              Points System
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              Every second, every click matters. Understand how the scoring works to plan your strategy.
            </p>
            <div className="flex gap-4">
              <div className="flex-1 bg-blue-400 text-white rounded-lg p-4 text-center flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wider">Correct Answer</p>
                <p className="text-3xl font-extrabold">+5</p>
              </div>
              <div className="flex-1 bg-blue-200 text-gray-800 rounded-lg p-4 text-center flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wider">Wrong Answer</p>
                <p className="text-3xl font-extrabold">-1</p>
              </div>
              <div className="flex-1 bg-green-100 text-gray-800 border border-green-300 rounded-lg p-4 text-center flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wider">Time Limit</p>
                <p className="text-3xl font-extrabold">60s</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Final scores are tallied and displayed at the conclusion of each round. In multiplayer
              mode, team totals are aggregated and presented on the final results screen. High scores
              are a direct reflection of team synergy and strategic coordination.
            </p>
          </div>
        </section>

        {/* ── 5. Classroom — icon LEFT, text RIGHT ── */}
        <section className="flex flex-row items-start gap-12">
          <div className="flex flex-col items-center gap-2 w-28 shrink-0">
            <img src="/assets/icon-classroom.png" alt="Classroom" className="w-20 h-20 object-contain" />
            <p className="text-xs font-bold text-gray-500 text-center uppercase tracking-wider">
              Classroom
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-2 list-none p-0">
            <li className="bg-blue-400 text-white px-4 py-3 rounded-lg text-sm leading-relaxed list-none">
              A <strong>Classroom</strong> is a custom multiplayer room that simulates a real
              school environment. The player who creates the room becomes <strong>The Teacher</strong> -
              the admin who controls the session, while everyone who joins is a <strong>Student</strong>.
            </li>
            <li className="bg-blue-400 text-white px-4 py-3 rounded-lg text-sm leading-relaxed list-none">
              To join a session, enter the <strong>Class ID</strong> and <strong>Password</strong> provided
              by your teacher. These credentials are unique to your class and let you sync directly
              into your specific session.
            </li>
            <li className="bg-blue-400 text-white px-4 py-3 rounded-lg text-sm leading-relaxed list-none">
              Teachers have access to a <strong>live dashboard</strong> where they can monitor team scores,
              individual performance, and overall class progress in real time, making every game a
              learning opportunity.
            </li>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}