import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DollarSign, CheckCircle, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from '@/components/ui/label';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Step1 ({id: projectId}: {id: string}){
    const navigate = useNavigate();
    const [rewards, setRewards] = useState([
        { id: 1, amount: 25, title: 'Early Bird Special', description: 'First 100 backers get exclusive access', selected: false },
        { id: 2, amount: 50, title: 'Starter Pack', description: 'Basic package with core features', selected: false },
        { id: 3, amount: 100, title: 'Premium Package', description: 'Full access with bonus materials', selected: false },
        { id: 4, amount: 250, title: 'VIP Experience', description: 'Exclusive perks and direct access', selected: false }
    ]);

    const toggleReward = (id: number | string) => {
        setRewards(rewards.map(reward =>
            reward.id === id ? { ...reward, selected: !reward.selected } : reward
        ));
    };
    const projectSummary = {
        title: "Innovative Smart Garden System",
        category: "Technology",
        goal: "$25,000",
        duration: "45 days",
        description: "A revolutionary IoT-based garden management system that helps users grow plants efficiently with automated watering, lighting, and monitoring.",
    };

    return (
        <div className="space-y-6">
            {/* Project Preview */}
            <Card>
                <CardHeader>
                    <CardTitle>Project Preview</CardTitle>
                    <CardDescription>This is the project you’re supporting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="border-l-4 border-emerald-500 pl-4">
                        <h3 className="text-xl font-bold text-gray-900">{projectSummary.title}</h3>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <Badge variant="outline">{projectSummary.category}</Badge>
                            <span>Goal: {projectSummary.goal}</span>
                            <span>Duration: {projectSummary.duration}</span>
                        </div>
                    </div>
                    <p className="text-gray-700">{projectSummary.description}</p>
                </CardContent>
            </Card>

            {/* Amount */}
            <div>
                <Label htmlFor="amount">Amount ($)</Label>
                <Input
                    id="amount"
                    type="number"
                    placeholder="0"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {rewards.map((reward) => (
                    <Card
                        key={reward.id}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${reward.selected ? 'ring-2 ring-emerald-500 bg-emerald-50' : 'hover:shadow-md'
                            }`}
                        onClick={() => toggleReward(reward.id)}
                    >
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-2">
                                    <DollarSign className="w-5 h-5 text-emerald-600" />
                                    <CardTitle className="text-lg">${reward.amount}</CardTitle>
                                </div>
                                {reward.selected && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                            </div>
                            <CardDescription className="font-medium text-gray-900">{reward.title}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-gray-600">{reward.description}</p>
                            <div className="flex items-center gap-2 mt-3">
                                <Calendar className="w-4 h-4 text-gray-400" />
                                <span className="text-xs text-gray-500">Est. delivery: Dec 2025</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-between">
                <Button variant="outline" disabled onClick={() => navigate(`/project-contribute/${projectId}?step=1`)}>Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate(`/project-contribute/${projectId}?step=2`)}>
                    Continue
                </Button>
            </div>
        </div>
    );
};