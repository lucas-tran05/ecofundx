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
import { Menu, User, LogOut, Wallet, Settings } from "lucide-react";
import type { UserType } from "@/types/user";

const AppHeader: FC = () => {
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState<UserType | null>(null);

    const [hidden, setHidden] = useState(false);
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

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setHidden(true); // Scroll xuống
            } else {
                setHidden(false); // Scroll lên
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
            className={`w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between transition-transform duration-300 fixed top-0 z-50 ${hidden ? "-translate-y-full" : "translate-y-0"
                }`}
        >
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
                <span className="text-primary">Ecofund</span>X
            </Link>

            {/* Menu - Desktop */}
            {!isMobile && (
                <nav className="flex gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.key}
                            to={item.href}
                            className="text-sm font-medium text-gray-700 hover:text-emerald-600 hover:underline transition duration-200"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            )}

            {/* User / Auth Buttons - Desktop */}
            {!isMobile && (
                <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={user?.avatar || ""} />
                                    <AvatarFallback>{user.username[0]}</AvatarFallback>
                                </Avatar>
                                <span className="font-semibold">{user.fullname}</span>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem asChild>
                                    <Link to="/profile" className="flex items-center gap-2">
                                        <User className="w-4 h-4" /> {t("profile")}
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/wallet" className="flex items-center gap-2">
                                        <Wallet className="w-4 h-4" /> {t("wallet")}
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link to="/settings" className="flex items-center gap-2">
                                        <Settings className="w-4 h-4" /> {t("settings")}
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-center gap-2">
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 text-sm text-red-600"
                                    >
                                        <LogOut className="w-4 h-4" /> {t("logout")}
                                    </button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <Button asChild variant="outline">
                                <Link to="/register?step=1">{t("register")}</Link>
                            </Button>
                            <Button asChild>
                                <Link to="/login">{t("login")}</Link>
                            </Button>
                        </>
                    )}
                </div>
            )}

            {/* Mobile Menu */}
            {isMobile && (
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64">
                        <div className="flex items-center py-2">
                            <div className="text-xl font-bold pe-2">
                                <span className="text-primary">Ecofund</span>X
                            </div>
                            <LanguageSwitcher />
                        </div>
                        <div className="flex flex-col gap-4 mt-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.key}
                                    to={item.href}
                                    className="text-sm font-medium hover:text-primary transition"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <hr />
                            {user ? (
                                <>
                                    <Link
                                        to="/profile"
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <User className="w-4 h-4" /> {t("profile")}
                                    </Link>
                                    <Link
                                        to="/wallet"
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <Wallet className="w-4 h-4" /> {t("wallet")}
                                    </Link>
                                    <Link
                                        to="/settings"
                                        className="flex items-center gap-2 text-sm"
                                    >
                                        <Settings className="w-4 h-4" /> {t("settings")}
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 text-sm text-red-600"
                                    >
                                        <LogOut className="w-4 h-4" /> {t("logout")}
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Button asChild variant="outline">
                                        <Link to="/register?step=1">{t("register")}</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link to="/login">{t("login")}</Link>
                                    </Button>
                                </>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>
            )}
        </header>
    );
};

export default AppHeader;
