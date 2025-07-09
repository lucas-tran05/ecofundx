import { useState, useMemo } from 'react';
import { Search, Plus, Filter, Calendar, Users, Target, AlertCircle, CheckCircle, Clock, Trash2, Edit, Eye, DollarSign, TrendingUp, PieChart, Settings } from 'lucide-react';

// Type definitions
type ProjectStatus = 'idea' | 'planning' | 'development' | 'testing' | 'launched' | 'paused';
type ProjectPriority = 'high' | 'medium' | 'low';
type FundingStage = 'seed' | 'series-a' | 'series-b' | 'self-funded' | 'bootstrapped';
type SortBy = 'name' | 'progress' | 'budget' | 'endDate' | 'fundingAllocated';
type SortOrder = 'asc' | 'desc';

interface Project {
    id: number;
    name: string;
    description: string;
    status: ProjectStatus;
    priority: ProjectPriority;
    progress: number;
    startDate: string;
    endDate: string;
    totalBudget: number;
    fundingAllocated: number;
    spent: number;
    expectedRevenue: number;
    teamSize: number;
    fundingStage: FundingStage;
    category: string;
    lastUpdated: string;
    roi: number;
}

// Mock data cho startup projects
const initialProjects: Project[] = [
    {
        id: 1,
        name: "EcoFund Platform",
        description: "Nền tảng đầu tư xanh và bền vững",
        status: "development",
        priority: "high",
        progress: 65,
        startDate: "2024-01-15",
        endDate: "2024-12-30",
        totalBudget: 500000000,
        fundingAllocated: 400000000,
        spent: 260000000,
        expectedRevenue: 1200000000,
        teamSize: 12,
        fundingStage: "series-a",
        category: "fintech",
        lastUpdated: "2024-07-08",
        roi: 240
    },
    {
        id: 2,
        name: "Green Mobile App",
        description: "Ứng dụng di động theo dõi carbon footprint",
        status: "testing",
        priority: "high",
        progress: 85,
        startDate: "2024-03-01",
        endDate: "2024-08-15",
        totalBudget: 150000000,
        fundingAllocated: 150000000,
        spent: 127500000,
        expectedRevenue: 300000000,
        teamSize: 6,
        fundingStage: "seed",
        category: "mobile",
        lastUpdated: "2024-07-09",
        roi: 200
    },
    {
        id: 3,
        name: "Smart Analytics Dashboard",
        description: "Dashboard phân tích dữ liệu đầu tư",
        status: "launched",
        priority: "medium",
        progress: 100,
        startDate: "2023-11-01",
        endDate: "2024-05-30",
        totalBudget: 80000000,
        fundingAllocated: 80000000,
        spent: 75000000,
        expectedRevenue: 180000000,
        teamSize: 4,
        fundingStage: "bootstrapped",
        category: "analytics",
        lastUpdated: "2024-06-15",
        roi: 240
    },
    {
        id: 4,
        name: "AI Risk Assessment",
        description: "Công cụ AI đánh giá rủi ro đầu tư",
        status: "planning",
        priority: "medium",
        progress: 20,
        startDate: "2024-06-01",
        endDate: "2025-03-31",
        totalBudget: 300000000,
        fundingAllocated: 200000000,
        spent: 40000000,
        expectedRevenue: 600000000,
        teamSize: 8,
        fundingStage: "series-a",
        category: "ai",
        lastUpdated: "2024-07-01",
        roi: 300
    },
    {
        id: 5,
        name: "Blockchain Integration",
        description: "Tích hợp blockchain cho transparency",
        status: "idea",
        priority: "low",
        progress: 5,
        startDate: "2024-08-01",
        endDate: "2025-06-30",
        totalBudget: 200000000,
        fundingAllocated: 50000000,
        spent: 10000000,
        expectedRevenue: 400000000,
        teamSize: 3,
        fundingStage: "seed",
        category: "blockchain",
        lastUpdated: "2024-07-05",
        roi: 200
    }
];

const StartupProjectDashboard = () => {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [priorityFilter, setPriorityFilter] = useState<string>('all');
    const [sortBy, setSortBy] = useState<SortBy>('name');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [showFilters, setShowFilters] = useState<boolean>(false);
    const [editingProject, setEditingProject] = useState<number | null>(null);

    const getStatusColor = (status: ProjectStatus): string => {
        switch (status) {
            case 'idea': return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'development': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'testing': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'launched': return 'bg-green-100 text-green-800 border-green-200';
            case 'paused': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status: ProjectStatus): React.ReactElement => {
        switch (status) {
            case 'idea': return <Target className="w-4 h-4" />;
            case 'planning': return <Calendar className="w-4 h-4" />;
            case 'development': return <Settings className="w-4 h-4" />;
            case 'testing': return <CheckCircle className="w-4 h-4" />;
            case 'launched': return <TrendingUp className="w-4 h-4" />;
            case 'paused': return <Clock className="w-4 h-4" />;
            default: return <AlertCircle className="w-4 h-4" />;
        }
    };

    const getPriorityColor = (priority: ProjectPriority): string => {
        switch (priority) {
            case 'high': return 'bg-red-100 text-red-800 border-red-200';
            case 'medium': return 'bg-orange-100 text-orange-800 border-orange-200';
            case 'low': return 'bg-green-100 text-green-800 border-green-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getFundingStageColor = (stage: FundingStage): string => {
        switch (stage) {
            case 'seed': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'series-a': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'series-b': return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'self-funded': return 'bg-green-100 text-green-800 border-green-200';
            case 'bootstrapped': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const filteredAndSortedProjects = useMemo(() => {
        let filtered = projects.filter(project => {
            const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
            const matchesPriority = priorityFilter === 'all' || project.priority === priorityFilter;

            return matchesSearch && matchesStatus && matchesPriority;
        });

        filtered.sort((a, b) => {
            let aValue: any, bValue: any;

            switch (sortBy) {
                case 'name':
                    aValue = a.name;
                    bValue = b.name;
                    break;
                case 'progress':
                    aValue = a.progress;
                    bValue = b.progress;
                    break;
                case 'budget':
                    aValue = a.totalBudget;
                    bValue = b.totalBudget;
                    break;
                case 'endDate':
                    aValue = new Date(a.endDate);
                    bValue = new Date(b.endDate);
                    break;
                case 'fundingAllocated':
                    aValue = a.fundingAllocated;
                    bValue = b.fundingAllocated;
                    break;
                default:
                    aValue = a[sortBy as keyof Project];
                    bValue = b[sortBy as keyof Project];
            }

            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });

        return filtered;
    }, [projects, searchTerm, statusFilter, priorityFilter, sortBy, sortOrder]);

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(amount);
    };

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('vi-VN');
    };

    const handleStatusUpdate = (id: number, newStatus: ProjectStatus): void => {
        setProjects(projects.map(project =>
            project.id === id
                ? { ...project, status: newStatus, lastUpdated: new Date().toISOString().split('T')[0] }
                : project
        ));
    };

    const handleFundingUpdate = (id: number, newFunding: number): void => {
        setProjects(projects.map(project =>
            project.id === id
                ? { ...project, fundingAllocated: newFunding, lastUpdated: new Date().toISOString().split('T')[0] }
                : project
        ));
    };

    const handleDelete = (id: number): void => {
        setProjects(projects.filter(project => project.id !== id));
    };

    const getStatusText = (status: ProjectStatus): string => {
        switch (status) {
            case 'idea': return 'Ý tưởng';
            case 'planning': return 'Lên kế hoạch';
            case 'development': return 'Phát triển';
            case 'testing': return 'Kiểm thử';
            case 'launched': return 'Đã ra mắt';
            case 'paused': return 'Tạm dừng';
            default: return status;
        }
    };

    const getPriorityText = (priority: ProjectPriority): string => {
        switch (priority) {
            case 'high': return 'Cao';
            case 'medium': return 'Trung bình';
            case 'low': return 'Thấp';
            default: return priority;
        }
    };

    const getFundingStageText = (stage: FundingStage): string => {
        switch (stage) {
            case 'seed': return 'Seed';
            case 'series-a': return 'Series A';
            case 'series-b': return 'Series B';
            case 'self-funded': return 'Tự tài trợ';
            case 'bootstrapped': return 'Bootstrap';
            default: return stage;
        }
    };

    const stats = useMemo(() => {
        const total = projects.length;
        const active = projects.filter(p => ['development', 'testing'].includes(p.status)).length;
        const launched = projects.filter(p => p.status === 'launched').length;
        const totalBudget = projects.reduce((sum, p) => sum + p.totalBudget, 0);
        const totalFunding = projects.reduce((sum, p) => sum + p.fundingAllocated, 0);
        const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);
        const expectedRevenue = projects.reduce((sum, p) => sum + p.expectedRevenue, 0);
        const averageROI = projects.reduce((sum, p) => sum + p.roi, 0) / projects.length;

        return { total, active, launched, totalBudget, totalFunding, totalSpent, expectedRevenue, averageROI };
    }, [projects]);

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard Dự Án Startup</h1>
                    <p className="text-gray-600">Quản lý portfolio dự án và phân bổ nguồn vốn hiệu quả</p>
                </div>

                {/* Enhanced Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Tổng Dự Án</p>
                                <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
                                <p className="text-sm text-blue-600">{stats.active} đang phát triển</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Target className="w-8 h-8 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Đã Ra Mắt</p>
                                <p className="text-3xl font-bold text-green-600">{stats.launched}</p>
                                <p className="text-sm text-green-600">ROI TB: {stats.averageROI.toFixed(0)}%</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-full">
                                <TrendingUp className="w-8 h-8 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Vốn Được Cấp</p>
                                <p className="text-2xl font-bold text-purple-600">{formatCurrency(stats.totalFunding)}</p>
                                <p className="text-sm text-purple-600">/{formatCurrency(stats.totalBudget)}</p>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-full">
                                <DollarSign className="w-8 h-8 text-purple-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Doanh Thu Kỳ Vọng</p>
                                <p className="text-2xl font-bold text-orange-600">{formatCurrency(stats.expectedRevenue)}</p>
                                <p className="text-sm text-orange-600">Đã chi: {formatCurrency(stats.totalSpent)}</p>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-full">
                                <PieChart className="w-8 h-8 text-orange-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm dự án..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <Filter className="w-4 h-4" />
                                Bộ lọc
                            </button>
                            <button className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                                <Plus className="w-4 h-4" />
                                Thêm Dự Án
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Trạng thái</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">Tất cả</option>
                                    <option value="idea">Ý tưởng</option>
                                    <option value="planning">Lên kế hoạch</option>
                                    <option value="development">Phát triển</option>
                                    <option value="testing">Kiểm thử</option>
                                    <option value="launched">Đã ra mắt</option>
                                    <option value="paused">Tạm dừng</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Độ ưu tiên</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={priorityFilter}
                                    onChange={(e) => setPriorityFilter(e.target.value)}
                                >
                                    <option value="all">Tất cả</option>
                                    <option value="high">Cao</option>
                                    <option value="medium">Trung bình</option>
                                    <option value="low">Thấp</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Sắp xếp theo</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortBy)}
                                >
                                    <option value="name">Tên</option>
                                    <option value="progress">Tiến độ</option>
                                    <option value="budget">Ngân sách</option>
                                    <option value="fundingAllocated">Vốn được cấp</option>
                                    <option value="endDate">Hạn chót</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Thứ tự</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                                >
                                    <option value="asc">Tăng dần</option>
                                    <option value="desc">Giảm dần</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredAndSortedProjects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                            <div className="p-6">
                                {/* Project Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                                        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                                                {getStatusIcon(project.status)}
                                                {getStatusText(project.status)}
                                            </span>
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                                                {getPriorityText(project.priority)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Tiến độ</span>
                                        <span className="font-medium">{project.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${project.progress}%` }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Funding Info */}
                                <div className="mb-4 space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Vốn được cấp:</span>
                                        <span className="text-sm font-medium text-blue-600">{formatCurrency(project.fundingAllocated)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Đã chi tiêu:</span>
                                        <span className="text-sm font-medium text-red-600">{formatCurrency(project.spent)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm text-gray-600">Còn lại:</span>
                                        <span className="text-sm font-medium text-green-600">{formatCurrency(project.fundingAllocated - project.spent)}</span>
                                    </div>
                                </div>

                                {/* Additional Info */}
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{project.teamSize} người</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-4 h-4" />
                                        <span>{formatDate(project.endDate)}</span>
                                    </div>
                                </div>

                                {/* Funding Stage & ROI */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getFundingStageColor(project.fundingStage)}`}>
                                        {getFundingStageText(project.fundingStage)}
                                    </span>
                                    <span className="text-sm font-medium text-purple-600">ROI: {project.roi}%</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                                    <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                                        <Edit className="w-4 h-4" />
                                        Cập nhật
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                                        <DollarSign className="w-4 h-4" />
                                        Phân bổ
                                    </button>
                                    <button className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                        <Eye className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredAndSortedProjects.length === 0 && (
                    <div className="text-center py-12">
                        <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-500 text-lg">Không tìm thấy dự án nào phù hợp</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StartupProjectDashboard;