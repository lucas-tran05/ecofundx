import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import type { Project } from '@/types/project';
import Step1 from '@/components/CreateNewSteps/Step1';
import Step2 from '@/components/CreateNewSteps/Step2';
import Step3 from '@/components/CreateNewSteps/Step3';
import Step4 from '@/components/CreateNewSteps/Step4';


const RegisterPage = () => {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const step = searchParams.get("step") || "1";
    const [projectData, setProjectData] = useState<Project>({
        id: "",
        title: "",
        description: "",
        category: "",
        raised: 0,
        target: 0,
        progress: 0,
        rewards: [],
        breakdown: {},
    });
    
    const commonProps = { projectData, setProjectData };

    interface StepLabelProps {
        children: React.ReactNode;
        active?: boolean;
        completed?: boolean;
        index: number;
    }

    const cn = (...classes: (string | undefined | boolean)[]): string => {
        return classes.filter(Boolean).join(' ');
    };

    const renderStep = () => {
        switch (step) {
            case "1":
                return <Step1 {...commonProps} />;
            case "2":
                return <Step2 {...commonProps} />;
            case "3":
                return <Step3 {...commonProps} />;
            case "4":
                return <Step4 {...commonProps} />;
            default:
                return <Step1 {...commonProps} />;
        }
    };

    const steps = [
        { index: 1, label: t('basic-info') },
        { index: 2, label: t('details') },
        { index: 3, label: t('rewards') },
        { index: 4, label: t('review') },
    ];

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

        <div className="max-w-3xl mx-auto pb-16 pt-32">
            <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            {t('create-new-project')}
                        </span>
                    </h1>
                    <p className="text-gray-600 text-sm">{t('create-new-project-des')}</p>
                </div>

                {/* Stepper */}
                <div className="flex justify-center gap-8 mb-8 flex-wrap">
                    {steps.map(({ index, label }) => (
                        <StepLabel
                            key={index}
                            index={index}
                            active={step === String(index)}
                            completed={parseInt(step) > index}
                        >
                            {label}
                        </StepLabel>
                    ))}
                </div>

                {/* Step Content */}
                <div className="animate-in fade-in duration-300">
                    {renderStep()}
                </div>
            </div>
        </div>

    );
};

export default RegisterPage;
