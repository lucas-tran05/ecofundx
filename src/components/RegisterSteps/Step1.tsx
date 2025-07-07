import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { CheckCircle, UserPlus, Github } from "lucide-react"
import {  useNavigate } from "react-router-dom"

export default function RegisterStep1() {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [selected, setSelected] = useState<1 | 2 | null>(null)

    useEffect(() => {
        const saved = localStorage.getItem("register")
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                if (parsed?.role === 1 || parsed?.role === 2) {
                    setSelected(parsed.role)
                }
            } catch (err) {
                console.error("Invalid register data in localStorage:", err)
            }
        }
    }, [])

    const accountTypes = [
        {
            id: 1,
            title: "Project Creator",
            subtitle: "Nhà kêu gọi vốn",
            icon: <UserPlus className="w-5 h-5 text-green-600" />,
        },
        {
            id: 2,
            title: "Investor",
            subtitle: "Người đóng góp",
            icon: <CheckCircle className="w-5 h-5 text-green-600" />,
        },
    ]

    const handleContinue = () => {
        if (!selected) {
            alert(t('please-select-account-type'))
            return
        }

        // Có thể stringify nếu bạn muốn lưu chuẩn
        const prev = JSON.parse(localStorage.getItem("register") || "{}")

        localStorage.setItem("register", JSON.stringify({
            ...prev,
            role: selected
        }))

        navigate("/register?step=2")
    }

    return (
        <div className="max-w-xl mx-auto space-y-6 md:px-16">
            {/* Role Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {accountTypes.map((type) => (
                    <Card
                        key={type.id}
                        onClick={() => setSelected(type.id as 1 | 2)}
                        className={cn(
                            "cursor-pointer border-2 transition-all duration-200",
                            selected === type.id
                                ? "border-emerald-500 bg-emerald-50"
                                : "border-gray-200 hover:border-emerald-400"
                        )}
                    >
                        <CardContent className="p-4 flex items-center gap-4">
                            {type.icon}
                            <div>
                                <div className="font-semibold text-gray-900">{type.title}</div>
                                <div className="text-sm text-gray-500">{type.subtitle}</div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Continue Button */}
            <Button className="w-full" variant="default" onClick={handleContinue}>
                {t('continue')} →
            </Button>

            {/* Social Login */}
            <div className="text-center text-gray-500 text-sm">{t('or-continue-with')}</div>
            <div className="flex justify-center gap-4">
                <Button
                    type="button"
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    onClick={() => console.log("Login with Google")}
                >
                    <img src="/assets/images/google.png" alt="Google Icon" className="w-4 h-4" />
                    Google
                </Button>
                <Button
                    type="button"
                    variant="outline"
                    className="flex items-center justify-center gap-2"
                    onClick={() => console.log("Login with GitHub")}
                >
                    <Github className="w-4 h-4" />
                    GitHub
                </Button>
            </div>
        </div>
    )
}
