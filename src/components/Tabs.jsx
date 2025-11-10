export default function Tabs({ tabs = [], activeTab = 0, onChange }) {
  const handleClick = (index) => {
    onChange && onChange(index);
  };

  return (
    <div className="w-full border-b border-gray-300">
      <div className="flex justify-start gap-10">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            onClick={() => handleClick(index)}
            className={`relative pb-2 font-poppins font-semibold transition cursor-pointer
              ${activeTab === index ? "text-green-600" : "text-gray-700"}`}
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