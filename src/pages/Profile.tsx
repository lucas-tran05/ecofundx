import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
import { 
    User, 
    Mail, 
    Phone, 
    MapPin, 
    Calendar, 
    Camera, 
    Save, 
    X,
    Shield,
    Award,
    Heart,
    DollarSign,
    Star,
    Eye,
    EyeOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge as UIBadge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ProfilePage: React.FC = () => {
    // const { t } = useTranslation();
    const [isEditing, setIsEditing] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");

    // Mock user data
    const [userProfile, setUserProfile] = useState({
        id: "1",
        username: "johndoe",
        fullname: "John Doe",
        email: "john.doe@example.com",
        phone: "+84 123 456 789",
        address: "Hanoi, Vietnam",
        joinDate: "2023-01-15",
        avatar: "",
        bio: "Passionate about sustainable development and environmental conservation. Love supporting eco-friendly projects!",
        verified: true,
        totalDonated: 50000000,
        projectsSupported: 12,
        averageRating: 4.8,
        badges: ["eco-warrior", "top-supporter", "verified-user"],
        privacy: {
            showEmail: false,
            showPhone: false,
            showDonations: true,
        }
    });

    // Mock activity data
    const recentActivity = [
        {
            id: 1,
            type: "donation",
            project: "Clean Water Initiative",
            amount: 2000000,
            date: "2025-01-05",
            status: "completed"
        },
        {
            id: 2,
            type: "comment",
            project: "Solar Energy Project",
            content: "Great initiative! Looking forward to the results.",
            date: "2025-01-03",
            status: "public"
        },
        {
            id: 3,
            type: "donation",
            project: "Forest Restoration",
            amount: 5000000,
            date: "2024-12-28",
            status: "completed"
        }
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Save logic here
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset form logic here
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount);
    };

    const getBadgeIcon = (badge: string) => {
        switch (badge) {
            case "eco-warrior": return <Heart className="w-4 h-4" />;
            case "top-supporter": return <Star className="w-4 h-4" />;
            case "verified-user": return <Shield className="w-4 h-4" />;
            default: return <Award className="w-4 h-4" />;
        }
    };

    const getBadgeColor = (badge: string) => {
        switch (badge) {
            case "eco-warrior": return "bg-green-500";
            case "top-supporter": return "bg-yellow-500";
            case "verified-user": return "bg-blue-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-8">
            <div className="mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="relative mb-8">
                    {/* Cover Photo */}
                    <div className="h-48 md:h-64 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 right-4">
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
                            >
                                <Camera className="w-4 h-4 mr-2" />
                                Change Cover
                            </Button>
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-10 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                    </div>

                    {/* Profile Info */}
                    <div className="relative -mt-16 px-6">
                        <div className="flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6">
                            {/* Avatar */}
                            <div className="relative group">
                                <Avatar className="w-32 h-32 ring-4 ring-white shadow-xl">
                                    <AvatarImage src={userProfile.avatar} />
                                    <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-2xl font-bold">
                                        {userProfile.fullname[0]}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                                    <Camera className="w-6 h-6 text-white" />
                                </div>
                                {userProfile.verified && (
                                    <div className="absolute -bottom-2 -right-2 bg-blue-500 rounded-full p-2 ring-4 ring-white">
                                        <Shield className="w-4 h-4 text-white" />
                                    </div>
                                )}
                            </div>

                            {/* User Info */}
                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start space-x-3">
                                    <h1 className="text-3xl font-bold text-accent">{userProfile.fullname}</h1>
                                    {userProfile.verified && (
                                        <UIBadge className="bg-blue-500 text-white hover:bg-blue-500">
                                            <Shield className="w-3 h-3 mr-1" />
                                            Verified
                                        </UIBadge>
                                    )}
                                </div>
                                <p className="text-accent mb-4">@{userProfile.username}</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                                    {userProfile.badges.map((badge) => (
                                        <UIBadge
                                            key={badge}
                                            variant="secondary"
                                            className={`${getBadgeColor(badge)} text-white hover:${getBadgeColor(badge)}`}
                                        >
                                            {getBadgeIcon(badge)}
                                            <span className="ml-1 capitalize">{badge.replace('-', ' ')}</span>
                                        </UIBadge>
                                    ))}
                                </div>
                                <p className="text-gray-700 max-w-md">{userProfile.bio}</p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex space-x-3">
                                <Button
                                    onClick={() => setIsEditing(!isEditing)}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
                                >
                                    Edit Profile
                                </Button>
                                <Button variant="outline">
                                    Settings
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-emerald-100 text-sm font-medium">Total Donated</p>
                                    <p className="text-2xl font-bold">{formatCurrency(userProfile.totalDonated)}</p>
                                </div>
                                <DollarSign className="w-8 h-8 text-emerald-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-blue-100 text-sm font-medium">Projects Supported</p>
                                    <p className="text-2xl font-bold">{userProfile.projectsSupported}</p>
                                </div>
                                <Heart className="w-8 h-8 text-blue-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-orange-100 text-sm font-medium">Average Rating</p>
                                    <p className="text-2xl font-bold">{userProfile.averageRating} ★</p>
                                </div>
                                <Star className="w-8 h-8 text-orange-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-purple-500 to-pink-600 text-white border-0 shadow-lg">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-purple-100 text-sm font-medium">Member Since</p>
                                    <p className="text-2xl font-bold">{new Date(userProfile.joinDate).getFullYear()}</p>
                                </div>
                                <Calendar className="w-8 h-8 text-purple-200" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-2">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="activity">Activity</TabsTrigger>
                    </TabsList>

                    {/* Overview Tab */}
                    <TabsContent value="overview" className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Personal Information */}
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <User className="w-5 h-5 text-emerald-600" />
                                        <span>Personal Information</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {isEditing ? (
                                        <div className="space-y-4">
                                            <div>
                                                <Label htmlFor="fullname">Full Name</Label>
                                                <Input
                                                    id="fullname"
                                                    value={userProfile.fullname}
                                                    onChange={(e) => setUserProfile({...userProfile, fullname: e.target.value})}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={userProfile.email}
                                                    onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="phone">Phone</Label>
                                                <Input
                                                    id="phone"
                                                    value={userProfile.phone}
                                                    onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="address">Address</Label>
                                                <Input
                                                    id="address"
                                                    value={userProfile.address}
                                                    onChange={(e) => setUserProfile({...userProfile, address: e.target.value})}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="bio">Bio</Label>
                                                <Textarea
                                                    id="bio"
                                                    value={userProfile.bio}
                                                    onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                                                    rows={3}
                                                />
                                            </div>
                                            <div className="flex space-x-2">
                                                <Button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-700">
                                                    <Save className="w-4 h-4 mr-2" />
                                                    Save
                                                </Button>
                                                <Button onClick={handleCancel} variant="outline">
                                                    <X className="w-4 h-4 mr-2" />
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <Mail className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-700">
                                                    {userProfile.privacy.showEmail ? userProfile.email : 
                                                        <span className="flex items-center space-x-2">
                                                            <span>***@***.com</span>
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => setShowEmail(!showEmail)}
                                                            >
                                                                {showEmail ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                                            </Button>
                                                        </span>
                                                    }
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Phone className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-700">
                                                    {userProfile.privacy.showPhone ? userProfile.phone : "*** *** ***"}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-700">{userProfile.address}</span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-700">
                                                    Member since {new Date(userProfile.joinDate).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>

                            {/* Achievements */}
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <Award className="w-5 h-5 text-emerald-600" />
                                        <span>Achievements</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 gap-4">
                                        <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                                <Heart className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Eco Warrior</p>
                                                <p className="text-sm text-gray-600">Donated to 10+ environmental projects</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                                            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                                <Star className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Top Supporter</p>
                                                <p className="text-sm text-gray-600">One of the top 100 donors this year</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                                <Shield className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">Verified User</p>
                                                <p className="text-sm text-gray-600">Identity verified and trusted</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* Activity Tab */}
                    <TabsContent value="activity">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle>Recent Activity</CardTitle>
                                <CardDescription>Your recent donations and interactions</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivity.map((activity) => (
                                        <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                                activity.type === 'donation' 
                                                    ? 'bg-green-500' 
                                                    : 'bg-blue-500'
                                            }`}>
                                                {activity.type === 'donation' ? (
                                                    <DollarSign className="w-5 h-5 text-white" />
                                                ) : (
                                                    <User className="w-5 h-5 text-white" />
                                                )}
                                            </div>
                                            <div className="flex-1">
                                                <p className="font-semibold text-gray-900">{activity.project}</p>
                                                {activity.type === 'donation' ? (
                                                    <p className="text-sm text-gray-600">
                                                        {/* Donated {formatCurrency(activity.amount)} */}
                                                    </p>
                                                ) : (
                                                    <p className="text-sm text-gray-600">{activity.content}</p>
                                                )}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {new Date(activity.date).toLocaleDateString()}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default ProfilePage;