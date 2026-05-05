import { useNavigate } from "react-router-dom";

export function MainSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white mb-0 mt-40">
      <div className="flex flex-col items-center justify-center text-center px-6 pt-10 z-10 relative">
        <h1
          className="leading-none font-Ceviche"
          style={{
            fontSize: "clamp(8rem, 14vw, 11rem)",
            color: "#1494F3",
          }}
        >
          AtlasDash
        </h1>

        <p
          className="text-sm font-semibold tracking-widest mb-6 font-Changa"
          style={{
            color: "#1494F3",
            fontSize: "1.3rem",
          }}
        >
          Can you master the map?
        </p>

        <button
          className="px-10 py-3 rounded-full text-white font-semibold text-base shadow-md
                     transition-all duration-200 hover:brightness-110 active:scale-95 font-Inter"
          style={{
            backgroundColor: "#A2E260",
          }}
          onClick={() => navigate("/PlayMode")}
        >
          Lets start
        </button>
      </div>

      <div className="relative w-full max-w-fit mx-auto -translate-y-40">
        <img
          src="/assets/Map.png"
          alt="World map"
          className="w-full object-contain "
          style={{ opacity: 0.95 }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0) 45%)",
          }}
        />
      </div>
    </section>
  );
}
