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
