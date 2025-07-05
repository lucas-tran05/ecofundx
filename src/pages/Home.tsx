import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Users, TrendingUp, Shield, Rocket, ChartNoAxesCombined, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Homepage = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: <Users className="h-6 w-6 text-blue-600" />,
            title: t('features.community'),
            description: t('features.community_desc')
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-green-600" />,
            title: t('features.profit'),
            description: t('features.profit_desc')
        },
        {
            icon: <Shield className="h-6 w-6 text-purple-600" />,
            title: t('features.risk'),
            description: t('features.risk_desc')
        }
    ];

    const projects = [
        {
            id: 1,
            title: 'Nông trường năng lượng mặt trời',
            description: 'Dự án điện mặt trời quy mô lớn với công suất 50MW',
            image: '/api/placeholder/300/200',
            category: 'Năng lượng',
            progress: 75,
            raised: '2.5 tỷ',
            target: '3.2 tỷ',
            color: 'bg-green-500'
        },
        {
            id: 2,
            title: 'Nhà máy tái chế thông minh',
            description: 'Công nghệ tái chế tiên tiến cho rác thải nhựa',
            image: '/api/placeholder/300/200',
            category: 'Tái chế',
            progress: 60,
            raised: '1.8 tỷ',
            target: '3.0 tỷ',
            color: 'bg-blue-500'
        },
        {
            id: 3,
            title: 'Nông nghiệp hữu cơ thông minh',
            description: 'Hệ thống nông nghiệp sạch với công nghệ IoT',
            image: '/api/placeholder/300/200',
            category: 'Nông nghiệp',
            progress: 45,
            raised: '900 tr',
            target: '2.0 tỷ',
            color: 'bg-green-500'
        }
    ];

    const benefits = [
        t('form.easy_register'),
        t('form.market_access'),
        t('form.support_dev')
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex items-center p-8 sm:px-10 lg:px-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight whitespace-pre-line">
                                {t('hero.title')}
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                                {t('hero.description')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                                    {t('common.join_now')}
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto"
                                >
                                    {t('common.learn_more')}
                                </Button>
                            </div>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <img
                                src="/assets/images/home.svg"
                                alt="EcoFinix"
                                className="w-full max-w-md md:max-w-lg object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-10 lg:px-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('features.title')}</h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">{t('features.description')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6"
                            >
                                <CardHeader className="text-center">
                                    <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                                        {feature.icon}
                                    </div>
                                    <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-center text-gray-600">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-10 lg:px-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                            <CardHeader>
                                <Rocket className="font-bold" />
                                <CardTitle className="text-lg font-bold text-gray-900">
                                    {t('roles.project_owner')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {benefits.map((text, index) => (
                                    <p key={index} className="text-gray-600 flex items-center gap-2">
                                        <Check className="w-4 h-4 text-primary" /> {text}
                                    </p>
                                ))}
                            </CardContent>
                            <CardFooter>
                                <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 w-full sm:w-auto">
                                    {t('common.register_free')}
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                            <CardHeader>
                                <ChartNoAxesCombined className="font-bold" />
                                <CardTitle className="text-lg font-bold text-gray-900">
                                    {t('roles.investor')}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {benefits.map((text, index) => (
                                    <p key={index} className="text-gray-600 flex items-center gap-2">
                                        <Check className="w-4 h-4 text-primary" /> {text}
                                    </p>
                                ))}
                            </CardContent>
                            <CardFooter>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto"
                                >
                                    {t('common.learn_more')}
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-10 lg:px-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('h-projects.title')}</h2>
                        <p className="text-base sm:text-lg text-gray-600">{t('h-projects.desc')}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Card
                                key={project.id}
                                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="h-48 sm:h-52 md:h-56 bg-gradient-to-br from-green-400 to-blue-500 relative">
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white text-gray-800">{project.category}</Badge>
                                    </div>
                                    <div className="absolute bottom-4 right-4">
                                        <div className="bg-white rounded-full p-2">
                                            <Leaf className="h-6 w-6 text-green-600" />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-lg">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">
                                                {t('h-projects.raised', { amount: project.raised })}
                                            </span>
                                            <span className="text-gray-600">
                                                {t('h-projects.target', { amount: project.target })}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`${project.color} h-2 rounded-full transition-all duration-300`}
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm font-medium text-gray-700">
                                                {t('h-projects.progress', { progress: project.progress })}
                                            </span>
                                            <Button
                                                size="sm"
                                                className="bg-green-600 hover:bg-green-700 text-white"
                                            >
                                                {t('common.invest_now')}
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-green-600 px-4 sm:px-10 lg:px-20">
                <div className="container mx-auto text-center flex flex-col items-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t('cta.ready')}</h2>
                    <p className="text-base sm:text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                        {t('cta.support')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 flex-wrap justify-center">
                        <Button size="lg" className="w-full sm:w-auto">
                            {t('common.join_now')}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white  hover:bg-green-700 w-full sm:w-auto"
                        >
                            {t('common.learn_more')}
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
