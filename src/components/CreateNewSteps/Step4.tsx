// Step4.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import type { Project } from "@/types/project";

interface Step4Props {
    projectData: Project;
    setProjectData: (data: any) => void; // Không dùng nhiều ở đây nhưng giữ cho đồng bộ
}

const Step4: React.FC<Step4Props> = ({ projectData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false); 

    const handleSubmit = (e: React.FormEvent) => {
        if (!agreed) {
            e.preventDefault();
            alert("Bạn cần xác nhận rằng bạn đã đọc và đồng ý với các điều khoản.");
            return;
        }

    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <h3 className="text-lg font-semibold text-gray-800">Tổng quan dự án</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Tiêu đề:</strong> {projectData.title}</li>
                    <li><strong>Mô tả:</strong> {projectData.description}</li>
                    <li><strong>Danh mục:</strong> {projectData.category}</li>
                    <li>
                        <strong>Số tiền mục tiêu:</strong>{" "}
                        {projectData.target.toLocaleString()} VNĐ
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-800">Phân bổ ngân sách</h3>
                {Object.entries(projectData.breakdown || {}).map(([key, value]) => (
                    <p key={key} className="text-sm text-gray-700">
                        {key}: {value.toLocaleString()} VNĐ
                    </p>
                ))}
                {Object.keys(projectData.breakdown || {}).length === 0 && (
                    <p className="text-sm text-gray-500">Chưa có phân bổ</p>
                )}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-800">Phần thưởng</h3>
                {projectData.rewards && projectData.rewards.length > 0 ? (
                    projectData.rewards.map((r, i) => (
                        <div key={i} className="text-sm text-gray-700 border-b pb-2 mb-2">
                            <p className="font-semibold">{r.title}</p>
                            <p>{r.description}</p>
                            <p>Tối thiểu: {r.amount.toLocaleString()} VNĐ</p>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">Chưa có phần thưởng</p>
                )}
            </div>

            {/* ✅ Checkbox xác nhận */}
            <div className="flex items-start gap-2 text-sm text-gray-700">
                <input
                    type="checkbox"
                    id="agreement"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1"
                />
                <label htmlFor="agreement" className="select-none">
                    Tôi cam kết rằng các thông tin trên là chính xác và tôi chịu trách nhiệm
                    hoàn toàn theo <span className="underline font-medium">pháp luật hiện hành</span>.
                </label>
            </div>
            {/* Continue */}
            <div className="pt-4 flex justify-between gap-2">
                <Button variant="outline" onClick={() => navigate("/register?step=3")}>
                    ← {t('back')}
                </Button>
                <Button onClick={handleSubmit}>
                    Xác nhận & Tạo dự án
                </Button>
            </div>
            
        </form>
    );
};

export default Step4;
