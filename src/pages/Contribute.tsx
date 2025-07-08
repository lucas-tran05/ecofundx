import { useState } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Info, CreditCard, Eye, Star, Calendar, DollarSign, MapPin, User, Building, CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// Step 1: Rewards
const Step1 = () => {
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
                <Button variant="outline" disabled>Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Continue to Project Info
                </Button>
            </div>
        </div>
    );
};

// Step 2: Info
const Step2 = () => {
    const [backerInfo, setBackerInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        shippingAddress: '',
        shippingCity: '',
        shippingState: '',
        shippingCountry: '',
        shippingPostalCode: '',
        sameAsShipping: true,
        specialInstructions: ''
    });

    const countries = [
        'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Japan', 'Vietnam', 'Singapore', 'Thailand'
    ];

    const handleInputChange = (field: string, value: string) => {
        setBackerInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const toggleSameAsShipping = () => {
        setBackerInfo(prev => ({
            ...prev,
            sameAsShipping: !prev.sameAsShipping
        }));
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>We need this to send you rewards and updates</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                                id="fullName"
                                placeholder="John Doe"
                                value={backerInfo.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={backerInfo.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            placeholder="+1 (555) 123-4567"
                            value={backerInfo.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Billing Address
                    </CardTitle>
                    <CardDescription>For payment processing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="address">Street Address *</Label>
                        <Input
                            id="address"
                            placeholder="123 Main Street"
                            value={backerInfo.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="city">City *</Label>
                            <Input
                                id="city"
                                placeholder="New York"
                                value={backerInfo.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="state">State/Province</Label>
                            <Input
                                id="state"
                                placeholder="NY"
                                value={backerInfo.state}
                                onChange={(e) => handleInputChange('state', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="country">Country *</Label>
                            <Select value={backerInfo.country} onValueChange={(value) => handleInputChange('country', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    {countries.map(country => (
                                        <SelectItem key={country} value={country}>{country}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="postalCode">Postal Code *</Label>
                            <Input
                                id="postalCode"
                                placeholder="10001"
                                value={backerInfo.postalCode}
                                onChange={(e) => handleInputChange('postalCode', e.target.value)}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Shipping Address</CardTitle>
                    <CardDescription>Where should we send your rewards?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="sameAsShipping"
                            checked={backerInfo.sameAsShipping}
                            onCheckedChange={toggleSameAsShipping}
                        />
                        <Label htmlFor="sameAsShipping" className="text-sm">
                            Same as billing address
                        </Label>
                    </div>

                    {!backerInfo.sameAsShipping && (
                        <div className="space-y-4 pt-4 border-t">
                            <div>
                                <Label htmlFor="shippingAddress">Shipping Address *</Label>
                                <Input
                                    id="shippingAddress"
                                    placeholder="123 Main Street"
                                    value={backerInfo.shippingAddress}
                                    onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="shippingCity">City *</Label>
                                    <Input
                                        id="shippingCity"
                                        placeholder="New York"
                                        value={backerInfo.shippingCity}
                                        onChange={(e) => handleInputChange('shippingCity', e.target.value)}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="shippingState">State/Province</Label>
                                    <Input
                                        id="shippingState"
                                        placeholder="NY"
                                        value={backerInfo.shippingState}
                                        onChange={(e) => handleInputChange('shippingState', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="shippingCountry">Country *</Label>
                                    <Select value={backerInfo.shippingCountry} onValueChange={(value) => handleInputChange('shippingCountry', value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select country" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {countries.map(country => (
                                                <SelectItem key={country} value={country}>{country}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label htmlFor="shippingPostalCode">Postal Code *</Label>
                                    <Input
                                        id="shippingPostalCode"
                                        placeholder="10001"
                                        value={backerInfo.shippingPostalCode}
                                        onChange={(e) => handleInputChange('shippingPostalCode', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div>
                        <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
                        <Textarea
                            id="specialInstructions"
                            placeholder="Any special delivery instructions..."
                            rows={3}
                            value={backerInfo.specialInstructions}
                            onChange={(e) => handleInputChange('specialInstructions', e.target.value)}
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Continue to Review
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
                <Button variant="outline" >Previous</Button>
                <Button
                    className="bg-emerald-600 hover:bg-emerald-700"
                    disabled={!agreed}
                >
                    Continue to Payment
                </Button>
            </div>
        </div>
    );
};

// Step 4: Bills/Payment
const Step4 = () => {
    const [paymentMethod, setPaymentMethod] = useState('');

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
                <QRCodeCanvas value="123456789 - Cong ty ABC - Vietcombank" size={192} />
            </Card>

            <div className="flex justify-between">
                <Button variant="outline">Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Cancel
                </Button>
            </div>
        </div>
    );
};

// Demo Container
const ContributeStepsDemo = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        { index: 1, label: 'Rewards', component: Step1 },
        { index: 2, label: 'Info', component: Step2 },
        { index: 3, label: 'Review', component: Step3 },
        { index: 4, label: 'Bills', component: Step4 }
    ];

    const currentStepData = steps.find(step => step.index === currentStep);
    const StepComponent = currentStepData?.component || Step1;

    return (
        <div className="min-h-screen p-8">
            <div className="max-w-4xl mx-auto ">
                {/* Header Navigation */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 md:mb-6">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-emerald-600 self-start"
                        onClick={() => navigate(-1)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Quay lại
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
                        <span>Trang chủ</span>
                        <span>/</span>
                        <span>Project title</span>
                        <span>/</span>
                        <span className="text-emerald-600">Chi tiết bài viết</span>
                    </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                Contribute
                            </span>
                        </h1>
                        <p className="text-gray-600">Join our crowdfunding campaign</p>
                    </div>

                    {/* Step Navigation */}
                    <div className="flex justify-center gap-8 mb-8 flex-wrap">
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