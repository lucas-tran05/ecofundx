import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { User} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// Step 1: Personal Information
export default function Step1 () {
    const navigate = useNavigate();
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
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate(`/startup/create-project?step=2`)}>
                    Continue
                </Button>
            </div>
        </div>
    );
};
