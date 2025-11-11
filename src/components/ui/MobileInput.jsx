import { useState, useEffect } from "react";
import Button from "./Button";

export default function MobileInput({
  label = "Phone Number",
  subLabel = "",
  required = false,
  onVerify = () => { },
  showVerify = true,
  value = "",
  onChange,
}) {
  // Extract country code and phone from value prop
  const extractPhoneData = (phoneValue) => {
    if (!phoneValue) return { countryCode: "+91", phone: "" };
    
    const codes = ["+91", "+1", "+44", "+61"];
    for (const code of codes) {
      if (phoneValue.startsWith(code)) {
        return { countryCode: code, phone: phoneValue.replace(code, "") };
      }
    }
    return { countryCode: "+91", phone: phoneValue };
  };

  const { countryCode: initialCountryCode, phone: initialPhone } = extractPhoneData(value);
  const [countryCode, setCountryCode] = useState(initialCountryCode);
  const [phone, setPhone] = useState(initialPhone);

  // Sync internal state when value prop changes
  useEffect(() => {
    const { countryCode: newCountryCode, phone: newPhone } = extractPhoneData(value);
    setCountryCode(newCountryCode);
    setPhone(newPhone);
  }, [value]);

  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    if (onChange) {
      onChange({ target: { value: `${countryCode}${newPhone}` } });
    }
  };

  const handleCountryCodeChange = (e) => {
    const newCountryCode = e.target.value;
    setCountryCode(newCountryCode);
    if (onChange) {
      onChange({ target: { value: `${newCountryCode}${phone}` } });
    }
  };

  return (
    <div className="flex flex-col w-full space-y-1">

      {/* Label + SubLabel (exact same style as Input component) */}
      {(label || subLabel) && (
        <div className="font-poppins text-gray-700">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium">{label}</span>
            {required && <span className="text-red-500">*</span>}
          </div>

          {subLabel && (
            <span className="text-xs text-gray-500 block leading-tight">
              {subLabel}
            </span>
          )}
        </div>
      )}

      <div className="flex items-center gap-3">

        {/* Phone Field Wrapper (same border and focus styling as Input) */}
        <div className="flex items-center w-full h-[40px] border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">

          {/* Country Code Select */}
          <select
            value={countryCode}
            onChange={handleCountryCodeChange}
            className="bg-gray-200 border-r border-gray-300 h-full px-3 text-gray-700 focus:outline-none"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
          </select>

          {/* Input */}
          <input
            type="tel"
            value={phone}
            required={required}
            maxLength={10}
            onChange={handlePhoneChange}
            className="w-full h-full px-4 text-gray-800 placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Reusable Verify Button */}
        {showVerify && (
          <Button
            variant="primary"
            size="md"
            onClick={() => onVerify({ countryCode, phone })}
          >
            Verify
          </Button>
        )}
      </div>
    </div>
  );
}