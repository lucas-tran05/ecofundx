import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Camera, Trash2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"
import { register } from "@/services/authServices"

export default function Step3() {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [avatar, setAvatar] = useState<string | null>(null)
    const [bio, setBio] = useState("")
    const [links, setLinks] = useState({
        facebook: "",
        twitter: "",
        linkedin: ""
    })

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("register") || "{}")
        if (saved.avatar) setAvatar(saved.avatar)
        if (saved.bio) setBio(saved.bio)
        if (saved.social) setLinks(saved.social)
    }, [])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setAvatar(url)

            // OPTIONAL: bạn có thể upload lên server và lấy URL thật tại đây
        }
    }

    const handleSubmit = async () => {
        try {
            const prev = JSON.parse(localStorage.getItem("register") || "{}");
            const payload = {
                ...prev,
                avatar,
                bio,
                social: links,
                type: "normal"
            };
            console.log(payload);
            const response = await register(payload);

            if (response) {
                localStorage.removeItem("register");
                navigate("/active?status=pending");
            } else {
                alert("Đăng ký thất bại. Có gì đó sai sai...");
            }
        } catch (err) {
            console.error("Register error:", err);
            alert("Lỗi khi gửi đăng ký. Thử lại sau nha.");
        }
    };


    return (
        <div className="flex items-center justify-center w-full max-w-screen-xl px-4 bg-white mx-auto">
            <Card className="w-full max-w-2xl p-8">
                <CardContent className="space-y-6">
                    {/* Avatar upload */}
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <img
                                src={avatar || "/assets/images/default-avatar.png"}
                                alt="avatar"
                                className="w-20 h-20 rounded-full object-cover border"
                            />
                            <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow cursor-pointer">
                                <Camera className="w-4 h-4 text-green-600" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        {avatar && (
                            <Button
                                variant="ghost"
                                className="text-red-500 p-0 h-auto"
                                onClick={() => setAvatar(null)}
                            >
                                <Trash2 className="w-4 h-4 mr-1" /> {t('remove-avatar')}
                            </Button>
                        )}
                    </div>

                    {/* Bio */}
                    <div className="space-y-1 text-left">
                        <Label htmlFor="bio">{t("bio")}</Label>
                        <Textarea
                            id="bio"
                            placeholder={t("bio-placeholder")}
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>

                    {/* Social Links */}
                    <div className="space-y-1 text-left">
                        <Label>{t('social-media-links')}</Label>
                        <div className="space-y-3 mt-2">
                            <Input
                                placeholder={t('facebook-profile-url')}
                                value={links.facebook}
                                onChange={(e) => setLinks({ ...links, facebook: e.target.value })}
                            />
                            <Input
                                placeholder={t('twitter-profile-url')}
                                value={links.twitter}
                                onChange={(e) => setLinks({ ...links, twitter: e.target.value })}
                            />
                            <Input
                                placeholder={t('linkedin-profile-url')}
                                value={links.linkedin}
                                onChange={(e) => setLinks({ ...links, linkedin: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Continue */}
                    <div className="pt-4 flex justify-between gap-2">
                        <Button variant="outline" onClick={() => navigate("/register?step=2")}>
                            ← {t('back')}
                        </Button>
                        <Button onClick={handleSubmit}>
                            {t('submit')} →
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
