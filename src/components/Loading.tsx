export default function LoadingUI() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* Ripple Loader */}
            <div className="relative w-12 h-12">
                {[0, 0.2, 0.4].map((delay, idx) => (
                    <div
                        key={idx}
                        className="absolute inset-0 w-full h-full border-4 border-green-400 rounded-full opacity-20 animate-ping"
                        style={{ animationDelay: `${delay}s` }}
                    />
                ))}
                {/* Core circle */}
                <div className="absolute inset-0 w-full h-full border-4 border-green-600 rounded-full" />
            </div>
        </div>

    );
}