import type { FC } from "react";
import { useMemo, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, User, LogOut, Wallet, Settings, ChevronDown } from "lucide-react";
import type { UserType } from "@/types/user";

const AppHeader: FC = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const lastScrollY = useRef(0);

    const menuItems = useMemo(
        () => [
            { key: "home", label: t("home"), href: "/" },
            { key: "projects", label: t("projects"), href: "/projects" },
            { key: "forum", label: t("forum"), href: "/forum" },
            { key: "contact", label: t("contact"), href: "/contact" },
            { key: "about", label: t("about"), href: "/about" },
        ],
        [t]
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);

        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch {
                setUser(null);
            }
        }

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hiệu ứng thay đổi background khi scroll
            setIsScrolled(currentScrollY > 20);

            // Ẩn/hiện header khi scroll
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <header
            className={`
                fixed top-0 z-50 w-full transition-all duration-500 ease-in-out
                ${hidden ? "-translate-y-full" : "translate-y-0"}
                ${isScrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20"
                    : "bg-white/95 backdrop-blur-sm shadow-sm"
                }
                min-h-auto 
            `}
        >
            <div className="container mx-auto px-4 py-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo với hiệu ứng gradient */}
                    <Link
                        to="/"
                        className="group flex items-center space-x-2 text-2xl font-bold transition-all duration-300"
                    >
                        <div className="relative">
                            <span className="bg-[image:var(--text-gradient)] bg-clip-text text-transparent">
                                Ecofund
                            </span>
                            <span className="text-[var(--text-primary)] transition-colors duration-300">
                                X
                            </span>
                            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary-1)] transition-all duration-300 group-hover:w-full"></div>
                        </div>
                    </Link>

                    {/* Navigation Menu - Desktop */}
                    {!isMobile && (
                        <nav className="hidden md:flex items-center space-x-1">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.key}
                                    to={item.href}
                                    className="group relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-[var(--color-primary-active)] hover:scale-110 transition-all duration-300 rounded-lg hover:bg-emerald-50"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    )}

                    {/* Right Side - Desktop */}
                    {!isMobile && (
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="transform hover:scale-105 transition-transform duration-200">
                                <LanguageSwitcher />
                            </div>

                            {user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 group">
                                        <Avatar className="ring-2 ring-[var(--color-primary-1)] ring-offset-2 transition-all duration-300 group-hover:ring-[var(--color-primary-active)]">
                                            <AvatarImage src={user?.avatar || ""} />
                                            <AvatarFallback className="bg-[image:var(--text-gradient)] text-[var(--text-on-primary)]">
                                                {user.username[0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex items-center space-x-1">
                                            <span className="font-semibold text-gray-800">{user.fullname}</span>
                                            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-emerald-600 transition-colors duration-200" />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48 mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/20 shadow-xl">
                                        {[
                                            { to: "/profile", icon: User, text: t("profile") },
                                            { to: "/wallet", icon: Wallet, text: t("wallet") },
                                            { to: "/settings", icon: Settings, text: t("settings") }
                                        ].map(({ to, icon: Icon, text }, index) => (
                                            <DropdownMenuItem asChild key={index}>
                                                <Link
                                                    to={to}
                                                    className="flex items-center space-x-2 hover:bg-emerald-50 transition-colors duration-200"
                                                >
                                                    <Icon className="w-4 h-4 text-emerald-600" />
                                                    <span>{text}</span>
                                                </Link>
                                            </DropdownMenuItem>
                                        ))}
                                        <DropdownMenuItem className="hover:bg-red-50 transition-colors duration-200">
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center space-x-2 text-red-600 w-full"
                                            >
                                                <LogOut className="w-4 h-4" />
                                                <span>{t("logout")}</span>
                                            </button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <div className="flex items-center space-x-3">
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-[var(--color-primary-1)] text-[var(--color-primary-active)] hover:bg-[var(--color-primary-tint)] hover:border-[var(--color-primary-active)]: transition-all duration-300"
                                    >
                                        <Link to="/register?step=1">{t("register")}</Link>
                                    </Button>
                                    <Button
                                        asChild
                                        className="bg-[image:var(--text-gradient)] text-[var(--text-on-primary)] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    >
                                        <Link to="/login">{t("login")}</Link>
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Mobile Menu */}
                    {isMobile && (
                        <div className="flex items-center space-x-3 md:hidden">
                            <div className="transform hover:scale-105 transition-transform duration-200">
                                <LanguageSwitcher />
                            </div>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="hover:bg-emerald-50 hover:text-emerald-600 transition-all duration-300"
                                    >
                                        <Menu className="w-5 h-5" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200/20">
                                    <div className="flex items-center justify-between py-4 border-b border-gray-200">
                                        <div className="text-xl font-bold">
                                            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                                Ecofund
                                            </span>
                                            <span className="text-gray-800">X</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col mt-6">
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.key}
                                                to={item.href}
                                                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 group"
                                            >
                                                <span className="flex-1">{item.label}</span>
                                                <div className="w-1 h-4 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </Link>
                                        ))}

                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            {user ? (
                                                <div>
                                                    <div className="flex items-center space-x-3 p-3 border border-gray-300 rounded-lg">
                                                        <Avatar className="ring-2 ring-emerald-200">
                                                            <AvatarImage src={user?.avatar || ""} />
                                                            <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white">
                                                                {user.username[0]}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <p className="font-semibold text-gray-800">{user.fullname}</p>
                                                            <p className="text-sm text-gray-500">@{user.username}</p>
                                                        </div>
                                                    </div>

                                                    <Link
                                                        to="/profile"
                                                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                                                    >
                                                        <User className="w-4 h-4" />
                                                        <span>{t("profile")}</span>
                                                    </Link>
                                                    <Link
                                                        to="/wallet"
                                                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                                                    >
                                                        <Wallet className="w-4 h-4" />
                                                        <span>{t("wallet")}</span>
                                                    </Link>
                                                    <Link
                                                        to="/settings"
                                                        className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300"
                                                    >
                                                        <Settings className="w-4 h-4" />
                                                        <span>{t("settings")}</span>
                                                    </Link>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300 w-full"
                                                    >
                                                        <LogOut className="w-4 h-4" />
                                                        <span>{t("logout")}</span>
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="space-y-3">
                                                    <Button
                                                        asChild
                                                        variant="outline"
                                                        className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
                                                    >
                                                        <Link to="/register?step=1">{t("register")}</Link>
                                                    </Button>
                                                    <Button
                                                        asChild
                                                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                                    >
                                                        <Link to="/login">{t("login")}</Link>
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default AppHeader;