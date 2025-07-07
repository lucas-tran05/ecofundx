import { Leaf, Target, Users, Award, Globe, Heart, ArrowRight } from 'lucide-react';

const AboutUsPage = () => {
    const stats = [
        { number: '10K+', label: 'Dự án được tài trợ', icon: Target },
        { number: '50M+', label: 'Đô la đã huy động', icon: Globe },
        { number: '500+', label: 'Đối tác tin cậy', icon: Users },
        { number: '25+', label: 'Quốc gia hoạt động', icon: Award }
    ];

    const team = [
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
            bio: 'Với 15 năm kinh nghiệm trong lĩnh vực đầu tư bền vững và công nghệ xanh.'
        },
        {
            name: 'Sarah Johnson',
            role: 'CEO & Founder',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
            bio: 'Với 15 năm kinh nghiệm trong lĩnh vực đầu tư bền vững và công nghệ xanh.'
        },
        {
            name: 'Michael Chen',
            role: 'CTO',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
            bio: 'Chuyên gia công nghệ blockchain và fintech với hơn 12 năm kinh nghiệm.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Head of Sustainability',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
            bio: 'Tiến sĩ Môi trường với chuyên môn về năng lượng tái tạo và bảo vệ khí hậu.'
        },
        {
            name: 'David Kim',
            role: 'Head of Operations',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
            bio: 'Chuyên gia quản lý dự án với kinh nghiệm triển khai các sáng kiến xanh toàn cầu.'
        }
    ];

    const values = [
        {
            icon: Leaf,
            title: 'Bền vững',
            description: 'Cam kết tạo ra tác động tích cực lâu dài cho môi trường và xã hội.'
        },
        {
            icon: Target,
            title: 'Minh bạch',
            description: 'Đảm bảo tính minh bạch trong mọi hoạt động tài chính và báo cáo tác động.'
        },
        {
            icon: Users,
            title: 'Cộng đồng',
            description: 'Xây dựng cộng đồng mạnh mẽ của các nhà đầu tư và doanh nghiệp có cùng tầm nhìn.'
        },
        {
            icon: Heart,
            title: 'Tác động',
            description: 'Tập trung vào các dự án có thể tạo ra thay đổi tích cực cho thế giới.'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-600 to-blue-600 text-white pb-24 pt-48">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">
                        Về EcoFundX
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                        Chúng tôi là nền tảng tài chính hàng đầu kết nối các nhà đầu tư với
                        những dự án bền vững, góp phần xây dựng một tương lai xanh cho thế giới.
                    </p>
                    <div className="flex justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <Leaf className="w-16 h-16" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Sứ mệnh của chúng tôi
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                EcoFundX được thành lập với sứ mệnh tạo ra một hệ sinh thái tài chính
                                bền vững, nơi mọi khoản đầu tư đều hướng tới mục tiêu bảo vệ môi trường
                                và phát triển xã hội.
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Chúng tôi tin rằng thông qua việc kết nối các nhà đầu tư có tầm nhìn
                                với những dự án xanh chất lượng cao, chúng ta có thể tạo ra những thay đổi
                                tích cực và bền vững cho thế giới.
                            </p>
                            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center space-x-2">
                                <span>Tìm hiểu thêm</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="relative">
                            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <Globe className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Tầm nhìn toàn cầu</h3>
                                            <p className="text-sm opacity-90">Mở rộng tác động trên toàn thế giới</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Mục tiêu rõ ràng</h3>
                                            <p className="text-sm opacity-90">Hướng tới tương lai carbon trung hòa</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-white/20 p-3 rounded-full">
                                            <Heart className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Tác động tích cực</h3>
                                            <p className="text-sm opacity-90">Mỗi dự án đều tạo ra giá trị bền vững</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Giá trị cốt lõi
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Những giá trị này định hướng mọi hoạt động của chúng tôi và
                            là nền tảng cho sự phát triển bền vững.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Đội ngũ phát triển của chúng tôi
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Được dẫn dắt bởi những chuyên gia hàng đầu trong lĩnh vực
                            tài chính bền vững và công nghệ xanh.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-green-600 font-medium mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Tham gia cùng chúng tôi
                    </h2>
                    <p className="text-xl mb-8 leading-relaxed">
                        Cùng nhau xây dựng một tương lai bền vững thông qua những khoản đầu tư có ý nghĩa.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Bắt đầu đầu tư
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                            Liên hệ với chúng tôi
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;