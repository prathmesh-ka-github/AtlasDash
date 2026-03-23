import { useState } from 'react';

const faqData = [
  {
    question: 'How does AtlasDash work?',
    answer: 'A country name appears on the screen and you have to find and click it on the world map as quickly as possible. You have 60 seconds to score as many points as you can.',
  },
  {
    question: 'How is scoring calculated?',
    answer: 'You earn +5 points for every correct answer and lose -1 point for every wrong click. The game ends when the 60 second timer runs out.',
  },
  {
    question: 'Can I play with friends?',
    answer: 'Yes! AtlasDash supports co-op multiplayer where you can team up with a friend. There is also a Classroom mode where entire classes can compete simultaneously in pairs.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-6 py-16">

      <h2
        className="text-center text-3xl font-bold text-gray-900"
        style={{ fontFamily: '"Inter", sans-serif', marginBottom: '3rem' }}
      >
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-3 max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left
                         transition-colors duration-200 hover:brightness-95"
              style={{ backgroundColor: '#F2F2F2', fontFamily: '"Inter", sans-serif' }}
              onClick={() => handleToggle(index)}
            >
              <span className="text-base font-semibold text-gray-800">
                {faq.question}
              </span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 shrink-0 ml-4"
                style={{
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="#555"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: openIndex === index ? '200px' : '0px',
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