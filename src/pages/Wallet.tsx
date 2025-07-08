import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Wallet,
    Send,
    ArrowDownLeft,
    ArrowUpRight,
    Plus,
    Eye,
    EyeOff,
    TrendingUp,
    Zap,
    Shield,
    Star,
    QrCode
} from 'lucide-react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const WalletPage = () => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    const [activeCard, setActiveCard] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const wallets = [
        {
            id: 1,
            name: "Bitcoin Wallet",
            symbol: "BTC",
            balance: 2.45867,
            usdValue: 98234.50,
            change: 5.67,
            color: "from-amber-500 to-orange-500",
            icon: "₿"
        },
        {
            id: 2,
            name: "Ethereum Wallet",
            symbol: "ETH",
            balance: 15.8923,
            usdValue: 52341.20,
            change: -2.34,
            color: "from-emerald-500 to-teal-500",
            icon: "Ξ"
        },
        {
            id: 3,
            name: "Solana Wallet",
            symbol: "SOL",
            balance: 234.56,
            usdValue: 23456.78,
            change: 12.45,
            color: "from-green-500 to-emerald-500",
            icon: "◎"
        }
    ];

    const transactions = [
        {
            id: 1,
            type: "receive",
            amount: 0.5,
            symbol: "BTC",
            usd: 20000,
            from: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
            time: "2 phút trước",
            status: "completed"
        },
        {
            id: 2,
            type: "send",
            amount: 2.3,
            symbol: "ETH",
            usd: 7590,
            to: "0x742d35Cc6634C0532925a3b8D87A85b0",
            time: "1 giờ trước",
            status: "pending"
        },
        {
            id: 3,
            type: "receive",
            amount: 100,
            symbol: "SOL",
            usd: 10000,
            from: "DRpbCBMxVnDK7maPM5tGv6MvB3v1sRMC7",
            time: "3 giờ trước",
            status: "completed"
        }
    ];

    const financeData = [
        { month: "Jan", income: 2000, expense: 1200 },
        { month: "Feb", income: 2500, expense: 1600 },
        { month: "Mar", income: 2200, expense: 3000 },
        { month: "Apr", income: 2800, expense: 1900 },
        { month: "May", income: 3000, expense: 2500 },
        { month: "Jun", income: 2700, expense: 2300 },
        { month: "Jul", income: 3200, expense: 2800 },
        { month: "Aug", income: 1800, expense: 2000 },
        { month: "Sep", income: 2500, expense: 2900 },
        { month: "Oct", income: 3600, expense: 1900 },
        { month: "Nov", income: 3800, expense: 2500 },
        { month: "Dec", income: 3100, expense: 1200 },
    ];


    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const totalBalance = wallets.reduce((sum, wallet) => sum + wallet.usdValue, 0);

    return (
        <div className="min-h-screen pb-4 pt-24">
            <div className="max-w-6xl mx-auto p-4">
                {/* Header dùng grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                                <Wallet className="w-6 h-6 text-white" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-[var(--text-primary)]">EcoFund Wallet</h1>
                            <p className="text-gray-400">Quản lý tài sản số của bạn</p>
                        </div>
                    </div>
                    <div className="flex justify-start md:justify-end gap-2">
                        <Button size="sm" variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500/10">
                            <QrCode className="w-4 h-4 mr-2" />
                            QR Code
                        </Button>
                        <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                            <Shield className="w-4 h-4 mr-2" />
                            Bảo mật
                        </Button>
                    </div>
                </div>


                {/* Balance Overview */}
                <Card className="mb-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200 shadow-lg">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-gray-800 flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                Tổng tài sản
                            </CardTitle>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                                className="text-gray-600 hover:text-gray-800"
                            >
                                {isBalanceVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center">
                            <div className={`text-5xl font-bold text-gray-800 mb-2 transition-all duration-300 ${isAnimating ? 'scale-110' : ''}`}>
                                {isBalanceVisible ? `${totalBalance.toLocaleString()}` : '••••••'}
                            </div>
                            <div className="text-emerald-600 flex items-center justify-center gap-1">
                                <TrendingUp className="w-4 h-4" />
                                <span>+8.45% (24h)</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Wallet Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {wallets.map((wallet, index) => (
                        <Card
                            key={wallet.id}
                            className={`relative overflow-hidden bg-gradient-to-br ${wallet.color} border-0 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${activeCard === index ? 'ring-2 ring-white' : ''}`}
                            onClick={() => setActiveCard(index)}
                        >
                            <CardHeader className="text-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="text-2xl font-bold">{wallet.icon}</div>
                                        <div>
                                            <CardTitle className="text-lg">{wallet.name}</CardTitle>
                                            <CardDescription className="text-white/80">{wallet.symbol}</CardDescription>
                                        </div>
                                    </div>
                                    <Badge variant="secondary" className="bg-white/20 text-white">
                                        {wallet.change > 0 ? '+' : ''}{wallet.change}%
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="text-white">
                                <div className="space-y-2">
                                    <div className="text-2xl font-bold">{wallet.balance} {wallet.symbol}</div>
                                    <div className="text-lg text-white/90">${wallet.usdValue.toLocaleString()}</div>
                                </div>
                            </CardContent>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                        </Card>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <Button className="h-16 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white group">
                        <div className="flex flex-col items-center gap-1">
                            <ArrowDownLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span>Nhận</span>
                        </div>
                    </Button>
                    <Button className="h-16 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white group">
                        <div className="flex flex-col items-center gap-1">
                            <ArrowUpRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span>Gửi</span>
                        </div>
                    </Button>
                    <Button className="h-16 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white group">
                        <div className="flex flex-col items-center gap-1">
                            <Plus className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span>Mua</span>
                        </div>
                    </Button>
                    <Button className="h-16 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white group">
                        <div className="flex flex-col items-center gap-1">
                            <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            <span>Hoán đổi</span>
                        </div>
                    </Button>
                </div>

                {/* Transactions */}
                <Tabs defaultValue="transactions" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 ">
                        <TabsTrigger value="transactions" className="text-[var(--text-primary)] data-[state=active]:text-[var(--text-primary)]">
                            Giao dịch
                        </TabsTrigger>
                        <TabsTrigger value="portfolio" className="text-[var(--text-primary)] data-[state=active]:text-[var(--text-primary)]">
                            Danh mục
                        </TabsTrigger>
                        <TabsTrigger value="analytics" className="text-[var(--text-primary)] data-[state=active]:text-[var(--text-primary)]">
                            Phân tích
                        </TabsTrigger>
                    </TabsList>


                    <TabsContent value="transactions" className="space-y-4">
                        <Card className="bg-white border-gray-200 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-gray-800 flex items-center gap-2">
                                    <Send className="w-5 h-5 text-emerald-600" />
                                    Giao dịch gần đây
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {transactions.map((tx) => (
                                        <div key={tx.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'receive' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                                                    {tx.type === 'receive' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                                                </div>
                                                <div>
                                                    <div className="text-gray-800 font-medium">
                                                        {tx.type === 'receive' ? 'Nhận' : 'Gửi'} {tx.symbol}
                                                    </div>
                                                    <div className="text-gray-500 text-sm">{tx.time}</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className={`font-medium ${tx.type === 'receive' ? 'text-emerald-600' : 'text-red-600'}`}>
                                                    {tx.type === 'receive' ? '+' : '-'}{tx.amount} {tx.symbol}
                                                </div>
                                                <div className="text-gray-500 text-sm">${tx.usd.toLocaleString()}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="portfolio" className="space-y-4">
                        <Card className="bg-white border-gray-200 shadow-lg">
                            <CardContent className="p-6">
                                <div className="text-center text-gray-500 py-8">
                                    <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p>Biểu đồ danh mục sẽ hiển thị tại đây</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="analytics" className="space-y-4">
                        <Card className="bg-white border-gray-200 shadow-lg">
                            <CardContent className="p-2 md:p-6">
                                <div className="text-center text-gray-500 py-8 pr-8">
                                    <ResponsiveContainer width="100%" height={300}>
                                        <AreaChart data={financeData}>
                                            <defs>
                                                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.6} />
                                                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                                                </linearGradient>
                                                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5} />
                                                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>

                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="month" />
                                            <YAxis />
                                            <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />

                                            <Area
                                                type="linear"
                                                dataKey="income"
                                                stroke="#10b981"
                                                fill="url(#incomeGradient)"
                                                name="Tiền vào"
                                            />
                                            <Area
                                                type="linear"
                                                dataKey="expense"
                                                stroke="#ef4444"
                                                fill="url(#expenseGradient)"
                                                name="Tiền ra"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default WalletPage;