import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    RadialBarChart,
    RadialBar,
    ScatterChart,
    Scatter
} from 'recharts';
import { TrendingUp, Users, ShoppingCart, DollarSign, Eye, Target, Activity } from 'lucide-react';

// Mock data
const revenueData = [
    { month: 'Jan', revenue: 45000, orders: 234, users: 1200 },
    { month: 'Feb', revenue: 52000, orders: 267, users: 1350 },
    { month: 'Mar', revenue: 48000, orders: 245, users: 1280 },
    { month: 'Apr', revenue: 61000, orders: 312, users: 1520 },
    { month: 'May', revenue: 55000, orders: 289, users: 1420 },
    { month: 'Jun', revenue: 67000, orders: 356, users: 1680 },
    { month: 'Jul', revenue: 72000, orders: 398, users: 1850 },
    { month: 'Aug', revenue: 69000, orders: 378, users: 1780 },
    { month: 'Sep', revenue: 76000, orders: 425, users: 1950 },
    { month: 'Oct', revenue: 83000, orders: 467, users: 2100 },
    { month: 'Nov', revenue: 91000, orders: 512, users: 2280 },
    { month: 'Dec', revenue: 98000, orders: 548, users: 2450 }
];

const categoryData = [
    { name: 'Electronics', value: 35, color: '#3B82F6' },
    { name: 'Clothing', value: 25, color: '#10B981' },
    { name: 'Home & Garden', value: 20, color: '#F59E0B' },
    { name: 'Books', value: 12, color: '#EF4444' },
    { name: 'Sports', value: 8, color: '#8B5CF6' }
];

const trafficData = [
    { source: 'Direct', visitors: 15420, conversions: 8.2 },
    { source: 'Google', visitors: 12350, conversions: 6.8 },
    { source: 'Facebook', visitors: 8760, conversions: 4.5 },
    { source: 'Instagram', visitors: 6540, conversions: 5.1 },
    { source: 'Twitter', visitors: 4320, conversions: 3.8 },
    { source: 'LinkedIn', visitors: 2180, conversions: 7.2 }
];

const performanceData = [
    { metric: 'CPU Usage', value: 65, fullMark: 100 },
    { metric: 'Memory', value: 78, fullMark: 100 },
    { metric: 'Storage', value: 45, fullMark: 100 },
    { metric: 'Network', value: 23, fullMark: 100 },
    { metric: 'Database', value: 89, fullMark: 100 }
];

const scatterData = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
    { x: 200, y: 350, z: 300 }
];

const StatCard: React.FC<{
    title: string;
    value: string;
    change: string;
    icon: React.ReactNode;
    color: string;
}> = ({ title, value, change, icon, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
            <div className={`${color} p-3 rounded-lg`}>
                {icon}
            </div>
            <span className="text-green-500 text-sm font-semibold">{change}</span>
        </div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
);

const ChartCard: React.FC<{
    title: string;
    children: React.ReactNode;
    className?: string;
}> = ({ title, children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        {children}
    </div>
);

export default function AdminDashboard() {
    return (
        <div className="min-h-screen p-6">
            <div className="mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
                    <p className="text-gray-600">Overview of your business metrics and performance</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        title="Total Revenue"
                        value="$847,000"
                        change="+12.5%"
                        icon={<DollarSign className="w-6 h-6 text-white" />}
                        color="bg-blue-500"
                    />
                    <StatCard
                        title="Total Orders"
                        value="4,521"
                        change="+8.2%"
                        icon={<ShoppingCart className="w-6 h-6 text-white" />}
                        color="bg-green-500"
                    />
                    <StatCard
                        title="Active Users"
                        value="18,420"
                        change="+15.1%"
                        icon={<Users className="w-6 h-6 text-white" />}
                        color="bg-purple-500"
                    />
                    <StatCard
                        title="Page Views"
                        value="2.1M"
                        change="+6.8%"
                        icon={<Eye className="w-6 h-6 text-white" />}
                        color="bg-orange-500"
                    />
                </div>

                {/* Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Revenue Chart */}
                    <ChartCard title="Revenue & Orders Trend">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Legend />
                                <Line
                                    yAxisId="left"
                                    type="monotone"
                                    dataKey="revenue"
                                    stroke="#3B82F6"
                                    strokeWidth={3}
                                    name="Revenue ($)"
                                />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="orders"
                                    stroke="#10B981"
                                    strokeWidth={3}
                                    name="Orders"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Category Distribution */}
                    <ChartCard title="Sales by Category">
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                {/* More Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Area Chart */}
                    <ChartCard title="User Growth">
                        <ResponsiveContainer width="100%" height={250}>
                            <AreaChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="users"
                                    stroke="#8B5CF6"
                                    fill="#8B5CF6"
                                    fillOpacity={0.6}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Bar Chart */}
                    <ChartCard title="Traffic Sources">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={trafficData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="source" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="visitors" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Radial Bar Chart */}
                    <ChartCard title="System Performance">
                        <ResponsiveContainer width="100%" height={250}>
                            <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={performanceData}>
                                <RadialBar
                                    label={{ position: 'insideStart', fill: '#fff' }}
                                    background
                                    dataKey="value"
                                    fill="#EF4444"
                                />
                                <Tooltip />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                {/* Full Width Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Scatter Chart */}
                    <ChartCard title="Performance Correlation">
                        <ResponsiveContainer width="100%" height={300}>
                            <ScatterChart data={scatterData}>
                                <CartesianGrid />
                                <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                                <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                <Scatter name="A school" data={scatterData} fill="#3B82F6" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Multi-Bar Chart */}
                    <ChartCard title="Monthly Comparison">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={revenueData.slice(-6)}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="revenue" fill="#3B82F6" name="Revenue" />
                                <Bar dataKey="orders" fill="#10B981" name="Orders" />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                {/* Bottom Stats */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center mb-4">
                            <Target className="w-8 h-8 text-blue-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">Conversion Rate</h3>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">6.2%</p>
                        <p className="text-sm text-green-500">+0.8% from last month</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center mb-4">
                            <Activity className="w-8 h-8 text-green-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">Avg. Session</h3>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">4m 32s</p>
                        <p className="text-sm text-green-500">+12s from last month</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center mb-4">
                            <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">Growth Rate</h3>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">+23.5%</p>
                        <p className="text-sm text-green-500">+2.1% from last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}