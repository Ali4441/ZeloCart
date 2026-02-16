import { Twitter, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

const team = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6",
  },
];

export default function TeamSlider() {
  const [active, setActive] = useState(0);
  const imagesPerSlide = 3;
  const totalDots = Math.ceil(team.length / imagesPerSlide);


  return (
    <div className="max-w-6xl mx-auto py-16 overflow-hidden">
      {/* SLIDER TRACK */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {team.map((member, i) => (
          <div
            key={i}
            className="min-w-full lg:min-w-[33.33%] px-4 text-center"
          >
            <div className="bg-gray-100 rounded-md overflow-hidden mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[420px] object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-1">{member.name}</h2>
            <p className="text-gray-600 mb-4">{member.role}</p>

            <div className="flex justify-center gap-5">
              <Twitter className="w-5 h-5 cursor-pointer" />
              <Instagram className="w-5 h-5 cursor-pointer" />
              <Linkedin className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* DOT BUTTONS */}
      <div className="flex justify-center gap-3 mt-10 ">

        {Array.from({ length: totalDots }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-5 h-5 rounded-full transition ${active === i ? "bg-red-500" : "bg-gray-300"
              }`}
          />
        ))}
      </div>

    </div>
  );
}
