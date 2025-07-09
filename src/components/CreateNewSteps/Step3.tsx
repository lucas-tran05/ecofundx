import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {  Eye, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Step 3: Review
export default function Step3() {
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);

    const projectSummary = {
        title: "Innovative Smart Garden System",
        category: "Technology",
        goal: "$25,000",
        duration: "45 days",
        description: "A revolutionary IoT-based garden management system that helps users grow plants efficiently with automated watering, lighting, and monitoring.",
        rewards: [
            { amount: 25, title: "Early Bird Special", backers: 0 },
            { amount: 50, title: "Starter Pack", backers: 0 },
            { amount: 100, title: "Premium Package", backers: 0 }
        ]
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Review Your Project</h2>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Project Preview
                    </CardTitle>
                    <CardDescription>This is how your project will appear to backers</CardDescription>
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

                    <div>
                        <h4 className="font-semibold mb-3">Reward Tiers:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            {projectSummary.rewards.map((reward, idx) => (
                                <div key={idx} className="border rounded-lg p-3 bg-gray-50">
                                    <div className="font-semibold text-emerald-600">${reward.amount}</div>
                                    <div className="text-sm font-medium">{reward.title}</div>
                                    <div className="text-xs text-gray-500">{reward.backers} backers</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Terms & Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 text-sm text-gray-600">
                        <p>By submitting this project, you agree to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Deliver promised rewards to backers on time</li>
                            <li>Maintain regular communication with supporters</li>
                            <li>Use funds responsibly for project development</li>
                            <li>Follow our community guidelines and terms of service</li>
                            <li>Provide updates on project progress</li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-2 mt-6">
                        <Checkbox
                            id="agree"
                            checked={agreed}
                            onCheckedChange={(checked) => {
                                if (checked === true) setAgreed(true);
                                else setAgreed(false);
                            }}

                        />
                        <Label htmlFor="agree" className="text-sm">
                            I agree to the terms and conditions and privacy policy
                        </Label>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline" onClick={() => navigate(-1)}>Previous</Button>
                <Button
                    className="bg-emerald-600 hover:bg-emerald-700"
                    disabled={!agreed}
                    onClick={() => navigate(`/startup/create-project?step=4`)}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};