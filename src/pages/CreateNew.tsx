import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Info, CreditCard, Eye, Star, Building, User, Gift } from 'lucide-react';

// Step 1: Personal Information
const Step1 = () => {
    const [projectImages, setProjectImages] = useState([]);
    const [projectVideo, setProjectVideo] = useState(null);
    const handleProjectImageUpload = () => {

    };
    const handleProjectVideoUpload = () => {
        setProjectVideo(null);

    };

    const removeProjectImage = (index: number) => {
        setProjectImages(prev => prev.filter((_, i) => i !== index));
    };

    const [projectInfo, setProjectInfo] = useState({
        title: '',
        category: '',
        description: '',
        goal: '',
        duration: '',
        tags: []
    });

    const categories = [
        'Technology', 'Arts & Crafts', 'Music', 'Film', 'Games', 'Food', 'Fashion', 'Education', 'Health', 'Environment'
    ];

    const popularTags = ['Innovation', 'Sustainable', 'Creative', 'Community', 'Educational', 'Open Source'];


    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Project Media</CardTitle>
                    <CardDescription>Add images and videos to showcase your project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="projectImages">Project Images</Label>
                        <Input
                            id="projectImages"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleProjectImageUpload}
                        />
                        <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB each. Max 5 images.</p>
                    </div>

                    {projectImages.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {projectImages.map((image, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={image}
                                        alt={`Project ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={() => removeProjectImage(index)}
                                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div>
                        <Label htmlFor="projectVideo">Project Video (Optional)</Label>
                        <Input
                            id="projectVideo"
                            type="file"
                            accept="video/*"
                        />
                        <p className="text-xs text-gray-500 mt-1">MP4, MOV up to 100MB</p>
                    </div>

                    {projectVideo && (
                        <div className="w-full max-w-md">
                            <video
                                src={projectVideo}
                                controls
                                className="w-full rounded-lg"
                                style={{ maxHeight: '200px' }}
                                onClick={handleProjectVideoUpload}
                            />
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Basic Details</CardTitle>
                    <CardDescription>Tell us about your project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="title">Project Title *</Label>
                        <Input
                            id="title"
                            placeholder="Enter your project title"
                            value={projectInfo.title}
                            onChange={(e) => setProjectInfo({ ...projectInfo, title: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="category">Category *</Label>
                            <Select value={projectInfo.category} onValueChange={(value) => setProjectInfo({ ...projectInfo, category: value })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categories.map(cat => (
                                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="goal">Funding Goal ($) *</Label>
                            <Input
                                id="goal"
                                type="number"
                                placeholder="10000"
                                value={projectInfo.goal}
                                onChange={(e) => setProjectInfo({ ...projectInfo, goal: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="duration">Campaign Duration</Label>
                        <Select value={projectInfo.duration} onValueChange={(value) => setProjectInfo({ ...projectInfo, duration: value })}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="30">30 days</SelectItem>
                                <SelectItem value="45">45 days</SelectItem>
                                <SelectItem value="60">60 days</SelectItem>
                                <SelectItem value="90">90 days</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label htmlFor="description">Project Description *</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe your project in detail..."
                            rows={4}
                            value={projectInfo.description}
                            onChange={(e) => setProjectInfo({ ...projectInfo, description: e.target.value })}
                        />
                    </div>

                    <div>
                        <Label>Tags</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {popularTags.map(tag => (
                                <Badge
                                    key={tag}
                                    variant={tag ? "default" : "outline"}
                                    className={`cursor-pointer ${tag ? 'bg-emerald-600' : ''}`}
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline" disabled>Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Continue
                </Button>
            </div>
        </div>
    );
};

// Step 2: Info
const Step2 = () => {
    const [customReward, setCustomReward] = useState({
        amount: '',
        title: '',
        description: '',
        image: null as string | null,
        level: 'Bronze',
    });

    const [rewards, setRewards] = useState<typeof customReward[]>([]);

    const handleRewardImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setCustomReward(prev => ({ ...prev, image: reader.result as string }));
        };
        reader.readAsDataURL(file);
    };

    const handleAddReward = () => {
        // basic validation
        if (!customReward.title || !customReward.amount) return alert("Vui lòng điền đầy đủ thông tin!");

        setRewards(prev => [...prev, customReward]);
        setCustomReward({
            amount: '',
            title: '',
            description: '',
            image: null,
            level: 'Bronze',
        });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Project & Rewards</h2>
            </div>

            <Card className="border-dashed border-2 border-gray-300">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Gift className="w-5 h-5" />
                        Create Custom Reward
                    </CardTitle>
                    <CardDescription>Design your own reward tier</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="rewardImage">Reward Image</Label>
                        <Input
                            id="rewardImage"
                            type="file"
                            accept="image/*"
                            onChange={handleRewardImageUpload}
                        />
                        <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 2MB</p>
                    </div>

                    {customReward.image && (
                        <div className="w-32 h-32">
                            <img
                                src={customReward.image}
                                alt="Reward"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="amount">Amount ($)</Label>
                            <Input
                                id="amount"
                                type="number"
                                placeholder="0"
                                value={customReward.amount}
                                onChange={(e) => setCustomReward({ ...customReward, amount: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="rewardTitle">Reward Title</Label>
                            <Input
                                id="rewardTitle"
                                placeholder="e.g., Super Supporter"
                                value={customReward.title}
                                onChange={(e) => setCustomReward({ ...customReward, title: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="rewardLevel">Reward Level</Label>
                            <Select
                                value={customReward.level}
                                onValueChange={(val) => setCustomReward({ ...customReward, level: val })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Bronze">Bronze</SelectItem>
                                    <SelectItem value="Silver">Silver</SelectItem>
                                    <SelectItem value="Gold">Gold</SelectItem>
                                    <SelectItem value="Platinum">Platinum</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="rewardDescription">Description</Label>
                        <Textarea
                            id="rewardDescription"
                            placeholder="Describe what backers will receive..."
                            value={customReward.description}
                            onChange={(e) => setCustomReward({ ...customReward, description: e.target.value })}
                        />
                    </div>

                    <Button type="button" variant="secondary" onClick={handleAddReward}>
                        + Add Reward
                    </Button>
                </CardContent>
            </Card>

            {rewards.length > 0 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Your Rewards</h3>
                    {rewards.map((reward, idx) => (
                        <div key={idx} className="border p-4 rounded-lg bg-white shadow-sm">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold">{reward.title} ({reward.level})</p>
                                    <p className="text-sm text-gray-600">${reward.amount}</p>
                                    <p className="text-sm mt-1">{reward.description}</p>
                                </div>
                                {reward.image && (
                                    <img src={reward.image} alt="reward" className="w-16 h-16 rounded object-cover" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="flex justify-between pt-4">
                <Button variant="outline">Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Continue
                </Button>
            </div>
        </div>
    );
};

// Step 3: Review
const Step3 = () => {
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
                <Button variant="outline">Previous</Button>
                <Button
                    className="bg-emerald-600 hover:bg-emerald-700"
                    disabled={!agreed}
                >
                    Continue
                </Button>
            </div>
        </div>
    );
};

// Step 4: Bills/Payment
const Step4 = () => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [billingInfo, setBillingInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        country: '',
        postalCode: ''
    });

    const fees = {
        platformFee: 150,
        paymentProcessing: 75,
        total: 225
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <CreditCard className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Payment & Billing</h2>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Fee Summary</CardTitle>
                    <CardDescription>Platform fees for your campaign</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>Platform Fee (5%)</span>
                            <span>${fees.platformFee}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Payment Processing (3%)</span>
                            <span>${fees.paymentProcessing}</span>
                        </div>
                        <div className="border-t pt-3">
                            <div className="flex justify-between font-semibold">
                                <span>Total Fees</span>
                                <span>${fees.total}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                            <Info className="w-4 h-4 inline mr-1" />
                            Fees are only charged if your campaign is successful
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>How you'll receive funds</CardDescription>
                </CardHeader>
                <CardContent>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="bank" id="bank" />
                            <Label htmlFor="bank" className="flex items-center gap-2">
                                <Building className="w-4 h-4" />
                                Bank Transfer
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4" />
                                PayPal
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-3 border rounded-lg">
                            <RadioGroupItem value="stripe" id="stripe" />
                            <Label htmlFor="stripe" className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4" />
                                Stripe Connect
                            </Label>
                        </div>
                    </RadioGroup>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Billing Information</CardTitle>
                    <CardDescription>Required for tax and legal purposes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                                id="fullName"
                                placeholder="John Doe"
                                value={billingInfo.fullName}
                                onChange={(e) => setBillingInfo({ ...billingInfo, fullName: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={billingInfo.email}
                                onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            value={billingInfo.phone}
                            onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                        />
                    </div>

                    <div>
                        <Label htmlFor="address">Address *</Label>
                        <Input
                            id="address"
                            placeholder="123 Main Street"
                            value={billingInfo.address}
                            onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                                id="city"
                                placeholder="New York"
                                value={billingInfo.city}
                                onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="country">Country *</Label>
                            <Select value={billingInfo.country} onValueChange={(value) => setBillingInfo({ ...billingInfo, country: value })}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="au">Australia</SelectItem>
                                    <SelectItem value="de">Germany</SelectItem>
                                    <SelectItem value="fr">France</SelectItem>
                                    <SelectItem value="jp">Japan</SelectItem>
                                    <SelectItem value="vn">Vietnam</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="postalCode">Postal Code *</Label>
                            <Input
                                id="postalCode"
                                placeholder="10001"
                                value={billingInfo.postalCode}
                                onChange={(e) => setBillingInfo({ ...billingInfo, postalCode: e.target.value })}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Launch Campaign
                </Button>
            </div>
        </div>
    );
};

// Demo Container
const ContributeStepsDemo = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { index: 1, label: 'Info', component: Step1 },
        { index: 2, label: 'Rewards', component: Step2 },
        { index: 3, label: 'Review', component: Step3 },
        { index: 4, label: 'Bills', component: Step4 }
    ];

    const currentStepData = steps.find(step => step.index === currentStep);
    const StepComponent = currentStepData?.component || Step1;

    return (
        <div className="min-h-screen p-2 md:p-8">
            <div className=" mx-auto">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Create New Project
                            </span>
                        </h1>
                        <p className="text-gray-600">Launch your crowdfunding campaign in 4 simple steps</p>
                    </div>

                    {/* Step Navigation */}
                    <div className="text-xs md:text-sm flex justify-center gap-8 mb-8 flex-wrap">
                        {steps.map(({ index, label }) => (
                            <div
                                key={index}
                                className={`flex items-center gap-2 cursor-pointer ${currentStep === index ? 'text-emerald-600' : 'text-gray-500'
                                    }`}
                                onClick={() => setCurrentStep(index)}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 ${currentStep > index
                                    ? 'bg-emerald-500 text-white border-emerald-500'
                                    : currentStep === index
                                        ? 'bg-white text-emerald-600 border-emerald-500'
                                        : 'bg-gray-100 text-gray-400 border-gray-300'
                                    }`}>
                                    {currentStep > index ? '✓' : index}
                                </div>
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Step Content */}
                    <div className="transition-all duration-300">
                        <StepComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributeStepsDemo;