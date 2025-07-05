import AppFooter from '@/components/Footer'
import AppHeader from '@/components/Header'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AppHeader />
            {children}
            <AppFooter />
        </>
    )
}
