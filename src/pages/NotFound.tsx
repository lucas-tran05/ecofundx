import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
    const { t } = useTranslation();
    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">{t("404")}</h1>
            <p className="mb-4">{t("404-sub")}</p>
            <Link to="/">
                <Button variant="default">{t("home")}</Button>
            </Link>
        </div>
    );
}

