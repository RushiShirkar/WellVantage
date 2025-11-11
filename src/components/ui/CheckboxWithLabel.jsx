export default function CheckboxWithLabel({
  checked,
  onChange,
  required = false,
  linkHref = "/privacy-policy",
}) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      {/* Custom Checkbox */}
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        required={required}
        className="peer appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:bg-green-600 checked:border-green-600 transition-all duration-150 cursor-pointer"
      />

      {/* Label Text */}
      <span className="text-gray-700 font-poppins text-sm">
        I agree to the{" "}
        <a
          href={linkHref}
          className="text-green-700 font-semibold underline underline-offset-2 hover:text-green-800"
        >
          Privacy Policy.
        </a>
      </span>
    </label>
  );
}