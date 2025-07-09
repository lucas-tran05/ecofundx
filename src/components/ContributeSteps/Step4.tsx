import { useState } from 'react';
import { QRCodeCanvas } from "qrcode.react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Info, CreditCard, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Step 4: Bills/Payment
export default function Step4({id: projectId}: {id: string}) {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState('');

    const fees = {
        platformFee: 150,
        paymentProcessing: 75,
        total: 225
    };

    const handelCancel = () => {};

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
                <QRCodeCanvas value={`${projectId} + ${paymentMethod} + ${fees.total} chuyen khoan du an`} size={192} />
            </Card>

            <div className="flex justify-between">
                <Button variant="outline" onClick={() => navigate(-1)}>Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={handelCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    );
};