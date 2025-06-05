type ResultRowProps = {
    label: string;
    value: string | number;
    icon?: string;
    description?: string;
};

export function ResultRow({ label, value, icon, description }: ResultRowProps) {
    return (
        <div>
            <b>{label}</b>
            <span className="float-right flex items-center gap-1">
                {icon && <img src={icon} alt="" className="w-4 h-4" />}
                {value}
            </span>
            {description && ( <div className="text-xs text-gray-400">{description}</div> )}
        </div>
    );
}
