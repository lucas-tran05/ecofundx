import React, { useState } from 'react';
import type { MouseEvent } from 'react';
import { Github } from 'lucide-react';
import InputField from '@/components/InputField';
import { useNavigate } from 'react-router-dom';

// TypeScript interfaces
interface FormData {
    email: string;
    password: string;
}

interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'outline' | 'primary';
    className?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const EcofundLoginPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<FormData>({ email: '', password: '' });

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Login submitted:', form);
        const user = {
            "id": "1",
            "fullname": "Nguyễn Văn A",
            "username": "nguyenvana",
            "phone": "0912345678",
            "email": "a@example.com",
            "password": "123",
            "confirmPassword": "123",
            "status": true,
            "role": 2,
            "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
            "social": [
                {
                    "facebook": "https://facebook.com/nguyenvana",
                    "twitter": "https://twitter.com/nguyenvana",
                    "linkedin": "https://linkedin.com/in/nguyenvana"
                }
            ],
            "active": true,
            "type": "normal",
            "createdAt": "2023-06-01T00:00:00.000Z",
            "updatedAt": "2023-06-01T00:00:00.000Z"
        }
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
    };

    // Mock translation function
    const t = (key: string): string => {
        const translations: Record<string, string> = {
            'welcome-login-sub': 'Đăng nhập để tiếp tục hành trình bảo vệ môi trường',
            'password': 'Mật khẩu',
            'login': 'Đăng nhập',
            'or-continue-with': 'Hoặc tiếp tục với',
            'dont-have-an-account': 'Chưa có tài khoản?',
            'register-now': 'Đăng ký ngay'
        };
        return translations[key] || key;
    };

    const Button: React.FC<ButtonProps> = ({ children, type = 'button', variant = 'primary', className = '', onClick }) => {
        const baseClasses = "px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]";
        const variantClasses = variant === 'outline'
            ? "border-2 border-gray-300 bg-white text-gray-700 hover:border-green-500 hover:bg-green-50"
            : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl";

        return (
            <button
                type={type}
                onClick={onClick}
                className={`${baseClasses} ${variantClasses} ${className}`}
            >
                {children}
            </button>
        );
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-5">
            {/* Main Content */}
            <div className="relative z-10 w-full max-w-sm">
                <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
                    <h1 className="text-3xl font-bold mb-1 text-center">
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            Ecofund
                        </span>
                        <span className="text-gray-800 ml-1">X</span>
                    </h1>
                    <p className="text-gray-600 text-sm mb-6 text-center px-2">
                        {t('welcome-login-sub')}
                    </p>

                    <div>
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

                        <Button
                            type="button"
                            variant="primary"
                            className="w-full mt-6"
                            onClick={handleSubmit}
                        >
                            {t('login')}
                        </Button>
                    </div>

                    <div className="mt-6">
                        <div className="text-center text-gray-600 text-sm pb-4">
                            {t('or-continue-with')}
                        </div>
                        <div className="flex justify-center gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="flex items-center justify-center gap-2 flex-1"
                                onClick={() => console.log("Login with Google")}
                            >
                                <img src='./assets/images/google.png' alt="Google" className="w-4 h-4" />
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="flex items-center justify-center gap-2 flex-1"
                                onClick={() => console.log("Login with GitHub")}
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </Button>
                        </div>
                        <p className="text-sm text-center mt-6 text-gray-600">
                            {t('dont-have-an-account')}{' '}
                            <span className="text-green-600 font-medium hover:underline transition-colors cursor-pointer" onClick={() => navigate('/register?step=1')}>
                                {t('register-now')}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-100/50 to-transparent"></div>
        </div>
    );
};

export default EcofundLoginPage;