
export default function LoadingUI() {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-20 h-20">
                {/* Lớp ripple ngoài */}
                <div className="absolute inset-0 w-full h-full border-4 border-green-400 rounded-full animate-ping opacity-20"></div>
                {/* Lớp ripple giữa */}
                <div
                    className="absolute inset-2 w-16 h-16 border-4 border-green-300 rounded-full animate-ping opacity-40"
                    style={{ animationDelay: '0.2s' }}
                ></div>
                {/* Lớp ripple trong cùng */}
                <div
                    className="absolute inset-4 w-12 h-12 border-4 border-green-500 rounded-full animate-ping opacity-60"
                    style={{ animationDelay: '0.4s' }}
                ></div>
                
            </div>
        </div>
    );
}
