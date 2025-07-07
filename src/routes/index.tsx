import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import { isAuthenticated, getUserRole } from '@/utils/auth'
import ForbiddenPage from '@/pages/Forbidden'
import NotFoundPage from '@/pages/NotFound'
import routes from './configs'
import type { Role } from '@/utils/auth'
import LoadingUI from '@/components/Loading'

export default function AppRoutes() {
    const location = useLocation()
    const authed = isAuthenticated()
    const userRole = getUserRole()

    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-gray-500">
            <LoadingUI />
        </div>
        }>
            <Routes>
                {routes.map(({ path, component: Component, layout: Layout, isPrivate, role }) => {
                    let content;

                    const allowedRoles: Role[] = Array.isArray(role) ? role : [role];

                    if (isPrivate && !authed) {
                        content = <Navigate to={`/login?redirect=${location.pathname}`} replace />;
                    } else if (isPrivate && !allowedRoles.includes(userRole)) {
                        content = <Navigate to="/403" replace />;
                    } else if ((path === '/login' || path === '/register') && authed) {
                        content = <Navigate to="/" replace />;
                    } else {
                        content = (
                            <Layout>
                                <Component />
                            </Layout>
                        );
                    }

                    return <Route key={path} path={path} element={content} />;
                })}

                <Route path="/403" element={<ForbiddenPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>

        </Suspense>
    )
}
