import { useState, useMemo } from 'react';
import { Search, Plus, Filter, Calendar, Users, Target, AlertCircle, CheckCircle, Clock, Trash2, Edit, Eye } from 'lucide-react';

// Type definitions
type ProjectStatus = 'active' | 'completed' | 'planning' | 'on-hold';
type ProjectPriority = 'high' | 'medium' | 'low';
type SortBy = 'name' | 'progress' | 'budget' | 'endDate';
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
    budget: number;
    spent: number;
    manager: string;
    team: string[];
    category: string;
}

// Mock data cho dự án
const initialProjects: Project[] = [
    {
        id: 1,
        name: "Website E-commerce",
        description: "Phát triển trang web bán hàng trực tuyến",
        status: "active",
        priority: "high",
        progress: 75,
        startDate: "2024-01-15",
        endDate: "2024-08-30",
        budget: 50000000,
        spent: 37500000,
        manager: "Nguyễn Văn A",
        team: ["Frontend Dev", "Backend Dev", "Designer", "QA"],
        category: "web-development"
    },
    {
        id: 2,
        name: "Mobile App Banking",
        description: "Ứng dụng ngân hàng di động",
        status: "completed",
        priority: "high",
        progress: 100,
        startDate: "2023-10-01",
        endDate: "2024-03-15",
        budget: 80000000,
        spent: 75000000,
        manager: "Trần Thị B",
        team: ["Mobile Dev", "UI/UX", "Security Expert"],
        category: "mobile-app"
    },
    {
        id: 3,
        name: "CRM System",
        description: "Hệ thống quản lý khách hàng",
        status: "planning",
        priority: "medium",
        progress: 25,
        startDate: "2024-06-01",
        endDate: "2024-12-31",
        budget: 35000000,
        spent: 8750000,
        manager: "Lê Văn C",
        team: ["Full-stack Dev", "Business Analyst"],
        category: "system"
    },
    {
        id: 4,
        name: "AI Chatbot",
        description: "Phát triển chatbot thông minh",
        status: "on-hold",
        priority: "low",
        progress: 10,
        startDate: "2024-05-01",
        endDate: "2024-11-30",
        budget: 25000000,
        spent: 2500000,
        manager: "Phạm Thị D",
        team: ["AI Engineer", "Data Scientist"],
        category: "ai"
    },
    {
        id: 5,
        name: "Data Analytics Dashboard",
        description: "Bảng điều khiển phân tích dữ liệu",
        status: "active",
        priority: "high",
        progress: 60,
        startDate: "2024-03-01",
        endDate: "2024-09-30",
        budget: 40000000,
        spent: 24000000,
        manager: "Hoàng Văn E",
        team: ["Data Engineer", "Frontend Dev", "UX Designer"],
        category: "analytics"
    }
];

const ProjectManagement = () => {
    const [projects, setProjects] = useState<Project[]>(initialProjects);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [priorityFilter, setPriorityFilter] = useState<string>('all');
    const [sortBy, setSortBy] = useState<SortBy>('name');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [showFilters, setShowFilters] = useState<boolean>(false);

    const getStatusColor = (status: ProjectStatus): string => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800 border-green-200';
            case 'completed': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'planning': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'on-hold': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status: ProjectStatus): React.ReactElement => {
        switch (status) {
            case 'active': return <CheckCircle className="w-4 h-4" />;
            case 'completed': return <Target className="w-4 h-4" />;
            case 'planning': return <Calendar className="w-4 h-4" />;
            case 'on-hold': return <Clock className="w-4 h-4" />;
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

    const filteredAndSortedProjects = useMemo(() => {
        let filtered = projects.filter(project => {
            const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.manager.toLowerCase().includes(searchTerm.toLowerCase());

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
                    aValue = a.budget;
                    bValue = b.budget;
                    break;
                case 'endDate':
                    aValue = new Date(a.endDate);
                    bValue = new Date(b.endDate);
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

    const handleDelete = (id: number): void => {
        setProjects(projects.filter(project => project.id !== id));
    };

    const getStatusText = (status: ProjectStatus): string => {
        switch (status) {
            case 'active': return 'Đang thực hiện';
            case 'completed': return 'Hoàn thành';
            case 'planning': return 'Lên kế hoạch';
            case 'on-hold': return 'Tạm dừng';
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

    const stats = useMemo(() => {
        const total = projects.length;
        const active = projects.filter(p => p.status === 'active').length;
        const completed = projects.filter(p => p.status === 'completed').length;
        const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);
        const totalSpent = projects.reduce((sum, p) => sum + p.spent, 0);

        return { total, active, completed, totalBudget, totalSpent };
    }, [projects]);

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Quản Lý Dự Án</h1>
                    <p className="text-gray-600">Theo dõi và quản lý tất cả các dự án của công ty</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Tổng Dự Án</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Target className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Đang Thực Hiện</p>
                                <p className="text-2xl font-bold text-green-600">{stats.active}</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-full">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Hoàn Thành</p>
                                <p className="text-2xl font-bold text-blue-600">{stats.completed}</p>
                            </div>
                            <div className="p-3 bg-blue-100 rounded-full">
                                <Target className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Tổng Ngân Sách</p>
                                <p className="text-2xl font-bold text-purple-600">{formatCurrency(stats.totalBudget)}</p>
                            </div>
                            <div className="p-3 bg-purple-100 rounded-full">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-200">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm dự án..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <Filter className="w-4 h-4" />
                                Bộ lọc
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                <Plus className="w-4 h-4" />
                                Thêm Dự Án
                            </button>
                        </div>
                    </div>

                    {showFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Trạng thái</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">Tất cả</option>
                                    <option value="active">Đang thực hiện</option>
                                    <option value="completed">Hoàn thành</option>
                                    <option value="planning">Lên kế hoạch</option>
                                    <option value="on-hold">Tạm dừng</option>
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
                                <div className="flex gap-2">
                                    <select
                                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value as SortBy)}
                                    >
                                        <option value="name">Tên</option>
                                        <option value="progress">Tiến độ</option>
                                        <option value="budget">Ngân sách</option>
                                        <option value="endDate">Hạn chót</option>
                                    </select>
                                    <select
                                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        value={sortOrder}
                                        onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                                    >
                                        <option value="asc">Tăng dần</option>
                                        <option value="desc">Giảm dần</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Projects Table */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Dự án
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Trạng thái
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Tiến độ
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ngân sách
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Hạn chót
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Quản lý
                                    </th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Hành động
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {filteredAndSortedProjects.map((project) => (
                                    <tr key={project.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                                                    <div className="text-sm text-gray-500">{project.description}</div>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(project.priority)}`}>
                                                            {getPriorityText(project.priority)}
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            {project.team.length} thành viên
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                                                {getStatusIcon(project.status)}
                                                {getStatusText(project.status)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: `${project.progress}%` }}
                                                ></div>
                                            </div>
                                            <div className="text-sm text-gray-500 mt-1">{project.progress}%</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div>
                                                <div className="font-medium">{formatCurrency(project.budget)}</div>
                                                <div className="text-xs text-gray-500">
                                                    Đã dùng: {formatCurrency(project.spent)}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4 text-gray-400" />
                                                {formatDate(project.endDate)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-gray-400" />
                                                {project.manager}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="text-blue-600 hover:text-blue-900 transition-colors">
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button className="text-gray-600 hover:text-gray-900 transition-colors">
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(project.id)}
                                                    className="text-red-600 hover:text-red-900 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredAndSortedProjects.length === 0 && (
                        <div className="text-center py-12">
                            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500">Không tìm thấy dự án nào phù hợp</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectManagement;