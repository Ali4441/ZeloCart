import React from 'react'
import { useEffect, useState } from "react";
import Line from './Line';
function AddressCard() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({
          lat: latitude.toFixed(4),
          lng: longitude.toFixed(4),
        });
      },
      () => {
        setError("Location permission denied");
      }
    );
  }, []); // ✅ safe

  const openGoogleMap = () => {
    if (location) {
      window.open(
        `https://www.google.com/maps?q=${location.lat},${location.lng}`,
        "_blank"
      );
    } else {
      window.open("https://www.google.com/maps", "_blank");
    }
  };
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    openGoogleMap();
    setTimeout(() => setLoading(false), 1000);

  };

  return (
    <div className="bg-white rounded-md  relative">
      <h3 className="font-semibold text-lg mb-2 z-10">
        Delivery Address
      </h3>

      {/* CHANGE ADDRESS BUTTON */}
      <button
        onClick={handleClick}
        disabled={loading}
        className={`absolute top-0 right-0 border border-zinc-300 rounded-md 
    text-sm font-medium p-2 z-30 transition-all duration-150
    ${loading
            ? "text-gray-400 cursor-not-allowed bg-gray-100"
            : "text-blue-600 hover:bg-blue-50 active:bg-blue-100 active:scale-95"
          }
  `}
      >
        {loading ? "Allow Location..." : "Change"}
      </button>




      {!location && !error && (
        <p className="text-sm text-zinc-500">Detecting location…</p>
      )}

      {location && (
        <div className="w-fit bg-zinc-100 p-3 rounded text-sm mt-2">
          Latitude: {location.lat} <br />
          Longitude: {location.lng}
        </div>
      )}

      {error && (
        <p className="text-sm text-red-500 ">{error}</p>
      )}

      <Line />
    </div>
  );
}

export default AddressCard
