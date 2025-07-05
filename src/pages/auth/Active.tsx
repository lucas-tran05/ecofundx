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
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center animate-in fade-in duration-500">
            {isPending && (
                <>
                    <Loader2 className="w-16 h-16 text-green-600 mb-4 animate-spin" />
                    <h1 className="text-2xl font-bold mb-2">{t("account_pending")}</h1>
                    <p className="text-muted-foreground max-w-md mb-4">
                        {t("your_account_is_pending_activation")}
                    </p>

                    {!showResend ? (
                        <p className="text-sm text-muted-foreground">
                            {t("resend_code_in")} {countdown}s
                        </p>
                    ) : (
                        <Button onClick={handleResend} variant="outline">
                            {t("resend_activation_email")}
                        </Button>
                    )}
                </>
            )}

            {isSuccess && (
                <>
                    <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                    <h1 className="text-3xl font-bold mb-2">{t("account_activated")}</h1>
                    <p className="text-muted-foreground mb-6 max-w-md">
                        {t("account_activated_description")}
                    </p>
                    <Button variant="default" size="lg" onClick={() => window.location.href = "/login"}>
                        {t("go_to_login")}
                    </Button>
                </>
            )}

            {!isPending && !isSuccess && (
                <p className="text-muted-foreground">{t("account_active_no_status")}</p>
            )}
        </div>
    );
}
