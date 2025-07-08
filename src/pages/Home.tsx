import { useState } from 'react';
import { Leaf, TrendingUp, Shield, Rocket, BarChart3, Check, ArrowRight, Play, Zap } from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from 'recharts';

import ProjectCard from '@/components/ProjectCard';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: <Leaf className="h-8 w-8" />,
            title: "Cộng đồng xanh",
            description: "Kết nối với cộng đồng đầu tư bền vững, chia sẻ kiến thức và cơ hội",
            color: "from-green-400 to-emerald-600",
            bgColor: "bg-green-50"
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            title: "Lợi nhuận bền vững",
            description: "Đầu tư thông minh với lợi nhuận ổn định và tác động tích cực",
            color: "from-blue-400 to-cyan-600",
            bgColor: "bg-blue-50"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Quản lý rủi ro",
            description: "Hệ thống đánh giá và quản lý rủi ro chuyên nghiệp",
            color: "from-purple-400 to-indigo-600",
            bgColor: "bg-purple-50"
        }
    ];

    const projects = [
        {
            id: "1",
            title: 'Nông trường năng lượng mặt trời',
            description: 'Dự án điện mặt trời quy mô lớn với công suất 50MW',
            category: 'Năng lượng',
            progress: 75,
            raised: 2.5,
            target: 3.2,
            gradient: 'from-green-400 to-emerald-600',
            investors: 234,
            rating: 4.8
        },
        {
            id: "2",
            title: 'Nhà máy tái chế thông minh',
            description: 'Công nghệ tái chế tiên tiến cho rác thải nhựa',
            category: 'Tái chế',
            progress: 60,
            raised: 1.5,
            target: 3.0,
            gradient: 'from-blue-400 to-cyan-600',
            investors: 187,
            rating: 4.6
        },
        {
            id: "3",
            title: 'Nông nghiệp hữu cơ thông minh',
            description: 'Hệ thống nông nghiệp sạch với công nghệ IoT',
            category: 'Nông nghiệp',
            progress: 45,
            raised: 1.0,
            target: 2.0,
            gradient: 'from-amber-400 to-orange-600',
            investors: 156,
            rating: 4.9
        }
    ];

    const benefits = [
        "Đăng ký miễn phí và dễ dàng",
        "Tiếp cận thị trường đầu tư rộng lớn",
        "Hỗ trợ phát triển dự án chuyên nghiệp"
    ];
    const data = [
        { month: 'Jan', projects: 10, investors: 50, funded: 1.2 },
        { month: 'Feb', projects: 25, investors: 60, funded: 3.3 },
        { month: 'Mar', projects: 10, investors: 20, funded: 3.3 },
        { month: 'Apr', projects: 60, investors: 55, funded: 4.5 },
        { month: 'May', projects: 25, investors: 38, funded: 1.2 },
        { month: 'Jun', projects: 45, investors: 64, funded: 1.1 },
        { month: 'Jul', projects: 30, investors: 30, funded: 1.0 },
        { month: 'Aug', projects: 10, investors: 32, funded: 3.8 },
        { month: 'Sep', projects: 15, investors: 61, funded: 3.9 },
        { month: 'Oct', projects: 35, investors: 60, funded: 4.9 },
        { month: 'Nov', projects: 50, investors: 57, funded: 10 },
        { month: 'Dec', projects: 26, investors: 39, funded: 6.5 },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 py-4 sm:px-8 lg:px-16">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="relative z-10 container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`transition-all duration-1000`}>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                                <Zap className="w-4 h-4" />
                                <span className="text-sm font-semibold">Nền tảng đầu tư xanh #1</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.2] flex flex-wrap gap-x-2 px-2">
                                {"Đầu tư cho".split(" ").map((word, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-block animate-wave font-bold"
                                        style={{ animationDelay: `${idx * 0.15}s` }}
                                    >
                                        {word}
                                    </span>
                                ))}
                                <span
                                    className="inline-block animate-wave bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold leading-[1.3] align-baseline pb-1"
                                    style={{ animationDelay: `0.6s`, willChange: 'transform' }}
                                >
                                    tương
                                </span>

                                <span
                                    className="inline-block animate-wave bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent font-bold"
                                    style={{ animationDelay: `0.75s` }}
                                >
                                    lai
                                </span>
                                <span
                                    className="inline-block animate-wave font-bold"
                                    style={{ animationDelay: `0.6s` }}
                                >
                                    bền
                                </span>
                                <span
                                    className="inline-block animate-wave font-bold"
                                    style={{ animationDelay: `0.15s` }}
                                >
                                    vững
                                </span>
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Kết nối nhà đầu tư với các dự án xanh, tạo ra tác động tích cực cho môi trường và xã hội
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                                    onClick={() => navigate('/create-project?step=1')}
                                >
                                    Bắt đầu đầu tư
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="group bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                                    <Play className="w-5 h-5" />
                                    Xem demo
                                </button>
                            </div>
                        </div>
                        <div className={`relative transition-all duration-1000 delay-300 `}>
                            <div className="relative">
                                <div className="absolute w-full -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>

                                <div className="relative w-full max-w-xl mx-auto bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl py-4 px-2 flex flex-col items-center">
                                    <h3 className="md:text-xl font-bold text-center mb-2 text-gray-700">
                                        Thống kê theo tháng
                                    </h3>

                                    {/* Chart wrapper */}
                                    <div className="w-full h-[200px] md:h-[250px]">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={data}>
                                                <defs>
                                                    <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                                                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                                                    </linearGradient>

                                                    <linearGradient id="colorInvestors" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                                                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                                    </linearGradient>

                                                    <linearGradient id="colorFunded" x1="0" y1="0" x2="0" y2="1">
                                                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                                                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                                                    </linearGradient>
                                                </defs>

                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis yAxisId="left" orientation="left" />
                                                <YAxis yAxisId="right" orientation="right" />
                                                <Tooltip />

                                                {/* Dùng gradient đã định nghĩa bằng id */}
                                                <Area
                                                    yAxisId="left"
                                                    type="linear"
                                                    dataKey="projects"
                                                    stroke="#22c55e"
                                                    fill="url(#colorProjects)"
                                                    name="Dự án"
                                                />
                                                <Area
                                                    yAxisId="left"
                                                    type="linear"
                                                    dataKey="investors"
                                                    stroke="#3b82f6"
                                                    fill="url(#colorInvestors)"
                                                    name="Nhà đầu tư"
                                                />
                                                <Area
                                                    yAxisId="right"
                                                    type="linear"
                                                    dataKey="funded"
                                                    stroke="#a855f7"
                                                    fill="url(#colorFunded)"
                                                    strokeDasharray="5 5"
                                                    name="Huy động (Triệu USD)"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>


                                    </div>

                                    {/* Custom Legend dưới biểu đồ */}
                                    <div className="mt-4 text-sm flex flex-wrap justify-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <span className="w-4 h-1.5 bg-[#22c55e] inline-block rounded"></span>
                                            <span>Dự án</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="w-4 h-1.5 bg-[#3b82f6] inline-block rounded"></span>
                                            <span>Nhà đầu tư</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="w-4 h-1.5 bg-[#a855f7] inline-block rounded border border-dashed border-purple-700"></span>
                                            <span>Huy động</span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tại sao chọn EcoFundX?</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nền tảng đầu tư xanh tiên tiến với công nghệ hiện đại và cộng đồng tin cậy
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 cursor-pointer hover:scale-105 ${feature.bgColor} ${activeFeature === index ? 'ring-2 ring-green-500' : ''}`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                <div className="relative z-10">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Role Cards Section */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"></div>
                            <div className="relative z-10 p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                                        <Rocket className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Chủ dự án</h3>
                                        <p className="text-gray-600">Huy động vốn cho dự án xanh</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                                <Check className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    Đăng ký miễn phí
                                </button>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                            <div className="relative z-10 p-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
                                        <BarChart3 className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">Nhà đầu tư</h3>
                                        <p className="text-gray-600">Đầu tư thông minh, lợi nhuận bền vững</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    {benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                                <Check className="w-4 h-4 text-blue-600" />
                                            </div>
                                            <span className="text-gray-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                    Khám phá dự án
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20 px-4 sm:px-8 lg:px-16">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Dự án nổi bật</h2>
                        <p className="text-xl text-gray-600">Khám phá các dự án xanh đang thu hút đầu tư</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-green-600 to-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>
                </div>
                <div className="relative z-10 container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Sẵn sàng bắt đầu hành trình xanh?</h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Tham gia cùng hàng nghìn nhà đầu tư và chủ dự án đang xây dựng tương lai bền vững
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Bắt đầu ngay
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
                            Tìm hiểu thêm
                        </button>
                    </div>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes slide-up {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                    
                    .animate-slide-up {
                        animation: slide-up 0.8s ease-out forwards;
                    }
                `
            }} />
        </div>
    );
};

export default Homepage;