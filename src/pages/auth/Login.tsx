import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import InputField from '@/components/InputField';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

// 👉 Component dùng lại trong file

export default function LoginPage() {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const mockData = {
        name: "Nguyễn Văn A",
        email: "vana@example.com",
        role: 1,
        phone: "0987654321",
        avatar_url: "https://i.pravatar.cc/150?u=admin01"
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Xử lý đăng nhập ở đây
        // Giả lập đăng nhập thành công
        localStorage.setItem('user', JSON.stringify(mockData));
        window.location.href = '/'; // Chuyển hướng về trang chính
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                    />

                    <InputField
                        id="password"
                        label={t('password')}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
