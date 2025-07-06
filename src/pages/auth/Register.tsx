import { useSearchParams } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { cn } from "@/lib/utils"
import Step1 from "../../components/RegisterSteps/Step1"
import Step2 from "../../components/RegisterSteps/Step2"
import Step3 from "../../components/RegisterSteps/Step3"

export default function RegisterPage() {
    const { t } = useTranslation()
    const [searchParams] = useSearchParams()
    const step = searchParams.get("step") ?? "1"

    const renderStep = () => {
        switch (step) {
            case "1":
                return <Step1 />
            case "2":
                return <Step2 />
            case "3":
                return <Step3 />
            default:
                return <Step1 />
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center animate-in fade-in duration-500">
            <h1 className="text-2xl font-bold mb-4 mt-8">{t('register')}</h1>
            <p className="text-gray-600 mb-6">{t('register_desc')}</p>

            {/* Stepper */}
            <div className="flex justify-center gap-6 mb-8">
                <StepLabel index={1} active={step === "1"} completed={step > "1"}>{t('account-type')}</StepLabel>
                <StepLabel index={2} active={step === "2"} completed={step > "2"}>{t('basic-info')}</StepLabel>
                <StepLabel index={3} active={step === "3"}>{t('additional-info')}</StepLabel>
            </div>

            {renderStep()}
        </div>
    )
}

function StepLabel({
    children,
    active,
    completed,
    index
}: {
    children: React.ReactNode;
    active?: boolean;
    completed?: boolean;
    index: number;
}) {
    return (
        <div className="flex items-center space-x-2">
            <div
                className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border",
                    completed
                        ? "bg-emerald-500 text-white border-emerald-500"
                        : active
                        ? "bg-white text-emerald-600 border-emerald-500"
                        : "bg-gray-100 text-gray-400 border-gray-300"
                )}
            >
                {completed ? "✓" : index}
            </div>
            <div className={cn("text-sm", active ? "text-emerald-600 font-medium" : "text-gray-500")}>
                {children}
            </div>
        </div>
    )
}