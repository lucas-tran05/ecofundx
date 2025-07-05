import { useTranslation } from "react-i18next";
export default function ProjectsPage() {
    const { t } = useTranslation();

    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">{t('projects')}</h1>
            <p className="mb-4">{t('projects')}</p>
        </div>
    );
}
