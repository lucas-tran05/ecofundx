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
    },
    {
        id: "3",
        title: 'Nông nghiệp hữu cơ thông minh',
        description: 'Hệ thống nông nghiệp sạch với công nghệ IoT',
        image: '/api/placeholder/300/200',
        category: 'Nông nghiệp',
        progress: 100,
        raised: 1.0,
        target: 2.0,
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
    }
];

const ProjectsPage = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const visibleProjects = projects.slice(0, visibleCount);

    return (
        <div className="min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
                {/* Floating Eco Elements */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-emerald-400 opacity-10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-400 opacity-15 rotate-12 animate-pulse"></div>

                {/* Leaf-like Shapes */}
                <div className="absolute top-1/2 left-10 w-8 h-16 bg-green-500 opacity-20 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/3 right-10 w-6 h-12 bg-emerald-500 opacity-25 rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '5s' }}></div>

                {/* Gradient Orbs */}
                <div className="absolute top-10 left-1/2 w-40 h-40 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-r from-teal-200 to-green-300 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 container mx-auto px-6 py-8">
                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {visibleProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < projects.length && (
                    <div className="flex justify-center">
                        <Button
                            onClick={handleLoadMore}
                            className="bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Xem thêm dự án
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;