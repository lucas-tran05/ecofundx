import { useState } from "react";
import {
    User,
    Bell,
    Shield,
    Globe,
    Palette,
    CreditCard,
    Save,
    Eye,
    EyeOff
} from "lucide-react";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState('notifications');
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true
    });
    const [language, setLanguage] = useState('vi');
    const [theme, setTheme] = useState('light');
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false
    });

    const settingsTabs = [
        { id: 'notifications', label: 'Thông báo', icon: <Bell size={20} /> },
        { id: 'profile', label: 'Hồ sơ', icon: <User size={20} /> },
        { id: 'security', label: 'Bảo mật', icon: <Shield size={20} /> },
        { id: 'language', label: 'Ngôn ngữ', icon: <Globe size={20} /> },
        { id: 'appearance', label: 'Giao diện', icon: <Palette size={20} /> },
        { id: 'payment', label: 'Thanh toán', icon: <CreditCard size={20} /> }
    ];

    const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

    const renderTabContent = () => {
        switch (activeTab) {

            case 'notifications':
                return (
                    <div className="space-y-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Cài đặt thông báo</h2>
                            <p className="text-gray-600">Quản lý cách bạn nhận thông báo</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Bell size={16} className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Thông báo email</h3>
                                        <p className="text-sm text-gray-500">Nhận thông báo qua email</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
                                    className={cn(
                                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                        notifications.email ? "bg-green-500" : "bg-gray-300"
                                    )}
                                >
                                    <span className={cn(
                                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                        notifications.email ? "translate-x-6" : "translate-x-1"
                                    )} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                                        <Bell size={16} className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Thông báo đẩy</h3>
                                        <p className="text-sm text-gray-500">Nhận thông báo trên thiết bị</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setNotifications(prev => ({ ...prev, push: !prev.push }))}
                                    className={cn(
                                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                        notifications.push ? "bg-green-500" : "bg-gray-300"
                                    )}
                                >
                                    <span className={cn(
                                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                        notifications.push ? "translate-x-6" : "translate-x-1"
                                    )} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                        <Bell size={16} className="text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900">Thông báo SMS</h3>
                                        <p className="text-sm text-gray-500">Nhận thông báo qua tin nhắn</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setNotifications(prev => ({ ...prev, sms: !prev.sms }))}
                                    className={cn(
                                        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                                        notifications.sms ? "bg-green-500" : "bg-gray-300"
                                    )}
                                >
                                    <span className={cn(
                                        "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                                        notifications.sms ? "translate-x-6" : "translate-x-1"
                                    )} />
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'profile':
                return (
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                <User size={32} className="text-white" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Thông tin cá nhân</h2>
                                <p className="text-gray-600">Cập nhật thông tin hồ sơ của bạn</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên</label>
                                <input
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Nguyễn Văn A"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="example@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại</label>
                            <input
                                type="tel"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="0123456789"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Giới thiệu</label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                rows={4}
                                placeholder="Viết vài dòng về bản thân..."
                            />
                        </div>

                        <div className="flex justify-end">
                            <button className="flex items-center space-x-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                <Save size={16} />
                                <span>Lưu thay đổi</span>
                            </button>
                        </div>
                    </div>
                );

            case 'security':
                return (
                    <div className="space-y-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Bảo mật tài khoản</h2>
                            <p className="text-gray-600">Bảo vệ tài khoản của bạn</p>
                        </div>

                        <div className="bg-white border rounded-lg p-6">
                            <h3 className="font-medium text-gray-900 mb-4">Đổi mật khẩu</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu hiện tại</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword.current ? "text" : "password"}
                                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(prev => ({ ...prev, current: !prev.current }))}
                                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword.current ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Mật khẩu mới</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword.new ? "text" : "password"}
                                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(prev => ({ ...prev, new: !prev.new }))}
                                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword.new ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Xác nhận mật khẩu mới</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword.confirm ? "text" : "password"}
                                            className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(prev => ({ ...prev, confirm: !prev.confirm }))}
                                            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                                        >
                                            {showPassword.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                                    Cập nhật mật khẩu
                                </button>
                            </div>
                        </div>

                        <div className="bg-white border rounded-lg p-6">
                            <h3 className="font-medium text-gray-900 mb-4">Xác thực hai yếu tố</h3>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600">Tăng cường bảo mật tài khoản bằng xác thực hai yếu tố</p>
                                </div>
                                <button className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                                    Kích hoạt
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'language':
                return (
                    <div className="space-y-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Ngôn ngữ</h2>
                            <p className="text-gray-600">Chọn ngôn ngữ hiển thị</p>
                        </div>

                        <div className="bg-white border rounded-lg p-6">
                            <h3 className="font-medium text-gray-900 mb-4">Chọn ngôn ngữ</h3>
                            <div className="space-y-3">
                                <label className="flex items-center p-3 rounded-lg border cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="language"
                                        value="vi"
                                        checked={language === 'vi'}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        className="mr-3 text-green-500 focus:ring-green-500"
                                    />
                                    <div>
                                        <span className="font-medium">Tiếng Việt</span>
                                        <p className="text-sm text-gray-500">Ngôn ngữ mặc định</p>
                                    </div>
                                </label>

                                <label className="flex items-center p-3 rounded-lg border cursor-pointer hover:bg-gray-50">
                                    <input
                                        type="radio"
                                        name="language"
                                        value="en"
                                        checked={language === 'en'}
                                        onChange={(e) => setLanguage(e.target.value)}
                                        className="mr-3 text-green-500 focus:ring-green-500"
                                    />
                                    <div>
                                        <span className="font-medium">English</span>
                                        <p className="text-sm text-gray-500">International language</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                );

            case 'appearance':
                return (
                    <div className="space-y-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Giao diện</h2>
                            <p className="text-gray-600">Tùy chỉnh giao diện theo sở thích</p>
                        </div>

                        <div className="bg-white border rounded-lg p-6">
                            <h3 className="font-medium text-gray-900 mb-4">Chủ đề</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button
                                    onClick={() => setTheme('light')}
                                    className={cn(
                                        "p-6 rounded-lg border-2 text-center transition-all hover:shadow-md",
                                        theme === 'light'
                                            ? "border-green-500 bg-green-50 shadow-md"
                                            : "border-gray-200 hover:border-gray-300"
                                    )}
                                >
                                    <div className="w-16 h-12 bg-white border-2 border-gray-200 rounded mx-auto mb-3 shadow-sm"></div>
                                    <span className="text-sm font-medium">Chủ đề sáng</span>
                                    <p className="text-xs text-gray-500 mt-1">Phù hợp ban ngày</p>
                                </button>

                                <button
                                    onClick={() => setTheme('dark')}
                                    className={cn(
                                        "p-6 rounded-lg border-2 text-center transition-all hover:shadow-md",
                                        theme === 'dark'
                                            ? "border-green-500 bg-green-50 shadow-md"
                                            : "border-gray-200 hover:border-gray-300"
                                    )}
                                >
                                    <div className="w-16 h-12 bg-gray-800 border-2 border-gray-600 rounded mx-auto mb-3"></div>
                                    <span className="text-sm font-medium">Chủ đề tối</span>
                                    <p className="text-xs text-gray-500 mt-1">Phù hợp ban đêm</p>
                                </button>

                                <button
                                    onClick={() => setTheme('auto')}
                                    className={cn(
                                        "p-6 rounded-lg border-2 text-center transition-all hover:shadow-md",
                                        theme === 'auto'
                                            ? "border-green-500 bg-green-50 shadow-md"
                                            : "border-gray-200 hover:border-gray-300"
                                    )}
                                >
                                    <div className="w-16 h-12 bg-gradient-to-r from-white via-gray-300 to-gray-800 border-2 border-gray-200 rounded mx-auto mb-3"></div>
                                    <span className="text-sm font-medium">Tự động</span>
                                    <p className="text-xs text-gray-500 mt-1">Theo hệ thống</p>
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case 'payment':
                return (
                    <div className="space-y-6">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Thanh toán</h2>
                            <p className="text-gray-600">Quản lý thông tin thanh toán</p>
                        </div>

                        <div className="bg-white border rounded-lg p-6">
                            <h3 className="font-medium text-gray-900 mb-4">Phương thức thanh toán</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border rounded-lg">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-6 bg-blue-600 rounded text-white flex items-center justify-center text-xs font-bold">
                                            VISA
                                        </div>
                                        <div>
                                            <p className="font-medium">•••• •••• •••• 4242</p>
                                            <p className="text-sm text-gray-500">Hết hạn 12/25</p>
                                        </div>
                                    </div>
                                    <button className="text-red-600 hover:text-red-800">Xóa</button>
                                </div>

                                <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors">
                                    + Thêm phương thức thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <User size={32} className="text-gray-400" />
                            </div>
                            <p className="text-gray-500">Nội dung tab đang được phát triển</p>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden p-4">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Cài đặt</h1>
                    <p className="text-gray-600 mt-2">Quản lý tài khoản và tùy chỉnh trải nghiệm của bạn</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                            <nav className="space-y-1">
                                {settingsTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={cn(
                                            "w-full flex items-center space-x-3 px-4 py-3 text-left transition-colors",
                                            activeTab === tab.id
                                                ? "bg-green-50 border-r-2 border-green-500 text-green-700"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                        )}
                                    >
                                        <span className={cn(
                                            "flex-shrink-0",
                                            activeTab === tab.id ? "text-green-600" : "text-gray-400"
                                        )}>
                                            {tab.icon}
                                        </span>
                                        <span className="font-medium">{tab.label}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border p-6">
                            {renderTabContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}