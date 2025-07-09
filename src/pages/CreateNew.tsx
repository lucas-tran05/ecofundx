import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Step1 from '@/components/CreateNewSteps/Step1';
import Step2 from '@/components/CreateNewSteps/Step2';
import Step3 from '@/components/CreateNewSteps/Step3';
import Step4 from '@/components/CreateNewSteps/Step4';

const steps = [
    { index: 1, label: 'Info', component: Step1 },
    { index: 2, label: 'Rewards', component: Step2 },
    { index: 3, label: 'Review', component: Step3 },
    { index: 4, label: 'Bills', component: Step4 }
];

const ContributeStepsDemo = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const stepParam = parseInt(searchParams.get('step') || '1', 10);

    const currentStep = isNaN(stepParam) || stepParam < 1 || stepParam > steps.length ? 1 : stepParam;
    const currentStepData = steps.find(step => step.index === currentStep);
    const StepComponent = currentStepData?.component || Step1;

    useEffect(() => {
        if (stepParam !== currentStep) {
            setSearchParams({ step: currentStep.toString() });
        }
    }, [currentStep, stepParam, setSearchParams]);

    const handleStepClick = (index: number) => {
        setSearchParams({ step: index.toString() });
    };

    return (
        <div className="min-h-screen p-2 md:p-8">
            <div className="mx-auto">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Create New Project
                            </span>
                        </h1>
                        <p className="text-gray-600">Launch your crowdfunding campaign in 4 simple steps</p>
                    </div>

                    {/* Step Navigation */}
                    <div className="text-xs md:text-sm flex justify-center gap-8 mb-8 flex-wrap">
                        {steps.map(({ index, label }) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 cursor-pointer ${currentStep === index ? 'text-emerald-600' : 'text-gray-500'}`}
                                onClick={() => handleStepClick(index)}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                                    currentStep > index
                                        ? 'bg-emerald-500 text-white border-emerald-500'
                                        : currentStep === index
                                            ? 'bg-white text-emerald-600 border-emerald-500'
                                            : 'bg-gray-100 text-gray-400 border-gray-300'
                                }`}>
                                    {currentStep > index ? '✓' : index}
                                </div>
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Step Content */}
                    <div className="transition-all duration-300">
                        <StepComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributeStepsDemo;
