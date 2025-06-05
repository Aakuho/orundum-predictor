type RadioButtonProps = {
  label: string;
  value: boolean;
  description?: string;
  onToggle: () => void;
};

export function RadioButton({ label, value, onToggle, description = '' }: RadioButtonProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className={`m-3 w-1/3 p-3 font-semibold transition cursor-pointer border-1 border-orundum ${value ? 'bg-orundum text-white' : 'bg-foreground text-gray-300'}`}
        type="button"
      >
      {label}
      </button>
      <span className="text-hint text-sm select-none">+- {description}</span>
    </div>
  );
}
