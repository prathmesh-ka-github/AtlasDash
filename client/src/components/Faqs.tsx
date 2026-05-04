import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'How does AtlasDash work?',
    answer:
      'A country name appears on the screen and you have to find and click it on the world map as quickly as possible. You have 60 seconds to score as many points as you can.',
  },
  {
    question: 'How do I start a game?',
    answer:
      'Select which mode you want to play. Singleplayer or Multiplayer? If you select Singleplayer then the game starts instantly. If you want to play with your friends then you can choose multiplayer. Create a classroom or join one using ClassID and Password. Then you have to join a team and wait till the classroom admin starts the game!',
  },
  {
    question: 'How do I know if my answer was correct?',
    answer:
      "The map provides instant visual feedback. If you click the right location, that country will glow green. If you miss the mark, it will flash red. Simultaneously, you'll see your total points jump or dip in the score counter on the bottom left corner.",
  },
  {
    question: 'How many points do I get for a correct answer?',
    answer:
      'Precision pays off! Every time you successfully identify a country, you are awarded +5 points. The faster you click, the more points you can stack before the timer runs out.',
  },
  {
    question: 'What is a classroom?',
    answer:
      'Classroom is just like a custom room where you can play multiplayer. The classroom system is setup to simulate real world school classrooms. Where the creator of the room is called “The Teacher”, who is a admin and the players who join the classroom are Students.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-6 py-16">
      <div className="text-center mb-8">
        <h2
          className="text-3xl font-bold text-gray-900"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Frequently Asked Questions
        </h2>

        <Link
          to="/faqs"
           className="inline-block mt-3 text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          Click to know more
        </Link>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#1494F3',
              borderWidth: '2px',
            }}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left"
              style={{ fontFamily: '"Inter", sans-serif' }}
              onClick={() => handleToggle(index)}
            >
              <span className="text-base font-semibold text-gray-800">
                {faq.question}
              </span>

              <span
                className="text-2xl font-bold ml-4 shrink-0"
                style={{ color: '#000000' }}
              >
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: openIndex === index ? '260px' : '0px',
              }}
            >
              <p
                className="px-6 pb-5 text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}