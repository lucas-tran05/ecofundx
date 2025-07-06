import { Link, useParams } from "react-router-dom";
import type { Project } from "@/types/project";
import { Button } from "@/components/ui/button";

export default function ProjectViewPage() {
    const { id } = useParams<{ id: string }>();

    // ⚠ Mock data để test (sau thay bằng API fetch hoặc context)
    const mockProjects: Project[] = [
        {
            id: "1",
            title: "Hệ thống tái chế thông minh",
            description: "Ứng dụng AI để tối ưu phân loại rác.",
            category: "Môi trường",
            raised: 2,
            target: 5,
            progress: 40,
            color: "bg-green-500",
        },
        {
            id: "2",
            title: "Ứng dụng giáo dục blockchain",
            description: "Dạy trẻ em kiến thức Web3 từ nhỏ.",
            category: "Giáo dục",
            raised: 3,
            target: 6,
            progress: 50,
            color: "bg-blue-500",
        },
    ];

    const project = mockProjects.find((p) => p.id === id);

    if (!project) {
        return <div className="text-center text-red-600 mt-10">Project không tồn tại </div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <Button asChild>
                <Link to={`/project-contribute/${project.id}?step=1`}>
                Contribute
                </Link>
            </Button>
        </div>
    );
}
