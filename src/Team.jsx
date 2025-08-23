import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react"; // icons

const Team = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const persons = [
    { name: "Lana Steiner", designation: "Chief Operating Officier", image: "/team/p4.jpg" },
    { name: "Mia Ward", designation: "Founder & CEO", image: "/team/p2.jpg" },
    { name: "Lana Ray", designation: "Co-founder", image: "/team/p3.jpg" },
    { name: "Justin Rose", designation: "Co-founder and CFO", image: "/team/p1.jpg" },
    { name: "Lana Steiner", designation: "Chief Operating Officier", image: "/team/p4.jpg" },
    { name: "Mia Ward", designation: "Founder & CEO", image: "/team/p2.jpg" },
  ];

  const People = (person) => (
    <div className="people-card flex flex-col items-center text-center lg:text-left lg:w-fit lg:h-fit lg:gap-2">
      <div className="img-container w-[200px] h-[200px] overflow-hidden rounded">
        <img
          src={person.image}
          className="w-full h-full object-cover object-top aspect-square"
          alt={person.name}
        />
      </div>
      <h3 className="font-bold text-xl mt-2">{person.name}</h3>
      <span className="italic text-gray-400">{person.designation}</span>
    </div>
  );

  // ✅ Embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // 🎭 Sync fade opacity per slide
  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      const slides = emblaApi.slideNodes();
      slides.forEach((slide, i) => {
        slide.style.transition = "opacity 0.6s ease";
        slide.style.opacity = i === emblaApi.selectedScrollSnap() ? "1" : "0.3";
      });
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", update);
    update(); // initial run
  }, [emblaApi]);

  return (
    <div className="team-container section-headings space-y-5 mb-5">
      <h4 style={{ fontFamily: "Golco" }} className="text-[10px]">
        Our Team
      </h4>
      <h2 className="tagline">Meet the Minds Building Our Future.</h2>

      {isMobile ? (
        // 📱 Mobile → Carousel
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {persons.map((person, idx) => (
                <div key={idx} className="flex-[0_0_100%] flex justify-center items-center">
                  {People(person)}
                </div>
              ))}
            </div>
          </div>

<button
  onClick={() => emblaApi && emblaApi.scrollPrev()}
  className="absolute top-25 left-15 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full shadow-lg cursor-pointer"
>
  <ChevronLeft size={22} />
</button>

<button
  onClick={() => emblaApi && emblaApi.scrollNext()}
  className="absolute top-25 right-15 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full shadow-lg cursor-pointer"
>
  <ChevronRight size={22} />
</button>

        </div>
      ) : (
        // 💻 Desktop → Grid
        <div className="people-container lg:flex lg:gap-20 lg:justify-evenly lg:flex-wrap lg:mx-30">
          {persons.map((person, idx) => (
            <React.Fragment key={idx}>{People(person)}</React.Fragment>
          ))}
        </div>
      )}

      <h2 className="tagline">From Dreams to Delivery Let's Begin.</h2>
    </div>
  );
};

export default Team;
