import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import Step1 from '@/components/RegisterSteps/Step1';
import Step2 from '@/components/RegisterSteps/Step2';
import Step3 from '@/components/RegisterSteps/Step3';

// TypeScript interfaces
interface StepLabelProps {
    children: React.ReactNode;
    active?: boolean;
    completed?: boolean;
    index: number;
}

const RegisterPage = () => {
    const { t } = useTranslation();
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
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-5">
            {/* Animated Background - Same as Login */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
                {/* Floating Circles */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-emerald-400 opacity-10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-400 opacity-15 rotate-12 animate-pulse"></div>

                {/* Leaf-like Shapes */}
                <div className="absolute top-1/2 left-10 w-8 h-16 bg-green-500 opacity-20 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/3 right-10 w-6 h-12 bg-emerald-500 opacity-25 rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '5s' }}></div>

                {/* Gradient Orbs */}
                <div className="absolute top-10 left-1/2 w-40 h-40 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-r from-teal-200 to-green-300 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

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
                            <a href="/login" className="text-green-600 font-medium hover:underline transition-colors">
                                Đăng nhập ngay
                            </a>
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
