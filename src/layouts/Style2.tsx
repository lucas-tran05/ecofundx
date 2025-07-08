import AppFooter from '@/components/Footer'

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
                {/* Animated Background - Same as Login */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50">
                    {/* Floating Circles */}
                    <div className="absolute top-20 left-20 w-32 h-32 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                    <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                    <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-sky-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                    <div className="absolute bottom-20 right-20 w-28 h-28 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-indigo-400 opacity-10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                    <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-blue-400 opacity-15 rotate-12 animate-pulse"></div>

                    {/* Leaf-like Shapes */}
                    <div className="absolute top-1/2 left-10 w-8 h-16 bg-blue-500 opacity-20 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
                    <div className="absolute top-1/3 right-10 w-6 h-12 bg-indigo-500 opacity-25 rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '5s' }}></div>

                    {/* Gradient Orbs */}
                    <div className="absolute top-10 left-1/2 w-40 h-40 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-r from-sky-300 to-blue-300 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full">
                    {children}
                </div>
            </div>
            <AppFooter />
        </>
    )
}
