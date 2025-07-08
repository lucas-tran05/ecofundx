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
const PostsPage = lazy(() => import('@/pages/Posts'))



// Layouts
const Style0Layout = lazy(() => import('@/layouts/Style0'))
const Style1Layout = lazy(() => import('@/layouts/Style1'))
const Style2Layout = lazy(() => import('@/layouts/Style2'))
const Style3Layout = lazy(() => import('@/layouts/Style3'))

const routes: RouteConfig[] = [
    {
        path: '/login',
        component: LoginPage,
        layout: Style0Layout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/register',
        component: RegisterPage,
        layout: Style3Layout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/active',
        component: ActivePage,
        layout: Style3Layout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/',
        component: HomePage,
        layout: Style1Layout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/legal',
        component: LegalPage,
        layout: Style1Layout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/projects',
        component: ProjectsPage,
        layout: Style1Layout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/project-view/:id',
        component: ViewProject,
        layout: Style0Layout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/project-contribute/:id',
        component: ContributePage,
        layout: Style2Layout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/create-project',
        component: CreateNewPage,
        layout: Style2Layout,
        isPrivate: true,
        role: [Role.Contributor, Role.Admin],
    },
    {
        path: '/wallet',
        component: WalletPage,
        layout: Style1Layout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/settings',
        component: SettingsPage,
        layout: Style1Layout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/contact',
        component: ContactPage,
        layout: Style1Layout,
        isPrivate: false,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/forum',
        component: ForumPage,
        layout: Style1Layout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/post',
        component: PostsPage,
        layout: Style2Layout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/about',
        component: AboutPage,
        layout: Style1Layout,
        isPrivate: false,
        role: [Role.Guest, Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/profile',
        component: ProfilePage,
        layout: Style1Layout,
        isPrivate: true,
        role: [Role.User, Role.Contributor, Role.Admin],
    },
    {
        path: '/startup/',
        component: ContributorDashboard,
        layout: Style0Layout,
        isPrivate: true,
        role: [Role.Contributor, Role.Admin],
    },
    {
        path: '/startup/dashboard',
        component: ContributorDashboard,
        layout: Style0Layout,
        isPrivate: true,
        role: [Role.Contributor, Role.Admin],
    },
    {
        path: '/admin',
        component: AdminDashboard,
        layout: Style0Layout,
        isPrivate: true,
        role: [Role.Admin],
    },
    {
        path: '/admin/dashboard',
        component: AdminDashboard,
        layout: Style0Layout,
        isPrivate: true,
        role: [Role.Admin],
    },

]

export default routes
