import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Info, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Step 2: Info
export default function Step2() {
    const navigate = useNavigate();
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
                <Button variant="outline" onClick={() => navigate(-1)}>Previous</Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => navigate(`/startup/create-project?step=3`)}>
                    Continue
                </Button>
            </div>
        </div>
    );
};
