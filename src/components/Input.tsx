type InputProps = {
    placeholder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    description?: string;
};

export function Input({placeholder, value, onChange, type = 'text', description = '', }: InputProps) {
    return (
        <div className="flex items-center space-x-3">
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="m-3 w-1/3 p-3 bg-[#1e1e1e] text-white text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition flex-shrink-0"
            />
            <span className="text-hint text-sm select-none">+- {description}</span>
        </div>
    );
}   