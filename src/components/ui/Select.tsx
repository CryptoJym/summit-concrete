import { MaterialIcon } from "./Icons";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  options: SelectOption[];
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({
  id,
  label,
  options,
  required,
  value,
  onChange,
}: SelectProps) {
  return (
    <div className="group industrial-input relative bg-surface h-[80px] border-2 border-asphalt transition-all duration-75">
      <label
        htmlFor={id}
        className="absolute top-3 left-4 font-mono text-xs font-bold text-rebar group-focus-within:text-asphalt uppercase pointer-events-none"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full h-full pt-6 pb-2 px-4 bg-transparent border-none text-lg font-bold text-asphalt focus:ring-0 appearance-none cursor-pointer"
      >
        <option disabled value="">
          SELECT TYPE
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
        <MaterialIcon name="arrow_drop_down" className="text-asphalt" />
      </div>
    </div>
  );
}
