import InputField from "@/components/InputField"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useTranslation, Trans } from "react-i18next"

export default function RegisterStep2() {
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [form, setForm] = useState({
        fullName: "",
        username: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false
    })

    useEffect(() => {
        const saved = localStorage.getItem("register")
        if (saved) {
            try {
                const parsed = JSON.parse(saved)
                setForm(prev => ({
                    ...prev,
                    ...parsed,
                    terms: !!parsed.terms
                }))
            } catch (err) {
                console.error("Error parsing register data from localStorage", err)
            }
        }
    }, [])


    const handleChange = (field: string, value: string) => {
        setForm(prev => ({ ...prev, [field]: value }))
    }

    const isFormValid = () => {
        return (
            form.fullName.trim() &&
            form.phone.trim() &&
            form.password &&
            form.confirmPassword &&
            form.password === form.confirmPassword &&
            form.terms
        )
    }

    const handleSubmit = () => {
        if (!isFormValid()) return

        const prev = JSON.parse(localStorage.getItem("register") || "{}")

        localStorage.setItem("register", JSON.stringify({
            ...prev,
            ...form
        }))

        navigate("/register?step=3")
    }

    return (
        <div className="flex items-center justify-center bg-white px-4">
            <Card className="w-full max-w-2xl p-6">
                <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <InputField
                                label={t("fullName")}
                                id="fullName"
                                placeholder="John Cooper"
                                value={form.fullName}
                                onChange={(e) => handleChange("fullName", e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <InputField
                                label={t("username")}
                                id="username"
                                placeholder="johncooper"
                                onChange={(e) => handleChange("username", e.target.value)}
                                value={form.username}
                            />
                        </div>
                        <div className="space-y-1 md:col-span-2">
                            <InputField
                                label={t("phone")}
                                id="phone"
                                placeholder="+1 (555) 123-4567"
                                value={form.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                            />
                        </div>
                        <div className="space-y-1 md:col-span-2">
                            <InputField
                                label={t("email")}
                                id="email"
                                placeholder="john@example.com"
                                value={form.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <InputField
                                label={t("password")}
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={form.password}
                                onChange={(e) => handleChange("password", e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <InputField
                                label={t("confirmPassword")}
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                onChange={(e) => handleChange("confirmPassword", e.target.value)}
                            />
                            {form.confirmPassword && form.password !== form.confirmPassword && (
                                <p className="text-red-500 text-sm text-left">{t("password_mismatch")}</p>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                        <Checkbox
                            id="agree"
                            checked={form.terms}
                            onCheckedChange={(val) => setForm(prev => ({ ...prev, terms: !!val }))}
                        />
                        <label htmlFor="agree" className="leading-snug text-left">
                            <Trans
                                i18nKey="terms"
                                t={t}
                                components={{
                                    terms: <a href="#" className="text-emerald-600 underline" />,
                                    agreement: <a href="#" className="underline" />,
                                    privacy: <a href="#" className="underline" />
                                }}
                            />
                        </label>
                    </div>

                    <div className="flex justify-between pt-2 gap-2">
                        <Button variant="outline">
                            <Link to="/register?step=1" className="flex items-center">
                                <ArrowLeft className="w-4 h-4 mr-1" /> {t("back")}
                            </Link>
                        </Button>
                        <Button onClick={handleSubmit} disabled={!isFormValid()}>
                            {t("continue")} <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
