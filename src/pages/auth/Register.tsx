import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Step1 from '@/components/RegisterSteps/Step1';
import Step2 from '@/components/RegisterSteps/Step2';
import Step3 from '@/components/RegisterSteps/Step3';
import {useNavigate} from 'react-router-dom';

// TypeScript interfaces
interface StepLabelProps {
    children: React.ReactNode;
    active?: boolean;
    completed?: boolean;
    index: number;
}

const RegisterPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const step = searchParams.get("step") || "1";

    const cn = (...classes: (string | undefined | boolean)[]): string => {
        return classes.filter(Boolean).join(' ');
    };

    const renderStep = () => {
        switch (step) {
            case "1":
                return <Step1 />;
            case "2":
                return <Step2 />;
            case "3":
                return <Step3 />;
            default:
                return <Step1 />;
        }
    };

    const StepLabel: React.FC<StepLabelProps> = ({ children, active, completed, index }) => {
        return (
            <div className="flex items-center space-x-2">
                <div
                    className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border-2 transition-all duration-200",
                        completed
                            ? "bg-emerald-500 text-white border-emerald-500 shadow-lg"
                            : active
                                ? "bg-white text-emerald-600 border-emerald-500 shadow-md"
                                : "bg-gray-100 text-gray-400 border-gray-300"
                    )}
                >
                    {completed ? "✓" : index}
                </div>
                <div className={cn("text-sm font-medium transition-colors", active ? "text-emerald-600" : "text-gray-500")}>
                    {children}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-2 md:p-5">

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-2xl">
                <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                {t('register')}
                            </span>
                        </h1>
                        <p className="text-gray-600 text-sm">
                            {t('register_desc')}
                        </p>
                    </div>

                    {/* Stepper */}
                    <div className="flex justify-center gap-8 mb-8">
                        <StepLabel index={1} active={step === "1"} completed={parseInt(step) > 1}>
                            {t('account-type')}
                        </StepLabel>
                        <StepLabel index={2} active={step === "2"} completed={parseInt(step) > 2}>
                            {t('basic-info')}
                        </StepLabel>
                        <StepLabel index={3} active={step === "3"}>
                            {t('additional-info')}
                        </StepLabel>
                    </div>

                    {/* Step Content */}
                    <div className="animate-in fade-in duration-300">
                        {renderStep()}
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                            Đã có tài khoản?{' '}
                            <span onClick={() =>{navigate('/login')}} className="text-green-600 font-medium hover:underline transition-colors cursor-pointer">
                                Đăng nhập ngay
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-100/50 to-transparent"></div>
        </div>
    );
};

export default RegisterPage;
