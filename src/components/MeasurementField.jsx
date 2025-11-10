import Input from "./Input";
import Select from "./Select";

function MeasurementField({
  label,
  required = false,
  name,
  unitName,
  unitOptions,
  value,
  unitValue,
  onChange,
  onUnitChange,
}) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="font-poppins text-sm font-medium text-gray-700 flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </div>
      <div className="flex items-center gap-3">
        <Input
          required={required}
          name={name}
          type="number"
          min="0"
          className="flex-1"
          value={value || ""}
          onChange={onChange}
        />
        <div className="w-20">
          <Select
            variant="chip"
            options={unitOptions}
            value={unitValue}
            onChange={onUnitChange}
            name={unitName}
          />
        </div>
      </div>
    </div>
  );
}

export default MeasurementField;

