import { useRef, useState, useEffect } from "react";

export default function ImageSlider({ slides }) {
  const ref = useRef(null);
  const [index, setIndex] = useState(0);

  // Update index based on scroll position
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setIndex(i);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % slides.length;
      ref.current?.children[nextIndex]?.scrollIntoView({ behavior: "smooth" });
    }, 4000);

    return () => clearInterval(interval);
  }, [index, slides.length]);

  const goTo = (i) => {
    ref.current?.children[i]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={ref}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative min-w-full snap-start">
            <img
              src={slide.image}
              className="w-full h-[50vh] md:h-screen object-cover"
              alt=""
            />
            {slide.text && (
              <div className="absolute inset-0 flex py-6 justify-center px-4">
                <h2 className="text-white text-2xl md:text-4xl max-w-[70%] font-semibold text-center drop-shadow-lg">
                  {slide.text}
                </h2>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-green-500" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}