import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const AppFooter: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="px-6 py-12 border-t">
            <div className="container mx-auto flex flex-col gap-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Logo & Description */}
                    <div className="space-y-4">
                        <img
                            src="/assets/images/logo_ecofundx.png"
                            alt="EcoFundX Logo"
                            className="w-32 h-32"
                        />
                        <h4 className="text-2xl font-bold text-primary">
                            EcoFund<span className="text-foreground">X</span>
                        </h4>
                        <p className=" text-sm">
                            {t("footer-description")}
                        </p>
                    </div>

                    {/* Links */}
                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold ">{t("footer-links")}</h5>
                        <ul className="space-y-2  text-sm">
                            <li><Link to="/">{t("home")}</Link></li>
                            <li><Link to="/projects">{t("projects")}</Link></li>
                            <li><Link to="/forum">{t("forum")}</Link></li>
                            <li><Link to="/contact">{t("contact")}</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold ">{t("footer-legal")}</h5>
                        <ul className="space-y-2  text-sm">
                            <li><a href="#">{t("terms-of-use")}</a></li>
                            <li><a href="#">{t("privacy-policy")}</a></li>
                            <li><a href="#">{t("fundraising-regulations")}</a></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="space-y-4">
                        <h5 className="text-lg font-semibold ">{t("footer-contact")}</h5>
                        <div className="flex gap-4">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Facebook className=" w-5 h-5 hover:text-primary" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Twitter className=" w-5 h-5 hover:text-primary" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Linkedin className=" w-5 h-5 hover:text-primary" />
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-border" />

                <p className="text-center  text-sm">
                    © {new Date().getFullYear()} EcoFundX. {t("footer-copyright")}
                </p>
            </div>
        </footer>
    );
};

export default AppFooter;
