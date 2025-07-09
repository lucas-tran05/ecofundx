import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Step2({id: projectId}: {id: string}) {
    const navigate = useNavigate();
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
                <Button variant="outline" onClick={() => navigate(-1)}>Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate(`/project-contribute/${projectId}?step=3`)}>
                    Continue to Review
                </Button>
            </div>
        </div>
    );
}