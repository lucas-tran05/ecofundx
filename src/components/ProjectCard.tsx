import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Users, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Card className="group overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border-0 bg-white max-w-md">
            {/* Header với gradient và overlay effects */}
            <div className="h-48 sm:h-52 md:h-56 bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600 relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg border-0 px-3 py-1 font-medium">
                        {project.category}
                    </Badge>
                </div>

                {/* Stats overlay */}
                <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                        <Users className="h-4 w-4 text-gray-600" />
                        <span className="text-sm font-medium text-gray-800">
                            {Math.floor(Math.random() * 200) + 50} supporters
                        </span>
                    </div>
                </div>

                {/* Main icon */}
                <div className="absolute bottom-4 right-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Leaf className="h-6 w-6 text-emerald-600" />
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
            </div>

            <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                            {project.description}
                        </CardDescription>
                    </div>
                    <div className="ml-4 flex items-center gap-1 text-red-500">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm font-medium">
                            {Math.floor(Math.random() * 50) + 10}
                        </span>
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="space-y-5">
                    {/* Funding information */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-emerald-600">
                                    ${(project.raised * 100000).toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">
                                    Raised
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-semibold text-gray-700">
                                    ${(project.target * 100000).toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-500 uppercase tracking-wide">
                                    Target
                                </div>
                            </div>
                        </div>

                        {/* Progress bar */}
                        <div className="relative">
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                    className={`${project.progress === 100
                                            ? "bg-gradient-to-r from-emerald-500 to-green-600"
                                            : "bg-gradient-to-r from-blue-500 to-teal-600"
                                        } h-3 rounded-full transition-all duration-700 ease-out relative`}
                                    style={{ width: `${project.progress}%` }}
                                >
                                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1 text-gray-600">
                                <Calendar className="h-4 w-4" />
                                <span className="text-sm">
                                    {Math.floor(Math.random() * 30) + 5} days left
                                </span>
                            </div>
                            <div className="text-sm font-bold text-emerald-600">
                                {t("h-projects.progress", { progress: project.progress })}
                            </div>
                        </div>

                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-2 rounded-full font-medium"
                            onClick={() => navigate("/project-view/" + project.id)}
                        >
                            {t("common.view-details")}
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}