import { lazy } from 'react'
import { Role } from '@/utils/auth'
import type { RouteConfig } from '@/types/route'

// Pages
const LoginPage = lazy(() => import('@/pages/auth/Login'))
const RegisterPage = lazy(() => import('@/pages/auth/Register'))
const ActivePage = lazy(() => import('@/pages/auth/Active'))
const HomePage = lazy(() => import('@/pages/Home'))
const ProjectsPage = lazy(() => import('@/pages/Projects'))
const ContactPage = lazy(() => import('@/pages/Contact'))
const ForumPage = lazy(() => import('@/pages/Forum'))
const AboutPage = lazy(() => import('@/pages/About'))
const ProfilePage = lazy(() => import('@/pages/Profile'))
const ContributorDashboard = lazy(() => import('@/pages/startup/Dashboard'))
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'))
const ViewProject = lazy(() => import('@/pages/View'))
const ContributePage = lazy(() => import('@/pages/Contribute'))
const CreateNewPage = lazy(() => import('@/pages/CreateNew'))
const SettingsPage = lazy(() => import('@/pages/Settings'))
const LegalPage = lazy(() => import('@/pages/Legal'))
const WalletPage = lazy(() => import('@/pages/Wallet'))


// Layouts
const MainLayout = lazy(() => import('@/layouts/Main'))
const AuthLayout = lazy(() => import('@/layouts/Auth'))

const routes: RouteConfig[] = [
    {
        path: '/login',
        component: LoginPage,
        layout: AuthLayout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/register',
        component: RegisterPage,
        layout: AuthLayout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/active',
        component: ActivePage,
        layout: AuthLayout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/',
        component: HomePage,
        layout: MainLayout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/legal',
        component: LegalPage,
        layout: MainLayout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/projects',
        component: ProjectsPage,
        layout: MainLayout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/project-view/:id',
        component: ViewProject,
        layout: MainLayout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/project-contribute/:id',
        component: ContributePage,
        layout: MainLayout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/create-project',
        component: CreateNewPage,
        layout: MainLayout,
        isPrivate: false,
        role: [Role.Contributor, Role.Admin],
    },
    {
        path: '/wallet',
        component: WalletPage,
        layout: MainLayout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/settings',
        component: SettingsPage,
        layout: MainLayout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/contact',
        component: ContactPage,
        layout: MainLayout,
        isPrivate: false,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/forum',
        component: ForumPage,
        layout: MainLayout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/about',
        component: AboutPage,
        layout: MainLayout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/profile',
        component: ProfilePage,
        layout: MainLayout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/startup/',
        component: ContributorDashboard,
        layout: AuthLayout,
        isPrivate: true,
        role: [Role.Contributor, Role.Admin],
    },
    {
        path: '/startup/dashboard',
        component: ContributorDashboard,
        layout: AuthLayout,
        isPrivate: true,
        role: [Role.Contributor, Role.Admin],
    },
    {
        path: '/admin',
        component: AdminDashboard,
        layout: AuthLayout,
        isPrivate: true,
        role: [Role.Admin],
    },
    {
        path: '/admin/dashboard',
        component: AdminDashboard,
        layout: AuthLayout,
        isPrivate: true,
        role: [Role.Admin],
    },

]

export default routes
