import { Role } from '@/utils/auth'

export interface RouteConfig {
    path: string
    component: React.ComponentType
    layout: React.ComponentType<{ children: React.ReactNode }>
    isPrivate: boolean
    role: Role | Role[]
    params?: Record<string, string>
}
