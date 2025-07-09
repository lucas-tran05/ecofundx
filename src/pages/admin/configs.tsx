import { Book, Home, User,  } from 'lucide-react';
import type { NavItem } from '@/types/nav';

// BarChart3, Wallet, Settings

const navItems: NavItem[] = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: <Home className="w-5 h-5" />,
            path: '/admin/dashboard'
        },
        {
            id: 'users_management',
            label: 'Users Management',
            icon: <User className="w-5 h-5" />,
            path: '/admin/users-management'
        },
        {
            id: 'projects',
            label: 'Projects',
            icon: <Book className="w-5 h-5" />,
            path: '/admin/projects'
        }
        // {
        //     id: 'wallet',
        //     label: 'Wallet',
        //     icon: <Wallet className="w-5 h-5" />,
        //     path: '/admin/wallet',
        // },
        // {
        //     id: 'settings',
        //     label: 'Settings',
        //     icon: <Settings className="w-5 h-5" />,
        //     path: '/admin/settings'
        // }
    ];

export { navItems };