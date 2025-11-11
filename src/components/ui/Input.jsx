export default function Input({
  label,
  subLabel = "",
  required = false,
  error = "",
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

      <input
        required={required}
        {...props}
        className={`w-full h-[40px] border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400 ${className}`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}