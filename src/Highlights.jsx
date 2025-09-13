import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import confetti from "canvas-confetti";

export default function Highlights() {
  const { ref: yearsRef, inView: yearsVisible } = useInView({ triggerOnce: true });
  const { ref: industriesRef, inView: industriesVisible } = useInView({ triggerOnce: true });
  const { ref: clientsRef, inView: clientsVisible } = useInView({ triggerOnce: true });

  const [finished, setFinished] = useState({ years: false, industries: false, clients: false });

  const fireConfetti = () => {
    // Left cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });

    // Right cannon
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
  };

  const checkAllFinished = (key) => {
    setFinished((prev) => {
      const updated = { ...prev, [key]: true };
      if (updated.years && updated.industries && updated.clients) {
        fireConfetti();
      }
      return updated;
    });
  };

  return (
    <section className="w-full flex items-center">
      <div className="max-w-6xl mx-auto md:py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-oswald font-bold mb-4 text-[#0056b3]">
          Our Achievements
        </h2>

        <p className="text-base md:text-lg font-normal mb-12 max-w-2xl mx-auto text-[#1a1f36]">
          With decades of excellence, Siddharth Group continues to grow across industries while building trust and long-term partnerships.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-20">
          {/* Years of Excellence */}
          <div ref={yearsRef}>
            <h3 className="text-4xl md:text-8xl font-oswald text-[#ff9800] font-bold">
              {yearsVisible ? (
                <CountUp end={25} duration={2} onEnd={() => checkAllFinished("years")} />
              ) : (
                0
              )}
              +
            </h3>
            <p className="mt-2 text-sm md:text-base font-bold text-[#0056b3] uppercase tracking-wide">
              Years of Excellence
            </p>
          </div>

          {/* Industries Served */}
          <div ref={industriesRef}>
            <h3 className="text-4xl md:text-8xl font-oswald text-[#ff9800] font-bold">
              {industriesVisible ? (
                <CountUp end={6} duration={2} onEnd={() => checkAllFinished("industries")} />
              ) : (
                0
              )}
              +
            </h3>
            <p className="mt-2 text-sm md:text-base font-bold text-[#0056b3] uppercase tracking-wide">
              Industries Served
            </p>
          </div>

          {/* Clients & Partners */}
          <div ref={clientsRef}>
            <h3 className="text-4xl md:text-8xl font-oswald text-[#ff9800] font-bold">
              {clientsVisible ? (
                <CountUp end={1000} duration={2} onEnd={() => checkAllFinished("clients")} />
              ) : (
                0
              )}
              +
            </h3>
            <p className="mt-2 text-sm md:text-base font-bold text-[#0056b3] uppercase tracking-wide">
              Clients & Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
