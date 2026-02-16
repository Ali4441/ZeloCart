



export default function StatsCards({ stats, isHome }) {
  return (
    <div className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 ${isHome === "true" ? "lg:grid-cols-6" : "lg:grid-cols-4"}  gap-6`}>
      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className={`
              group rounded-md border border-zinc-300 shadow-sm p-8 flex flex-col items-center text-center
              transition-all duration-300
              ${item.active
                ? "bg-red-500 text-white border-red-500"
                : "bg-white text-black hover:bg-red-500 hover:text-white"
              }
            `}
          >
            {/* Icon Outer Circle */}
            <div
              className={`
                w-16 h-16 rounded-full flex items-center justify-center mb-6
                transition-all duration-300
                ${item.active
                  ? "bg-white/30"
                  : "bg-gray-300 group-hover:bg-white/30"
                }
              `}
            >
              {/* Icon Inner Circle */}
              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  transition-all duration-300
                  ${item.active
                    ? "bg-white"
                    : "bg-black group-hover:bg-white"
                  }
                `}
              >
                <Icon
                  className={`w-6 h-6 ${item.active
                    ? "text-red-500"
                    : "text-white group-hover:text-red-500"
                    }`}
                />
              </div>
            </div>

            {/* Value */}
            <h2 className="text-3xl font-bold mb-2">
              {item.value}
            </h2>

            {/* Label */}
            <p className="text-sm opacity-80">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
