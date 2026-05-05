import { useNavigate } from 'react-router-dom';

const cards = [
  {
    title: 'Objective',
    description: (
      <>
        <span className="font-semibold">AtlasDash</span> is a fast-paced, browser-based geography game.
        Your mission is simple — identify as many countries as possible before the timer runs out.
      </>
    ),
  },
  {
    title: 'How to play',
    description: (
      <>
        Identify the correct country on the world map based on the name shown.
        Answer as many countries as you can within the <span className="font-semibold">60-second</span> time limit.
        Maximize your score and climb leaderboards!
      </>
    ),
  },
  {
    title: 'Points',
    description: (
      <>
        You gain <span className="font-semibold">+5 points</span> for a correct answer and lose
        <span className="font-semibold"> -1 point</span> for a wrong click.
        In multiplayer, scores are combined into a team score.
      </>
    ),
  },
];

export default function KnowMore() {
  const navigate = useNavigate();   

  return (
    <section className="w-full bg-white px-6 pb-40">

      {/* TITLE */}
      <h2
        className="text-center text-3xl font-bold text-gray-900 mb-4"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        About the Game
      </h2>

      {/* CLICK TO KNOW MORE — styled as a link, not a button */}
      <div className="text-center mt-3 mb-10">
      <span
        onClick={() => navigate('/game-info')}
        className="inline-block text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
      Click to Know More
      </span>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-3 gap-16 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl px-8 py-10 text-center
                       transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
            style={{ backgroundColor: '#CEFF9C' }}
          >
            <h3
              className="text-lg font-bold text-black"
              style={{
                marginBottom: '20px',
                fontFamily: '"Inter", sans-serif'
              }}
            >
              {card.title}
            </h3>

            <p
              className="text-sm text-gray-800 leading-7"
              style={{
                textAlign: 'justify',
                fontFamily: '"Inter", sans-serif'
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}