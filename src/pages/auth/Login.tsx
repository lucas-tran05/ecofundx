import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import InputField from '@/components/InputField';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { login } from "@/services/authServices";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { t } = useTranslation();
    const [form, setForm] = useState({ email: "", password: ""});
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = await login(form.email, form.password);
        if (!user) {
            alert("Sai email hoặc mật khẩu! Thử lại đi bạn êi.");
            return;
        }
        if(user && user.active === false) {
            navigate("/active?status=pending");
            return;
        }
        const { password, confirmPassword, ...safeUser } = user;
        localStorage.setItem("user", JSON.stringify(safeUser));
        if(user.role === 3) {
            navigate("/admin/dashboard");
        } else if(user.role === 2) {
            navigate("/startup/dashboard");
        }
        else {
            navigate("/");
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-5 bg-muted">
            <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-1 text-center">EcoFundX</h1>
                <p className="text-muted-foreground text-sm mb-6 text-center px-5">
                    {t('welcome-login-sub')}
                </p>
                <form onSubmit={handleSubmit}>
                    <InputField
                        id="email"
                        label="Email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                    />

                    <InputField
                        id="password"
                        label={t('password')}
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        placeholder="••••••••"
                    />

                    <Button type="submit" className="w-full mt-4">
                        {t('login')}
                    </Button>

                </form>
                <div className="mt-6">
                    <div className="text-center text-gray-500 text-sm pb-4">{t('or-continue-with')}</div>
                    <div className="flex justify-center gap-4">
                        <Button
                            type="button"
                            variant="outline"
                            className=" flex items-center justify-center gap-2"
                            onClick={() => console.log("Login with Google")}
                        >
                            <img src="/assets/images/google.png" alt="Google Icon" className="w-4 h-4" />
                            Google
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className=" flex items-center justify-center gap-2"
                            onClick={() => console.log("Login with GitHub")}
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </Button>
                    </div>
                    <p className="text-sm text-center mt-4">
                        {t('dont-have-an-account')} <Link to="/register" className="text-emerald-600 font-medium hover:underline">{t('register-now')}</Link>
                    </p>
                </div>

            </div>
        </div>
    );
}
