interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  id,
  label,
  type = "text",
  placeholder = "",
  error,
  required,
  value,
  onChange,
}: InputProps) {
  return (
    <div
      className={`group industrial-input relative bg-surface h-[80px] border-2 transition-all duration-75 ${
        error ? "border-alert" : "border-asphalt"
      }`}
    >
      <label
        htmlFor={id}
        className={`absolute top-3 left-4 font-mono text-xs font-bold uppercase pointer-events-none ${
          error
            ? "text-alert"
            : "text-rebar group-focus-within:text-asphalt"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full h-full pt-6 pb-2 px-4 bg-transparent border-none text-lg font-bold focus:ring-0 placeholder-transparent ${
          error ? "text-alert" : "text-asphalt"
        }`}
      />
      {error && (
        <div className="absolute bottom-1 right-2 font-mono text-[10px] text-alert font-bold bg-white px-1">
          ERROR: {error}
        </div>
      )}
    </div>
  );
}
