import {
    Home, PenBoxIcon, Wallet,
    // Settings
} from "lucide-react";
import type { NavItem } from "@/types/nav";

const navItems: NavItem[] = [
    {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Home className="w-5 h-5" />,
        path: '/startup/dashboard'
    },
    {
        id: 'create',
        label: 'Create New',
        icon: <PenBoxIcon className="w-5 h-5" />,
        path: '/startup/create-project',
    },
    {
        id: 'wallet',
        label: 'Wallet',
        icon: <Wallet className="w-5 h-5" />,
        path: '/startup/wallet',
    },
    // {
    //     id: 'settings',
    //     label: 'Settings',
    //     icon: <Settings className="w-5 h-5" />,
    //     path: '/startup/settings'
    // }
];

export { navItems }