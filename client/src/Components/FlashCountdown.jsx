const FlashCountdown = () => {
  return (
    <div className="flex items-end gap-1 pt-6">

      {/* Days */}
      <div className="text-center">
        <p className="text-xs text-gray-500">Days</p>
        <p className="text-xl font-bold">03</p>
      </div>

      <span className="text-red-500 text-2xl font-bold pb-1">:</span>

      {/* Hours */}
      <div className="text-center">
        <p className="text-xs text-gray-500">Hours</p>
        <p className="text-xl font-bold">23</p>
      </div>

      <span className="text-red-500 text-2xl font-bold pb-1">:</span>

      {/* Minutes */}
      <div className="text-center">
        <p className="text-xs text-gray-500">Minutes</p>
        <p className="text-xl font-bold">19</p>
      </div>

      <span className="text-red-500 text-2xl font-bold pb-1">:</span>

      {/* Seconds */}
      <div className="text-center">
        <p className="text-xs text-gray-500">Seconds</p>
        <p className="text-xl font-bold">56</p>
      </div>

    </div>
  );
};

export default FlashCountdown;
