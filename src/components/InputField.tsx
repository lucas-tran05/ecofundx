import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import React from "react"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string
    label?: string
    error?: string
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ id, label, error, className, ...props }, ref) => {
        return (
            <div className="mb-4 ">
                <label htmlFor={id} className="block text-sm font-medium mb-1 text-left">
                    {label}
                </label>
                <Input
                    id={id}
                    ref={ref}
                    className={cn(
                        className,
                        error && "border-red-500 focus-visible:ring-red-500"
                    )}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${id}-error` : undefined}
                    {...props}
                />
                {error && (
                    <p id={`${id}-error`} className="text-red-500 text-xs mt-1">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)

InputField.displayName = "InputField"

export default InputField
