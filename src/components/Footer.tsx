import React from "react";
import { useTranslation } from "react-i18next";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const AppFooter: React.FC = () => {
    const { t } = useTranslation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[image:var(--bg-style-2)] text-[var(--text-on-primary)] overflow-hidden md:px-16">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-[image:var(--bg-main-gradient)]"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--bg-emerald-circle)] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--bg-teal-circle)] rounded-full blur-3xl"></div>

            <div className="relative z-10 container mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="space-y-6 lg:col-span-1">
                        <div className="group cursor-pointer">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="relative">
                                    <img
                                        src="/assets/images/logo_ecofundx.png"
                                        alt="EcoFundX Logo"
                                        className="w-12 h-12 rounded-lg shadow-lg ring-2 ring-[var(--color-primary-tint)] group-hover:ring-[var(--color-primary-hover)] transition-all duration-300"
                                    />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold">
                                        <span className="bg-[image:var(--text-gradient)] bg-clip-text text-transparent">
                                            EcoFund
                                        </span>
                                        <span className="text-[var(--text-on-primary)]">X</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t("footer-description")}
                        </p>
                        <div className="flex items-center space-x-2 text-[var(--color-primary-1)]">
                            <div className="w-2 h-2 bg-[var(--color-primary-1)] rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">{t('footer-glold')}</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h5 className="text-lg font-semibold text-[var(--text-on-primary)] relative">
                            {t("footer-links")}
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-primary-1)] rounded-full"></div>
                        </h5>
                        <ul className="space-y-3">
                            {[
                                { to: "/", label: t("home") },
                                { to: "/projects", label: t("projects") },
                                { to: "/forum", label: t("forum") },
                                { to: "/contact", label: t("contact") },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-[var(--text-on-primary)] hover:text-[var(--color-primary-light)] text-sm transition-all duration-300 group flex items-center space-x-2"
                                    >
                                        <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[var(--color-primary-1)] transition-colors duration-300"></span>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h5 className="text-lg font-semibold text-[var(--text-on-primary)] relative">
                            {t("footer-legal")}
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-primary-1)] rounded-full"></div>
                        </h5>
                        <ul className="space-y-3">
                            {[
                                { to: "/legal?type=terms", label: t("terms-of-use") },
                                { to: "/legal?type=privacy", label: t("privacy-policy") },
                                { to: "/legal?type=regulations", label: t("fundraising-regulations") },
                            ].map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-[var(--text-on-primary)] hover:text-[var(--color-primary-light)] text-sm transition-all duration-300 group flex items-center space-x-2"
                                    >
                                        <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[var(--color-primary-1)] transition-colors duration-300"></span>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-6">
                        <h5 className="text-lg font-semibold text-[var(--text-on-primary)] relative">
                            {t("footer-contact")}
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[var(--color-primary-1)] rounded-full"></div>
                        </h5>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm text-[var(--text-on-primary)]">
                                <Mail className="w-4 h-4 text-[var(--color-primary-1)]" />
                                <span>support@ecofundx.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-[var(--text-on-primary)]">
                                <Phone className="w-4 h-4 text-[var(--color-primary-1)]" />
                                <span>+84 123 456 789</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-[var(--text-on-primary)]">
                                <MapPin className="w-4 h-4 text-[var(--color-primary-1)]" />
                                <span>Hanoi, Vietnam</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Linkedin, href: "#" },
                            ].map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-110 hover:text-[var(--color-primary-1)]`}
                                >
                                    <Icon className="w-5 h-5 text-[var(--text-on-primary)] group-hover:text-current transition-colors duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-[var(--text-muted)] text-sm text-center md:text-left">
                            © {new Date().getFullYear()} EcoFundX. {t("footer-copyright")}
                        </p>

                        {/* Back to Top */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center space-x-2 text-[var(--text-muted)] hover:text-[var(--color-primary-active)] transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="text-sm">Back to top</span>
                            <div className="p-2 bg-gray-800 rounded-full group-hover:bg-[var(--color-primary-1)] transition-all duration-300">
                                <ArrowUp className="w-4 h-4" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;