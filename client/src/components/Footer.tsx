export default function Footer() {
  return (
    <footer className="w-full px-10 py-8 text-[#A2E260]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <div className="flex flex-col gap-3">

          <div className="flex flex-col gap-1 items-center">
            <span
              className="text-7xl text-gray-900 font-Ceviche "
            >
              AtlasDash
            </span>
            <span
              className="text-xs text-gray-900 font-Changa"
            >
              Can you master the map?
            </span>
          </div>
            <p className="text-xs text-gray-900 text-center font-Inter">
                Copyright © 2026 — All rights reserved.
            </p>

        </div>

        <div className="flex items-center gap-15 mt-2">
          {['About Us', 'Contact', 'GitHub', 'FAQs'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-gray-900 hover:text-gray-900 transition-colors duration-200 font-Inter"
            >
              {link}
            </a>
          ))}
        </div>

      </div>

    </footer>
  );
}