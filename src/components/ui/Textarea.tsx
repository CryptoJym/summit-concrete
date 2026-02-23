interface TextareaProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea({
  id,
  label,
  placeholder = "",
  required,
  value,
  onChange,
}: TextareaProps) {
  return (
    <div className="group industrial-input relative bg-surface min-h-[120px] border-2 border-asphalt transition-all duration-75">
      <label
        htmlFor={id}
        className="absolute top-3 left-4 font-mono text-xs font-bold text-rebar group-focus-within:text-asphalt uppercase pointer-events-none"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full h-full pt-8 pb-4 px-4 bg-transparent border-none text-base font-medium text-asphalt focus:ring-0 resize-none placeholder-rebar min-h-[120px]"
      />
    </div>
  );
}
