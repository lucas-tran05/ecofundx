import { Input } from "@/components/ui/input";
export default function InputField({
    id,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    error,
}: {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
}) {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium mb-1">
                {label}
            </label>
            <Input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={error ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}
