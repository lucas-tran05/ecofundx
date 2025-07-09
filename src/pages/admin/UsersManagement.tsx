import { useState, useMemo } from 'react';
import {
    Search, Plus, Edit, Trash2, Eye, Filter, Download, Upload,
    Mail, Phone, Calendar, X,
    ChevronLeft, ChevronRight,
    //  Ban, Check, MoreHorizontal
} from 'lucide-react';
interface User {
    id: number;
    username: string;
    fullname: string;
    email: string;
    phone: string;
    avatar: string;
    role: 'admin' | 'moderator' | 'user';
    status: 'active' | 'inactive' | 'suspended';
    joinDate: string;
    lastLogin: string;
    location: string;
}

const AdminUserManagement = () => {
    // Mock data
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            username: 'john_doe',
            fullname: 'John Doe',
            email: 'john@example.com',
            phone: '+1234567890',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
            role: 'user',
            status: 'active',
            joinDate: '2024-01-15',
            lastLogin: '2024-07-08',
            location: 'New York, USA'
        },
        {
            id: 2,
            username: 'jane_smith',
            fullname: 'Jane Smith',
            email: 'jane@example.com',
            phone: '+0987654321',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b381d01b?w=40&h=40&fit=crop&crop=face',
            role: 'moderator',
            status: 'active',
            joinDate: '2024-02-20',
            lastLogin: '2024-07-09',
            location: 'London, UK'
        },
        {
            id: 3,
            username: 'bob_wilson',
            fullname: 'Bob Wilson',
            email: 'bob@example.com',
            phone: '+1122334455',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
            role: 'user',
            status: 'suspended',
            joinDate: '2024-03-10',
            lastLogin: '2024-07-05',
            location: 'Sydney, Australia'
        },
        {
            id: 4,
            username: 'alice_johnson',
            fullname: 'Alice Johnson',
            email: 'alice@example.com',
            phone: '+5566778899',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
            role: 'admin',
            status: 'active',
            joinDate: '2023-12-05',
            lastLogin: '2024-07-09',
            location: 'Toronto, Canada'
        },
        {
            id: 5,
            username: 'charlie_brown',
            fullname: 'Charlie Brown',
            email: 'charlie@example.com',
            phone: '+9988776655',
            avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
            role: 'user',
            status: 'inactive',
            joinDate: '2024-04-12',
            lastLogin: '2024-06-20',
            location: 'Berlin, Germany'
        }
    ]);

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [roleFilter, setRoleFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalType, setModalType] = useState<string>(''); // 'add', 'edit', 'view', 'delete'
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [itemsPerPage] = useState<number>(5);

    // Filter and search users
    const filteredUsers = useMemo(() => {
        return users.filter(user => {
            const matchesSearch = user.fullname.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.username.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesRole = roleFilter === 'all' || user.role === roleFilter;
            const matchesStatus = statusFilter === 'all' || user.status === statusFilter;

            return matchesSearch && matchesRole && matchesStatus;
        });
    }, [users, searchTerm, roleFilter, statusFilter]);

    // Pagination
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const currentUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleSelectUser = (userId: number) => {
        setSelectedUsers(prev =>
            prev.includes(userId)
                ? prev.filter(id => id !== userId)
                : [...prev, userId]
        );
    };

    const handleSelectAll = () => {
        if (selectedUsers.length === currentUsers.length) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(currentUsers.map(user => user.id));
        }
    };

    // const handleStatusChange = (userId: number, newStatus: User['status']) => {
    //     setUsers(prev => prev.map(user =>
    //         user.id === userId ? { ...user, status: newStatus } : user
    //     ));
    // };

    const handleDeleteUser = (userId: number) => {
        setUsers(prev => prev.filter(user => user.id !== userId));
        setSelectedUsers(prev => prev.filter(id => id !== userId));
    };

    const openModal = (type: string, user: User | null = null) => {
        setModalType(type);
        setSelectedUser(user);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedUser(null);
        setModalType('');
    };

    const getRoleColor = (role: User['role']) => {
        switch (role) {
            case 'admin': return 'bg-red-100 text-red-800';
            case 'moderator': return 'bg-yellow-100 text-yellow-800';
            case 'user': return 'bg-blue-100 text-blue-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status: User['status']) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'inactive': return 'bg-gray-100 text-gray-800';
            case 'suspended': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const UserModal = () => {
        if (!showModal) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto shadow-xl">
                    {/* Modal header */}
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">
                            {modalType === 'add' && 'Add New User'}
                            {modalType === 'edit' && 'Edit User'}
                            {modalType === 'view' && 'User Details'}
                            {modalType === 'delete' && 'Delete User'}
                        </h3>
                        <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {modalType === 'delete' ? (
                        <div>
                            <p className="mb-4">Are you sure you want to delete {selectedUser?.fullname}?</p>
                            <div className="flex justify-end space-x-2">
                                <button
                                    onClick={closeModal}
                                    className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        if (selectedUser) {
                                            handleDeleteUser(selectedUser.id);
                                        }
                                        closeModal();
                                    }}
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue={selectedUser?.fullname || ''}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    readOnly={modalType === 'view'}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                                <input
                                    type="text"
                                    defaultValue={selectedUser?.username || ''}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    readOnly={modalType === 'view'}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    defaultValue={selectedUser?.email || ''}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    readOnly={modalType === 'view'}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    defaultValue={selectedUser?.phone || ''}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    readOnly={modalType === 'view'}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select
                                    defaultValue={selectedUser?.role || 'user'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled={modalType === 'view'}
                                >
                                    <option value="user">User</option>
                                    <option value="moderator">Moderator</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                                <select
                                    defaultValue={selectedUser?.status || 'active'}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    disabled={modalType === 'view'}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="suspended">Suspended</option>
                                </select>
                            </div>

                            {modalType !== 'view' && (
                                <div className="flex justify-end space-x-2 pt-4">
                                    <button
                                        onClick={closeModal}
                                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                        {modalType === 'add' ? 'Add User' : 'Save Changes'}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <h1 className="text-2xl font-bold">User Management</h1>
                        <div className="flex flex-wrap gap-2">
                            <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                                <Upload className="w-4 h-4 mr-2" /> Import
                            </button>
                            <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">
                                <Download className="w-4 h-4 mr-2" /> Export
                            </button>
                            <button onClick={() => openModal('add')} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                <Plus className="w-4 h-4 mr-2" /> Add User
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Filters */}
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <select
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                            >
                                <option value="all">All Roles</option>
                                <option value="admin">Admin</option>
                                <option value="moderator">Moderator</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        <div className="relative">
                            <select
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                                <option value="suspended">Suspended</option>
                            </select>
                        </div>

                        <div className="flex flex-col justify-center items-start md:items-end">
                            <span className="text-sm text-gray-600">
                                {filteredUsers.length} user{filteredUsers.length !== 1 ? 's' : ''} found
                            </span>
                            {selectedUsers.length > 0 && (
                                <span className="text-sm text-blue-600 font-medium">
                                    {selectedUsers.length} selected
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left">
                                        <input
                                            type="checkbox"
                                            checked={selectedUsers.length === currentUsers.length && currentUsers.length > 0}
                                            onChange={handleSelectAll}
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        User
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Role
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Last Login
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentUsers.map((user) => (
                                    <tr key={user.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedUsers.includes(user.id)}
                                                onChange={() => handleSelectUser(user.id)}
                                                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <img
                                                    src={user.avatar}
                                                    alt={user.fullname}
                                                    className="w-10 h-10 rounded-full mr-3"
                                                />
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900 flex items-center">
                                                        {user.fullname}
                                                    </div>
                                                    <div className="text-sm text-gray-500">@{user.username}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm text-gray-900 flex items-center">
                                                <Mail className="w-4 h-4 mr-1 text-gray-400" />
                                                {user.email}
                                            </div>
                                            <div className="text-sm text-gray-500 flex items-center">
                                                <Phone className="w-4 h-4 mr-1 text-gray-400" />
                                                {user.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleColor(user.role)}`}>
                                                {user.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(user.status)}`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-1 text-gray-400" />
                                                {user.lastLogin}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium">
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => openModal('view', user)}
                                                    className="text-blue-600 hover:text-blue-900"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => openModal('edit', user)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    <Edit className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => openModal('delete', user)}
                                                    className="text-red-600 hover:text-red-900"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                {/* <div className="relative group">
                                                    <button className="text-gray-600 hover:text-gray-900">
                                                        <MoreHorizontal className="w-4 h-4" />
                                                    </button>
                                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                                                        <div className="py-1">
                                                            <button
                                                                onClick={() => handleStatusChange(user.id, user.status === 'active' ? 'suspended' : 'active')}
                                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                                                            >
                                                                {user.status === 'active' ? <Ban className="w-4 h-4 mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                                                                {user.status === 'active' ? 'Suspend' : 'Activate'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200">
                        <div className="flex-1 flex justify-between items-center">
                            <p className="text-sm text-gray-700">
                                Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredUsers.length)} of {filteredUsers.length} results
                            </p>
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`px-3 py-1 text-sm rounded-md ${currentPage === page
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-600 bg-white border border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <UserModal />
        </div>
    );
};

export default AdminUserManagement;