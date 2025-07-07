// Step2.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

interface Step2Props {
    projectData: {
        target: number;
        breakdown?: { [key: string]: number };
    };
    setProjectData: (data: any) => void;
}

const Step2: React.FC<Step2Props> = ({ projectData, setProjectData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleBreakdownChange = (key: string, value: number) => {
        setProjectData((prev: any) => ({
            ...prev,
            breakdown: {
                ...prev.breakdown,
                [key]: value,
            },
        }));
    };

    const addBreakdownItem = () => {
        setProjectData((prev: any) => ({
            ...prev,
            breakdown: {
                ...prev.breakdown,
                [`hạng mục ${Object.keys(prev.breakdown).length + 1}`]: 0,
            },
        }));
    };

    const removeBreakdownItem = (key: string) => {
        const updated = { ...projectData.breakdown };
        delete updated[key];
        setProjectData((prev: any) => ({
            ...prev,
            breakdown: updated,
        }));
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700">Số tiền mục tiêu (VNĐ)</label>
                <input
                    type="number"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    value={projectData.target}
                    onChange={(e) =>
                        setProjectData((prev: any) => ({
                            ...prev,
                            target: parseInt(e.target.value) || 0,
                        }))
                    }
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phân bổ (Breakdown)</label>
                <div className="space-y-2">
                    {Object.entries(projectData.breakdown || {}).map(([key, value]) => (
                        <div key={key} className="flex items-center gap-2">
                            <input
                                type="text"
                                className="flex-1 rounded-md border-gray-300"
                                value={key}
                                onChange={(e) => {
                                    const newKey = e.target.value;
                                    setProjectData((prev: any) => {
                                        const newBreakdown = { ...prev.breakdown };
                                        const val = newBreakdown[key];
                                        delete newBreakdown[key];
                                        newBreakdown[newKey] = val;
                                        return { ...prev, breakdown: newBreakdown };
                                    });
                                }}
                            />
                            <input
                                type="number"
                                className="w-32 rounded-md border-gray-300"
                                value={value}
                                onChange={(e) => handleBreakdownChange(key, parseInt(e.target.value) || 0)}
                            />
                            <button
                                type="button"
                                className="text-red-500 text-sm hover:underline"
                                onClick={() => removeBreakdownItem(key)}
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="mt-2 text-emerald-600 hover:underline text-sm"
                    onClick={addBreakdownItem}
                >
                    + Thêm hạng mục
                </button>
            </div>
            <div className="flex justify-between pt-2 gap-2">
                <Button variant="outline" onClick={() => navigate("/create-project?step=1")}>
                        <ArrowLeft className="w-4 h-4 mr-1" /> {t("back")}
                </Button>
                <Button
                onClick={() => navigate("/create-project?step=3")}
                >
                    {t("continue")} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
            </div>
        </div>
    );
};

export default Step2;
