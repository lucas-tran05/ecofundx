import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import Step1 from '@/components/ContributeSteps/Step1';
import Step2 from '@/components/ContributeSteps/Step2';
import Step3 from '@/components/ContributeSteps/Step3';
import Step4 from '@/components/ContributeSteps/Step4';

const steps = [
    { index: 1, label: 'Rewards', component: Step1 },
    { index: 2, label: 'Info', component: Step2 },
    { index: 3, label: 'Review', component: Step3 },
    { index: 4, label: 'Bills', component: Step4 }
];

const ContributeStepsDemo = () => {
    const navigate = useNavigate();
    const params = useParams();
    const { id: projectId } = params;

    const [searchParams, setSearchParams] = useSearchParams();

    const currentStep = parseInt(searchParams.get('step') || '1', 10);

    useEffect(() => {
        if (isNaN(currentStep) || currentStep < 1 || currentStep > steps.length) {
            setSearchParams({ step: '1' });
        }
    }, [currentStep, setSearchParams]);

    const currentStepData = steps.find(step => step.index === currentStep);
    const StepComponent = currentStepData?.component || Step1;

    const handleStepChange = (step: number) => {
        setSearchParams({ step: step.toString() });
    };

    return (
        <div className="min-h-screen p-2 md:p-8">
            <div className="max-w-4xl mx-auto ">
                {/* Header Navigation */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 md:mb-6">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-emerald-600 self-start"
                        onClick={() => navigate(-1)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Quay lại
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
                        <span>Trang chủ</span>
                        <span>/</span>
                        <span>Project title</span>
                        <span>/</span>
                        <span className="text-emerald-600">Chi tiết bài viết</span>
                    </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Contribute
                            </span>
                        </h1>
                        <p className="text-gray-600">Join our crowdfunding campaign</p>
                    </div>

                    {/* Step Navigation */}
                    <div className="flex justify-center gap-8 mb-8 flex-wrap">
                        {steps.map(({ index, label }) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 cursor-pointer ${currentStep === index ? 'text-emerald-600' : 'text-gray-500'
                                    }`}
                                onClick={() => handleStepChange(index)}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${currentStep > index
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
                        {StepComponent && <StepComponent id={projectId ?? ''} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributeStepsDemo;
