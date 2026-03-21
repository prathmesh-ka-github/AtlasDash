const cards = [
  {
    icon: '/assets/objective-icon.png',
    label: 'Objective',
  },
  {
    icon: '/assets/howtoplay-icon.png',
    label: 'How to play',
  },
  {
    icon: '/assets/points-icon.png',
    label: 'Points',
  },
];

export default function KnowMore() {
  return (
    <section className="w-full bg-white px-6 py-16">

      <h2
        className="text-center text-3xl font-bold text-gray-900 mb-1"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        About the Game
      </h2>

      <p
        className="text-center text-sm text-gray-500 mb-6"
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        Click to know more
      </p>

      <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.label}
            className="flex flex-col items-center justify-between rounded-2xl px-10 py-20 cursor-pointer
                       transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
            style={{ backgroundColor: '#F2F2F2' }}
          >
            <img src={card.icon} alt={card.label} className="w-16 h-16 mb-6 object-contain" />

            <span
              className="text-base font-semibold text-gray-800"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {card.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
}