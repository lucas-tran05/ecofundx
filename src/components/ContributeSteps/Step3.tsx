import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, Star} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Step 3: Review
export default function Step3({id: projectId}: {id: string}) {
    const navigate = useNavigate();
    const [agreed, setAgreed] = useState(false);

    const projectSummary = {
        title: "Innovative Smart Garden System",
        category: "Technology",
        goal: "$25,000",
        duration: "45 days",
        description: "A revolutionary IoT-based garden management system that helps users grow plants efficiently with automated watering, lighting, and monitoring.",
    };

    const contributionAmount = "100";
    const selectedReward = [
        { amount: 25, title: "Early Bird Special", backers: 0 },
        { amount: 50, title: "Starter Pack", backers: 0 },
    ];


    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Review Your Contribution</h2>
            </div>

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
            {/* Contribution Summary */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-500" />
                        Contribution Summary
                    </CardTitle>
                    <CardDescription>Make sure everything looks good before you proceed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="text-gray-700 text-base space-y-2">
                        <p><span className="font-semibold">Amount Contributed:</span> ${contributionAmount}</p>
                        {selectedReward ? (
                            selectedReward.map((reward, index) => (
                                <Card key={index} className='p-4'>
                                    <CardTitle>{reward.title}</CardTitle>
                                    <CardDescription>{reward.amount}</CardDescription>
                                </Card>
                            ))
                        ) : (
                            <p><i>No reward selected</i></p>
                        )}
                    </div>
                </CardContent>
            </Card>
            {/* Address Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Address Information</CardTitle>
                    <CardDescription>Required for tax and legal purposes</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 text-sm text-gray-600">
                        <p><span className="font-semibold">Name:</span> John Doe</p>
                        <p><span className="font-semibold">Address:</span> 123 Main St, Anytown, USA</p>
                        <p><span className="font-semibold">Phone:</span> (123) 456-7890</p>
                        <p><span className="font-semibold">City:</span> Anytown</p>
                        <p><span className="font-semibold">Country:</span> USA</p>
                        <p><span className="font-semibold">Postal Code:</span> 12345</p>
                    </div>
                </CardContent>
            </Card>

            {/* Agreement */}
            <Card>
                <CardHeader>
                    <CardTitle>Terms & Conditions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4 text-sm text-gray-600">
                        <p>By submitting this contribution, you agree to:</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Backing this project voluntarily</li>
                            <li>Understanding rewards may take time to deliver</li>
                            <li>Complying with platform policies</li>
                        </ul>
                    </div>

                    <div className="flex items-center space-x-2 mt-6">
                        <Checkbox
                            id="agree"
                            checked={agreed}
                            onCheckedChange={(checked) => setAgreed(!!checked)}
                        />
                        <Label htmlFor="agree" className="text-sm">
                            I agree to the terms and privacy policy
                        </Label>
                    </div>
                </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between">
                <Button variant="outline" onClick={() => navigate(-1)}>Previous</Button>
                <Button
                    className="bg-emerald-600 hover:bg-emerald-700"
                    disabled={!agreed}
                    onClick={() => navigate(`/project-contribute/${projectId}?step=4`)}
                >
                    Continue to Payment
                </Button>
            </div>
        </div>
    );
};