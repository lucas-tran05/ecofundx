export default function LoadingUI() {
    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden flex items-center justify-center w-full">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 -z-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce blur-xl" />
                <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-pulse blur-2xl"/>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce blur-md"/>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-pulse blur-xl"/>
            </div>

            {/* Ripple Loader */}
            <div className="relative w-20 h-20">
                <div className="absolute inset-0 w-full h-full border-4 border-green-400 rounded-full animate-ping opacity-20" />
                <div
                    className="absolute inset-2 w-16 h-16 border-4 border-green-300 rounded-full animate-ping opacity-40"
                    style={{ animationDelay: '0.2s' }}
                />
                <div
                    className="absolute inset-4 w-12 h-12 border-4 border-green-500 rounded-full animate-ping opacity-60"
                    style={{ animationDelay: '0.4s' }}
                />
            </div>
        </div>
    );
}