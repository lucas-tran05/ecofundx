import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Info, CreditCard, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Step 4: Bills/Payment
export default function Step4() {
    const navigate = useNavigate();
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

    const handleLaunchCampaign = () => {
        console.log('Launched campaign!');
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
                <Button variant="outline" onClick={() => navigate(-1)}>Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handleLaunchCampaign}>
                    Launch Campaign
                </Button>
            </div>
        </div>
    );
};