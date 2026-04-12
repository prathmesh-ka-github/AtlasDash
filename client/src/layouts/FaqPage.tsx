import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    question: 'How long does each round last?',
    answer:
      'Each round is a 60-second blitz. A countdown timer is displayed on the screen, and the session ends immediately when the clock reaches 00:00. There is no overtime, so every second counts.',
  },
  {
    question: "Can I skip a country I don't know?",
    answer:
      'No, skipping is not allowed. You must select an answer to move forward. Even if you are unsure, making your best guess is required to continue.',
  },
  {
    question: 'Does a new country appear automatically?',
    answer:
      'Yes. As soon as you click on the map, whether correct or incorrect, the system instantly generates a new country for you to identify.',
  },
  {
    question: 'Where does the country name appear?',
    answer:
      'The country name appears in the bottom control panel, which acts as your dashboard during the game.',
  },
  {
    question: 'Can the same country appear twice in one round?',
    answer:
      'No. Each country appears only once per round to ensure a diverse and challenging gameplay experience.',
  },
  {
    question: 'How many points do I get for a correct answer?',
    answer:
      'Each correct answer gives you +5 points. Faster responses help you accumulate more points within the time limit.',
  },
  {
    question: 'What happens if I click the wrong country?',
    answer:
      'Each incorrect click results in a -1 point penalty. Accuracy is important to maintain a high score.',
  },
  {
    question: 'Can my score go negative?',
    answer:
      'Yes. If you make more incorrect answers than correct ones, your score can drop below zero.',
  },
  {
    question: 'How do I join a classroom?',
    answer:
      'You can join a classroom by entering the Class ID and Password provided by your teacher on the login screen.',
  },
  {
    question: 'Can teachers track my progress?',
    answer:
      'Yes. Teachers can monitor live dashboards that display team scores and individual performance to track progress over time.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-black"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Frequently Asked Questions.
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#1494F3',
                borderWidth: '1.5px',
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                style={{ fontFamily: '"Inter", sans-serif' }}
                onClick={() => handleToggle(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  Q. {faq.question}
                </span>

                <span
                  className="text-2xl font-semibold ml-4 shrink-0"
                  style={{ color: '#000000' }}
                >
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div
                  style={{
                    height: '1px',
                    backgroundColor: '#D1D5DB',
                  }}
                />
              )}

              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? '500px' : '0px',
                }}
              >
                <p
                  className="px-6 py-5 text-base text-gray-700 leading-8"
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    textAlign: 'left',
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-lg border text-sm font-medium transition"
            style={{
              borderColor: '#1494F3',
              color: '#000000',
              fontFamily: '"Inter", sans-serif',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}