import { useTranslation } from 'react-i18next'
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from 'lucide-react';

export default function ForbiddenPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen">
            <AlertTriangle className="w-20 h-20 text-red-500 mb-4" />
            <h1 className="text-4xl font-bold mb-4">{t("403")}</h1>
            <p className="mb-4">{t("403-sub")}</p>
            <Button variant="default" onClick={() => navigate(-1)}>
                {t("back")}
            </Button>
        </div>
    );
}

