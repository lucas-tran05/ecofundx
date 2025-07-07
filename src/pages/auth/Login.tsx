import React, { useState } from 'react';
import type { MouseEvent } from 'react';
import { Github } from 'lucide-react';
import InputField from '@/components/InputField';

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
    const [form, setForm] = useState<FormData>({ email: '', password: '' });

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Login submitted:', form);
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
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
                {/* Floating Circles */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-emerald-400 opacity-10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-400 opacity-15 rotate-12 animate-pulse"></div>

                {/* Leaf-like Shapes */}
                <div className="absolute top-1/2 left-10 w-8 h-16 bg-green-500 opacity-20 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/3 right-10 w-6 h-12 bg-emerald-500 opacity-25 rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '5s' }}></div>

                {/* Gradient Orbs */}
                <div className="absolute top-10 left-1/2 w-40 h-40 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-r from-teal-200 to-green-300 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

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
                            <a href="/register" className="text-green-600 font-medium hover:underline transition-colors">
                                {t('register-now')}
                            </a>
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