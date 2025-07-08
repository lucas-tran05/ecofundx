import { Home } from 'lucide-react';
import type { NavItem } from '@/types/nav';

// BarChart3, Wallet, Settings

const navItems: NavItem[] = [
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: <Home className="w-5 h-5" />,
            path: '/admin/dashboard'
        },
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