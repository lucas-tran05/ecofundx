import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
        {
            id: "1",
            title: 'Nông trường năng lượng mặt trời',
            description: 'Dự án điện mặt trời quy mô lớn với công suất 50MW',
            image: '/api/placeholder/300/200',
            category: 'Năng lượng',
            progress: 75,
            raised: 2.5,
            target: 3.2,
            color: 'bg-green-500'
        },
        {
            id: "2",
            title: 'Nhà máy tái chế thông minh',
            description: 'Công nghệ tái chế tiên tiến cho rác thải nhựa',
            image: '/api/placeholder/300/200',
            category: 'Tái chế',
            progress: 60,
            raised: 1.5,
            target: 3.0,
            color: 'bg-blue-500'
        },
        {
            id: "3",
            title: 'Nông nghiệp hữu cơ thông minh',
            description: 'Hệ thống nông nghiệp sạch với công nghệ IoT',
            image: '/api/placeholder/300/200',
            category: 'Nông nghiệp',
            progress: 45,
            raised: 1.0,
            target: 2.0,
            color: 'bg-green-500'
        }
    ];

const ProjectsPage = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const visibleProjects = projects.slice(0, visibleCount);

    return (
        <div className="container mx-auto py-20 px-4 sm:px-10 lg:px-20">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {visibleCount < projects.length && (
                <div className="flex justify-center mt-10">
                    <Button
                        onClick={handleLoadMore}
                        className="bg-green-600 text-white hover:bg-green-700"
                    >
                        Xem thêm
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProjectsPage;
