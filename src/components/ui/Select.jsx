export default function Select({
  label,
  subLabel = "",
  required = false,
  options = [],
  variant = "default",
  value,
  onChange,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col w-full space-y-1">

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

      <div className="relative">
        <select
          value={value}
          onChange={onChange}
          required={required}
          className={`
              w-full h-[40px] rounded-md px-4 appearance-none cursor-pointer
              ${variant === "chip"
                ? "bg-green-50 text-green-600 border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-400"
                : "bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"}
              ${className}
            `}
          {...props}
        >
          <option value="" disabled>Select</option>
          {options.map((item, idx) => (
            <option key={idx} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Dropdown Icon */}
        <span className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${variant === "chip" ? "text-green-500" : "text-gray-500"}`}>
          ▼
        </span>
      </div>
    </div>
  );
}