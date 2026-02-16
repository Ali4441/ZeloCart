import React, { useEffect, useState, useRef } from "react";

const LaunchBanner = ({
  category = "Categories",
  title = "New Product Launch",
  description,
  image,
  buttonText = "Buy Now",
  buttonLink = "#",
  launchDate,
}) => {
  const bannerRef = useRef(null);
  const [style, setStyle] = useState({});

  /* =============================
     3D TILT EFFECT (SMOOTH)
  ============================== */

  const handleMouseMove = (e) => {
    if (!bannerRef.current) return;

    const rect = bannerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const edgeThreshold = 40; // Safe inner zone

    // Disable tilt near edges
    if (
      x < edgeThreshold ||
      x > rect.width - edgeThreshold ||
      y < edgeThreshold ||
      y > rect.height - edgeThreshold
    ) {
      setStyle({
        transform: "rotateX(0deg) rotateY(0deg)",
      });
      return;
    }

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateX = -percentY * 6; // max 6deg tilt
    const rotateY = percentX * 6;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
    });
  };

  /* =============================
     COUNTDOWN LOGIC
  ============================== */

  const calculateTimeLeft = () => {
    if (!launchDate) return {};

    const difference = new Date(launchDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!launchDate) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  /* =============================
     JSX
  ============================== */

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 perspective-[1190px] bg-zinc-100 rounded-md">
      <div
        ref={bannerRef}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-black rounded-2xl overflow-hidden 
                   flex flex-col lg:flex-row items-center justify-between 
                   p-8 lg:p-16 
                   transform-gpu will-change-transform 
                   transition-transform duration-300 ease-out"
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 text-white space-y-6 z-10">

          <p className="text-green-400 font-medium text-sm">
            {category}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-sky-200 cursor-pointer">
            {title}
          </h1>

          {description && (
            <p className="text-zinc-400 max-w-md">
              {description}
            </p>
          )}

          {/* Countdown */}
          {timeLeft.days !== undefined && (
            <div className="flex gap-4 flex-wrap">
              {[
                { value: timeLeft.days || 0, label: "Days" },
                { value: timeLeft.hours || 0, label: "Hours" },
                { value: timeLeft.minutes || 0, label: "Minutes" },
                { value: timeLeft.seconds || 0, label: "Seconds" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-white text-black rounded-full 
                             flex flex-col items-center justify-center 
                             text-xs font-medium shadow-lg"
                >
                  <span className="text-sm font-semibold">
                    {item.value}
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          )}

          {/* Button */}
          <a
            href={buttonLink}
            className="inline-block bg-green-500 hover:bg-green-600 
                       transition-all duration-300 
                       px-6 py-3 rounded-md font-medium text-black"
          >
            {buttonText}
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 mt-10 lg:mt-0 relative z-10 flex justify-center">
          <img
            src={image}
            alt={title}
            className="w-full max-w-md object-contain transition-transform duration-500"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute right-0 top-0 w-full h-full 
                        bg-gradient-to-r from-black via-black/80 to-transparent 
                        pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LaunchBanner;
