export default function Tabs({ tabs = [], activeTab = 0, onChange, allowDirectNavigation = true }) {
  const handleClick = (index) => {
    if (allowDirectNavigation && onChange) {
      onChange(index);
    }
  };

  return (
    <div className="w-full border-b border-gray-300">
      <div className="flex justify-start gap-10">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleClick(index)}
            disabled={!allowDirectNavigation}
            className={`relative pb-2 font-poppins font-semibold transition
              ${allowDirectNavigation ? "cursor-pointer" : "cursor-default"}
              ${activeTab === index ? "text-green-600" : "text-gray-700"}
              ${!allowDirectNavigation ? "opacity-60" : ""}`}
          >
            {tab}

            {activeTab === index && (
              <span className="absolute left-0 -bottom-[2px] w-full h-[3px] bg-green-600 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}