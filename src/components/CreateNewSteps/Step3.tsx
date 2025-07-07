// Step3.tsx
import React, { useState } from "react";
import type { Reward } from "@/types/reward";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from 'uuid';

interface Step3Props {
    projectData: {
        rewards?: Reward[];
    };
    setProjectData: (data: any) => void;
}


const Step3: React.FC<Step3Props> = ({ projectData, setProjectData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [newReward, setNewReward] = useState<Reward>({
        id: "",
        title: "",
        description: "",
        amount: 0,
    });

    const addReward = () => {
        if (!newReward.title || newReward.amount <= 0) return;

        const rewardWithId = {
            ...newReward,
            id: uuidv4(), // random id cho an toàn
        };

        setProjectData((prev: any) => ({
            ...prev,
            rewards: [...(prev.rewards || []), rewardWithId],
        }));

        setNewReward({ id: "", title: "", description: "", amount: 0 });
    };


    const removeReward = (index: number) => {
        const updated = [...projectData.rewards || []];
        updated.splice(index, 1);
        setProjectData((prev: any) => ({
            ...prev,
            rewards: updated,
        }));
    };

    return (
        <div className="space-y-6">
            {/* Add New Reward */}
            <div className="space-y-3">
                <h3 className="font-medium text-gray-800">Thêm phần thưởng mới</h3>
                <input
                    type="text"
                    placeholder="Tên phần thưởng"
                    className="w-full rounded-md border-gray-300"
                    value={newReward.title}
                    onChange={(e) => setNewReward({ ...newReward, title: e.target.value })}
                />
                <textarea
                    rows={2}
                    placeholder="Mô tả"
                    className="w-full rounded-md border-gray-300"
                    value={newReward.description}
                    onChange={(e) => setNewReward({ ...newReward, description: e.target.value })}
                />
                <input
                    type="number"
                    placeholder="Số tiền yêu cầu (VNĐ)"
                    className="w-full rounded-md border-gray-300"
                    value={newReward.amount}
                    onChange={(e) =>
                        setNewReward({ ...newReward, amount: parseInt(e.target.value) || 0 })
                    }
                />
                <button
                    type="button"
                    className="text-sm text-emerald-600 hover:underline"
                    onClick={addReward}
                >
                    + Thêm phần thưởng
                </button>
            </div>

            {/* Reward List */}
            <div className="space-y-2">
                <h3 className="font-medium text-gray-800">Danh sách phần thưởng</h3>
                {(projectData.rewards || []).map((r, idx) => (
                    <div
                        key={idx}
                        className="p-4 border rounded-md flex justify-between items-start bg-gray-50"
                    >
                        <div>
                            <p className="font-semibold">{r.title}</p>
                            <p className="text-sm text-gray-600">{r.description}</p>
                            <p className="text-sm text-gray-800 mt-1">
                                Tối thiểu: {r.amount.toLocaleString()} VNĐ
                            </p>
                        </div>
                        <button
                            onClick={() => removeReward(idx)}
                            className="text-red-500 text-sm hover:underline"
                        >
                            Xóa
                        </button>
                    </div>
                ))}
                {(projectData.rewards || []).length === 0 && (
                    <p className="text-sm text-gray-500">Chưa có phần thưởng nào</p>
                )}
            </div>
            <div className="flex justify-between pt-2 gap-2">
                <Button variant="outline" onClick={() => navigate("/create-project?step=2")}>
                        <ArrowLeft className="w-4 h-4 mr-1" /> {t("back")}
                </Button>
                <Button
                onClick={() => navigate("/create-project?step=4")}
                >
                    {t("continue")} <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
            </div>
        </div>
    );
};

export default Step3;
