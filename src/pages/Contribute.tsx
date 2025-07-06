import { useParams, useSearchParams } from "react-router-dom";
import type { Project } from "@/types/project";

export default function ProjectContributePage() {
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();
    const step = searchParams.get("step"); // <-- lấy query string `step`

    // ⚠ Mock data (sau thay bằng fetch hoặc context)
    const mockProjects: Project[] = [
        {
            id: "1",
            title: "Hệ thống tái chế thông minh",
            description: "Ứng dụng AI để tối ưu phân loại rác.",
            category: "Môi trường",
            raised: 2,
            target: 5,
            progress: 40,
        },
        {
            id: "2",
            title: "Ứng dụng giáo dục blockchain",
            description: "Dạy trẻ em kiến thức Web3 từ nhỏ.",
            category: "Giáo dục",
            raised: 3,
            target: 6,
            progress: 50,
        },
    ];

    const project = mockProjects.find((p) => p.id === id);

    if (!project) {
        return <div className="text-center text-red-600 mt-10">Project không tồn tại</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Góp vốn: {project.title}</h1>

            <p className="mb-4">Bạn đang ở bước: <strong>{step || "1 (default)"}</strong></p>

            {/* Tuỳ bước render khác nhau */}
            {step === "1" && <p>👉 Bước 1: Nhập số tiền bạn muốn góp</p>}
            {step === "2" && <p>👉 Bước 2: Chọn phương thức thanh toán</p>}
            {step === "3" && <p>👉 Bước 3: Xác nhận & hoàn tất</p>}

            {/* ... thêm form / logic ở đây tuỳ bước */}
        </div>
    );
}
