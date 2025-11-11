import { useRef } from "react";

export default function OtpInput({ length = 6, value = "", onChange, required = false }) {
  const inputs = useRef([]);

  const handleChange = (val, index) => {
    const newValue = value.split("");
    newValue[index] = val.slice(-1);
    const joined = newValue.join("");
    onChange(joined);

    if (val && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !value[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <>
      {/* ✅ Hidden input so form sees OTP as a single field */}
      <input type="text" value={value} required={required} className="hidden" />

      <div className="flex gap-3 mt-4">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => (inputs.current[i] = el)}
            value={value[i] || ""}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            maxLength={1}
            required={required}
            className="
              w-8 h-8 sm:w-12 sm:h-12
              border border-gray-300 rounded-md text-center text-lg font-medium
              focus:outline-none focus:ring-2 focus:ring-green-500
            "
          />
        ))}
      </div>
    </>
  );
}