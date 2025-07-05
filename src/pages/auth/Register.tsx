import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center animate-in fade-in duration-500">
            <h1 className="text-2xl font-bold mb-1 text-center py-8" >{t('register')}</h1>
            <Button>
                <Link to="/active?status=pending">{t('register')}</Link>
            </Button>
        </div>
    );
}