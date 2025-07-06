import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import  type { Project } from "@/types/project";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Card
            key={project.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
            <div className="h-48 sm:h-52 md:h-56 bg-gradient-to-br from-green-400 to-blue-500 relative">
                <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-800">{project.category}</Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                    <div className="bg-white rounded-full p-2">
                        <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                </div>
            </div>
            <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                            {t("h-projects.raised", { amount: project.raised * 100000 })}
                        </span>
                        <span className="text-gray-600">
                            {t("h-projects.target", { amount: project.target * 100000 })}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className={`${project.color} h-2 rounded-full transition-all duration-300`}
                            style={{ width: `${project.progress}%` }}
                        ></div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                            {t("h-projects.progress", { progress: project.progress })}
                        </span>
                        <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
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
