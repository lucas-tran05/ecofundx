import React, { useState } from 'react';
import {
    Menu, X, ChevronLeft, ChevronRight, Bell, Search, User
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { NavItem } from '@/types/nav';
import { navItems } from '@/pages/startup/configs';

const Style4Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [currentPath, setCurrentPath] = useState('/startup/dashboard');

    const userInfo = { name: 'John Doe', email: 'john@example.com' };

    

    const handleNavigate = (path: string) => {
        navigate(path);
        setCurrentPath(path);
        setIsMobileOpen(false);
    };

    const toggleExpanded = (itemId: string) => {
        setExpandedItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const renderNavItem = (item: NavItem, level = 0) => {
        const isActive = currentPath === item.path;
        const isExpanded = expandedItems.includes(item.id);
        const hasChildren = !!item.children?.length;

        return (
            <div key={item.id}>
                <div
                    className={`
                        relative flex items-center px-3 py-2.5 rounded-lg cursor-pointer 
                        transition-all duration-200 ease-in-out group
                        ${isActive
                            ? 'bg-blue-100 text-blue-700 shadow-sm'
                            : 'text-gray-700 hover:bg-gray-100 hover:shadow-sm'
                        }
                        ${level > 0 ? 'ml-4' : ''}
                        ${isCollapsed ? 'justify-center' : 'justify-between'}
                    `}
                    onClick={() => {
                        if (hasChildren && !isCollapsed) toggleExpanded(item.id);
                        else handleNavigate(item.path);
                    }}
                >
                    {/* Active indicator */}
                    <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
                        <div className={`flex-shrink-0 ${isCollapsed ? '' : 'mr-3'}`}>
                            {item.icon}
                        </div>
                        {!isCollapsed && (
                            <span className="font-medium text-sm truncate">{item.label}</span>
                        )}
                    </div>

                    {!isCollapsed && (
                        <div className="flex items-center flex-shrink-0">
                            {item.badge && (
                                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 mr-2 min-w-[20px] text-center">
                                    {item.badge}
                                </span>
                            )}
                            {hasChildren && (
                                <ChevronRight
                                    className={`w-4 h-4 transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''
                                        }`}
                                />
                            )}
                        </div>
                    )}

                    {/* Tooltip for collapsed state */}
                    {isCollapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                            {item.label}
                            {item.badge && (
                                <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1">
                                    {item.badge}
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {hasChildren && !isCollapsed && isExpanded && (
                    <div className="ml-4 mt-1 space-y-1">
                        {item.children!.map(child => renderNavItem(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className={`
                fixed lg:relative z-30 h-full bg-white shadow-lg 
                transform transition-all duration-300 ease-in-out
                ${isCollapsed ? 'w-16' : 'w-64'}
                ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}>
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
                    {!isCollapsed && (
                        <h1 className="text-xl font-bold text-gray-800 truncate">Dashboard</h1>
                    )}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            className="hidden lg:block p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {isCollapsed ?
                                <ChevronRight className="w-5 h-5" /> :
                                <ChevronLeft className="w-5 h-5" />
                            }
                        </button>
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* User Info */}
                <div className={`p-4 border-b border-gray-200 transition-all duration-300 ${isCollapsed ? 'px-2' : 'px-4'
                    }`}>
                    <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                            {userInfo.name.charAt(0).toUpperCase()}
                        </div>
                        {!isCollapsed && (
                            <div className="ml-3 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">{userInfo.name}</p>
                                <p className="text-xs text-gray-500 truncate">{userInfo.email}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    {navItems.map(item => renderNavItem(item))}
                </nav>
            </aside>

            {/* Mobile overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Header */}
                <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 h-16">
                    <div className="flex items-center justify-between h-full">
                        <div className="flex items-center">
                            <button
                                onClick={() => setIsMobileOpen(true)}
                                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-2 transition-colors"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                            <h2 className="text-xl font-semibold text-gray-800">
                                {navItems.find(item => item.path === currentPath)?.label || 'Dashboard'}
                            </h2>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative hidden md:block">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                />
                                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                            </div>
                            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                <Bell className="w-5 h-5 text-gray-600" />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                            </button>
                            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                <User className="w-5 h-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main content area */}
                <main className="flex-1 overflow-auto">
                    <div className="min-h-full relative overflow-hidden flex items-center justify-center">
                        {/* Animated Background - Same as Login */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-violet-50">
                            {/* Floating Circles */}
                            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                            <div className="absolute top-40 right-32 w-24 h-24 bg-sky-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                            <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-violet-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                            <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>

                            {/* Geometric Shapes */}
                            <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-sky-400 opacity-10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                            <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-400 opacity-15 rotate-12 animate-pulse"></div>

                            {/* Leaf-like Shapes */}
                            <div className="absolute top-1/2 left-10 w-8 h-16 bg-blue-500 opacity-20 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
                            <div className="absolute top-1/3 right-10 w-6 h-12 bg-sky-500 opacity-25 rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '5s' }}></div>

                            {/* Gradient Orbs */}
                            <div className="absolute top-10 left-1/2 w-40 h-40 bg-gradient-to-r from-blue-200 to-sky-200 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                            <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-r from-violet-200 to-blue-200 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                        </div>
                        {/* Main Content */}
                        <div className="relative z-10 w-full p-6">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Style4Layout;