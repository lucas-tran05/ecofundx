import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">{t("404")}</h1>
            <p className="mb-4">{t("404-sub")}</p>
            <Button variant="default" onClick={() => navigate(-1)}>
                {t("back")}
            </Button>

        </div>
    );
}

