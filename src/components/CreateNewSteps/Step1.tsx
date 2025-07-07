// Step1.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Step1Props {
    projectData: {
        title: string;
        description: string;
        category: string;
    };
    setProjectData: (data: any) => void;
}

const Step1: React.FC<Step1Props> = ({ projectData, setProjectData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate("/create-project?step=2");
    };
    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Tiêu đề dự án</label>
                <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    value={projectData.title}
                    onChange={(e) =>
                        setProjectData((prev: any) => ({ ...prev, title: e.target.value }))
                    }
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Mô tả ngắn</label>
                <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    value={projectData.description}
                    onChange={(e) =>
                        setProjectData((prev: any) => ({ ...prev, description: e.target.value }))
                    }
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Danh mục</label>
                <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    value={projectData.category}
                    onChange={(e) =>
                        setProjectData((prev: any) => ({ ...prev, category: e.target.value }))
                    }
                >
                    <option value="">-- Chọn danh mục --</option>
                    <option value="education">Giáo dục</option>
                    <option value="health">Y tế</option>
                    <option value="environment">Môi trường</option>
                    <option value="tech">Công nghệ</option>
                </select>
            </div>
            {/* Continue Button */}
            <div className="flex justify-end">
                <Button variant="default" onClick={handleNextStep}>
                    {t('continue')} →
                </Button>
            </div>
        </div>
    );
};

export default Step1;
