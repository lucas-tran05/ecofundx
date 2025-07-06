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
        <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 to-teal-600/5"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
            
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
                                        className="w-12 h-12 rounded-lg shadow-lg ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/40 transition-all duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold">
                                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                            EcoFund
                                        </span>
                                        <span className="text-white">X</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {t("footer-description")}
                        </p>
                        <div className="flex items-center space-x-2 text-emerald-400">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">Trusted by 10,000+ users</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h5 className="text-lg font-semibold text-white relative">
                            {t("footer-links")}
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
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
                                        className="text-gray-300 hover:text-emerald-400 text-sm transition-all duration-300 group flex items-center space-x-2"
                                    >
                                        <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></span>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h5 className="text-lg font-semibold text-white relative">
                            {t("footer-legal")}
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
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
                                        className="text-gray-300 hover:text-emerald-400 text-sm transition-all duration-300 group flex items-center space-x-2"
                                    >
                                        <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-emerald-400 transition-colors duration-300"></span>
                                        <span>{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="space-y-6">
                        <h5 className="text-lg font-semibold text-white relative">
                            {t("footer-contact")}
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
                        </h5>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <Mail className="w-4 h-4 text-emerald-400" />
                                <span>support@ecofundx.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <Phone className="w-4 h-4 text-emerald-400" />
                                <span>+84 123 456 789</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-gray-300">
                                <MapPin className="w-4 h-4 text-emerald-400" />
                                <span>Hanoi, Vietnam</span>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {[
                                { Icon: Facebook, href: "#", color: "hover:text-blue-400" },
                                { Icon: Twitter, href: "#", color: "hover:text-sky-400" },
                                { Icon: Linkedin, href: "#", color: "hover:text-blue-600" },
                            ].map(({ Icon, href, color }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group relative p-3 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:scale-110 ${color}`}
                                >
                                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-current transition-colors duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} EcoFundX. {t("footer-copyright")}
                        </p>
                        
                        {/* Back to Top */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center space-x-2 text-gray-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="text-sm">Back to top</span>
                            <div className="p-2 bg-gray-800 rounded-full group-hover:bg-emerald-600 transition-all duration-300">
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