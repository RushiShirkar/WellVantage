export default function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  full = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-md cursor-pointer";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    secondary:
      "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
    transparent: "bg-transparent border-none"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const width = full ? "w-full" : "";

  return (
    <button
      type={type}
      {...props}
      className={`${base} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
    >
      {children}
    </button>
  );
}