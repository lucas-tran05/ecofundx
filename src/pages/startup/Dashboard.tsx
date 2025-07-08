import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    AreaChart,
    Area,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from 'recharts';
import {
    Target,
    Users,
    DollarSign,
    Clock,
    CheckCircle,
    AlertCircle,
    Eye,
    Heart,
    Share2,
    Award,
} from 'lucide-react';

// Mock data cho dự án
const projectData = [
    {
        id: 1,
        name: "Reforestation Project Vietnam",
        status: "active",
        progress: 75,
        raised: 85000,
        goal: 120000,
        backers: 342,
        daysLeft: 25,
        category: "Environment",
        created: "2024-01-15"
    },
    {
        id: 2,
        name: "Clean Water Initiative",
        status: "completed",
        progress: 100,
        raised: 65000,
        goal: 60000,
        backers: 189,
        daysLeft: 0,
        category: "Health",
        created: "2023-11-20"
    },
    {
        id: 3,
        name: "Solar Panel School",
        status: "pending",
        progress: 35,
        raised: 28000,
        goal: 80000,
        backers: 95,
        daysLeft: 45,
        category: "Education",
        created: "2024-06-10"
    }
];

// Dữ liệu funding theo thời gian
const fundingData = [
    { date: '2024-01', amount: 5000, backers: 23 },
    { date: '2024-02', amount: 8500, backers: 45 },
    { date: '2024-03', amount: 12000, backers: 67 },
    { date: '2024-04', amount: 15500, backers: 89 },
    { date: '2024-05', amount: 22000, backers: 124 },
    { date: '2024-06', amount: 28000, backers: 156 },
    { date: '2024-07', amount: 35000, backers: 198 },
    { date: '2024-08', amount: 42000, backers: 234 },
    { date: '2024-09', amount: 51000, backers: 278 },
    { date: '2024-10', amount: 62000, backers: 312 },
    { date: '2024-11', amount: 75000, backers: 358 },
    { date: '2024-12', amount: 85000, backers: 395 }
];

// Dữ liệu engagement
const engagementData = [
    { metric: 'Views', value: 2250, maxValue: 3500 },
    { metric: 'Shares', value: 850, maxValue: 1200 },
    { metric: 'Comments', value: 1320, maxValue: 500 },
    { metric: 'Likes', value: 680, maxValue: 2000 },
    { metric: 'Follows', value: 600, maxValue: 150 }
];

// Dữ liệu category distribution
const categoryData = [
    { name: 'Environment', value: 45, color: '#10B981' },
    { name: 'Education', value: 30, color: '#3B82F6' },
    { name: 'Health', value: 25, color: '#F59E0B' }
];

// Dữ liệu impact metrics
const impactData = [
    { month: 'Jan', trees: 150, water: 500, beneficiaries: 120 },
    { month: 'Feb', trees: 320, water: 750, beneficiaries: 280 },
    { month: 'Mar', trees: 450, water: 1200, beneficiaries: 420 },
    { month: 'Apr', trees: 620, water: 1800, beneficiaries: 580 },
    { month: 'May', trees: 780, water: 2400, beneficiaries: 720 },
    { month: 'Jun', trees: 950, water: 3000, beneficiaries: 880 }
];

const StatCard: React.FC<{
    title: string;
    value: string;
    change?: string;
    icon: React.ReactNode;
    color: string;
    subtitle?: string;
}> = ({ title, value, change, icon, color, subtitle }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-between mb-4">
            <div className={`${color} p-3 rounded-lg`}>
                {icon}
            </div>
            {change && (
                <span className="text-green-500 text-sm font-semibold">{change}</span>
            )}
        </div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
    </div>
);

const ProjectCard: React.FC<{
    project: typeof projectData[0];
}> = ({ project }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'active' ? 'bg-green-100 text-green-800' :
                        project.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                    }`}>
                    {project.status}
                </span>
            </div>

            <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <p className="text-sm text-gray-500">Raised</p>
                    <p className="text-lg font-bold text-gray-900">${project.raised.toLocaleString()}</p>
                </div>
                <div>
                    <p className="text-sm text-gray-500">Goal</p>
                    <p className="text-lg font-bold text-gray-900">${project.goal.toLocaleString()}</p>
                </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {project.backers} backers
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {project.daysLeft > 0 ? `${project.daysLeft} days left` : 'Completed'}
                </div>
            </div>
        </div>
    );
};

const ChartCard: React.FC<{
    title: string;
    children: React.ReactNode;
    className?: string;
}> = ({ title, children, className = "" }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow ${className}`}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        {children}
    </div>
);

export default function ProjectCreatorDashboard() {
    const totalRaised = projectData.reduce((sum, project) => sum + project.raised, 0);
    const totalBackers = projectData.reduce((sum, project) => sum + project.backers, 0);
    const activeProjects = projectData.filter(p => p.status === 'active').length;
    const completedProjects = projectData.filter(p => p.status === 'completed').length;

    return (
        <div className="min-h-screen p-6">
            <div className="mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Project Creator Dashboard</h1>
                    <p className="text-gray-600">Track your project progress and funding performance</p>
                </div>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        title="Total Raised"
                        value={`$${totalRaised.toLocaleString()}`}
                        change="+23.5%"
                        icon={<DollarSign className="w-6 h-6 text-white" />}
                        color="bg-green-500"
                    />
                    <StatCard
                        title="Total Backers"
                        value={totalBackers.toString()}
                        change="+15.2%"
                        icon={<Users className="w-6 h-6 text-white" />}
                        color="bg-blue-500"
                    />
                    <StatCard
                        title="Active Projects"
                        value={activeProjects.toString()}
                        icon={<Target className="w-6 h-6 text-white" />}
                        color="bg-purple-500"
                    />
                    <StatCard
                        title="Completed Projects"
                        value={completedProjects.toString()}
                        icon={<CheckCircle className="w-6 h-6 text-white" />}
                        color="bg-orange-500"
                    />
                </div>

                {/* My Projects */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projectData.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    {/* Funding Progress */}
                    <ChartCard title="Funding Progress Over Time">
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={fundingData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip
                                    formatter={(value, name) => [
                                        name === 'amount' ? `$${value.toLocaleString()}` : value,
                                        name === 'amount' ? 'Amount' : 'Backers'
                                    ]}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="amount"
                                    stroke="#10B981"
                                    fill="#10B981"
                                    fillOpacity={0.6}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Engagement Metrics */}
                    <ChartCard title="Project Engagement">
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={engagementData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="metric" />
                                <PolarRadiusAxis />
                                <Radar
                                    name="Engagement"
                                    dataKey="value"
                                    stroke="#3B82F6"
                                    fill="#3B82F6"
                                    fillOpacity={0.6}
                                />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                {/* More Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Category Distribution */}
                    <ChartCard title="Projects by Category">
                        <ResponsiveContainer width="100%" height={250}>
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

                    {/* Backer Growth */}
                    <ChartCard title="Backer Growth">
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={fundingData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="backers"
                                    stroke="#8B5CF6"
                                    strokeWidth={3}
                                    dot={{ fill: '#8B5CF6' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartCard>

                    {/* Impact Metrics */}
                    <ChartCard title="Environmental Impact">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={impactData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="trees" fill="#10B981" name="Trees Planted" />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartCard>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center mb-4">
                            <Eye className="w-8 h-8 text-blue-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">Total Views</h3>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">45,892</p>
                        <p className="text-sm text-green-500">+12.5% this month</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center mb-4">
                            <Heart className="w-8 h-8 text-red-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">Total Likes</h3>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">3,247</p>
                        <p className="text-sm text-green-500">+8.3% this month</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center mb-4">
                            <Share2 className="w-8 h-8 text-purple-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">Total Shares</h3>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">1,089</p>
                        <p className="text-sm text-green-500">+15.7% this month</p>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                        <div className="flex items-center mb-4">
                            <Award className="w-8 h-8 text-yellow-500 mr-3" />
                            <h3 className="text-lg font-semibold text-gray-900">Success Rate</h3>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">85%</p>
                        <p className="text-sm text-green-500">Above average</p>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-center p-4 bg-green-50 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Project milestone reached</p>
                                <p className="text-sm text-gray-600">Reforestation Project Vietnam reached 75% funding</p>
                            </div>
                            <span className="text-xs text-gray-500 ml-auto">2 hours ago</span>
                        </div>

                        <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                            <Users className="w-5 h-5 text-blue-500 mr-3" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">New backer joined</p>
                                <p className="text-sm text-gray-600">15 new backers supported your Clean Water Initiative</p>
                            </div>
                            <span className="text-xs text-gray-500 ml-auto">5 hours ago</span>
                        </div>

                        <div className="flex items-center p-4 bg-yellow-50 rounded-lg">
                            <AlertCircle className="w-5 h-5 text-yellow-500 mr-3" />
                            <div>
                                <p className="text-sm font-medium text-gray-900">Update required</p>
                                <p className="text-sm text-gray-600">Solar Panel School project needs progress update</p>
                            </div>
                            <span className="text-xs text-gray-500 ml-auto">1 day ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}