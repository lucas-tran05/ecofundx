import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ActivePage() {
    const { t } = useTranslation();
    const [searchParams] = useSearchParams();
    const status = searchParams.get("status");

    const isPending = status === "pending";
    const isSuccess = status === "success";

    const [countdown, setCountdown] = useState(60);
    const [showResend, setShowResend] = useState(false);

    useEffect(() => {
        if (isPending && countdown > 0) {
            const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        }

        if (isPending && countdown === 0) {
            setShowResend(true);
        }
    }, [isPending, countdown]);

    const handleResend = () => {
        alert(t("resend_activation_email_alert"));
        setCountdown(100);
        setShowResend(false);
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-5">
            {/* Background giữ nguyên */}
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
            <div className="relative z-10 w-full max-w-md text-center px-4">
                {isPending && (
                    <>
                        <Loader2 className="w-16 h-16 text-green-600 mb-6 animate-spin mx-auto" />
                        <h1 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-2">
                            {t("account_pending")}
                        </h1>
                        <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto mb-6">
                            {t("your_account_is_pending_activation")}
                        </p>

                        {!showResend ? (
                            <p className="text-sm text-gray-600">
                                {t("resend_code_in")} <span className="font-medium">{countdown}s</span>
                            </p>
                        ) : (
                            <Button className="bg-[var(--color-primary-1)] hover:bg-[var(--color-primary-hover)] text-[var(--text-on-primary)] hover:text-opacity-90" onClick={handleResend} variant="outline">
                                {t("resend_activation_email")}
                            </Button>
                        )}
                    </>
                )}

                {isSuccess && (
                    <>
                        <CheckCircle className="w-16 h-16 text-green-600 mb-6 mx-auto" />
                        <h1 className="text-3xl font-extrabold text-green-700 mb-2">
                            {t("account_activated")}
                        </h1>
                        <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto mb-6">
                            {t("account_activated_description")}
                        </p>
                        <Button className="bg-[var(--color-primary-1)] hover:bg-[var(--color-primary-hover)]" variant="default" size="lg" onClick={() => (window.location.href = "/login")}>
                            {t("go_to_login")}
                        </Button>
                    </>
                )}

                {!isPending && !isSuccess && (
                    <p className="text-gray-600 text-base">
                        {t("account_active_no_status")}
                    </p>
                )}
            </div>
        </div>

    );
}
