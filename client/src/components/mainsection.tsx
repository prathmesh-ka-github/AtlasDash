export default function MainSection() {
  return (
    <section className="w-full bg-white">

      <div className="flex flex-col items-center justify-center text-center px-6 pt-10 pb-8 z-10 relative">

        <h1
          className="leading-none mb-2"
          style={{
            fontFamily: '"Ceviche One", cursive',
            fontSize: 'clamp(4rem, 10vw, 7rem)',
            letterSpacing: '0.04em',
            color: '#1494F3',
          }}
        >
          AtlasDash
        </h1>

        <p
          className="text-sm font-semibold tracking-widest mb-6"
          style={{
            color: '#1494F3',
            fontFamily: '"Changa", sans-serif',
          }}
        >
          Can you master the map?
        </p>

        <button
          className="px-10 py-3 rounded-full text-white font-semibold text-base shadow-md
                     transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            backgroundColor: '#A2E260',
            fontFamily: '"Inter", sans-serif',
          }}
          onClick={() => console.log('Lets start clicked')}
        >
          Lets start
        </button>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-6 -translate-y-25">

        <img
          src="/assets/Map.png"
          alt="World map"
          className="w-full object-contain "
          style={{ opacity: 0.85 }}
        />

        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0) 45%)',
          }}
        />

      </div>

    </section>
  );
}