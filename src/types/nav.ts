export interface NavItem {
    id: string;
    label: string;
    icon: React.ReactNode;
    path: string;
    badge?: string | number;
    children?: NavItem[];
}
