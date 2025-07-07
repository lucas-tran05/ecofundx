import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    ChevronDown, ChevronUp, User,
} from 'lucide-react';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from 'recharts';

import { Button } from '@/components/ui/button';

export default function ProjectView() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { id } = useParams();

    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
    const [project, setProject] = useState<any>(null); // dùng "any" cho lẹ nếu chưa define interface

    useEffect(() => {
        getProject(id);
    }, []);

    const getProject = async (id?: string) => {
        console.log(id);
        const data = {
            id: '1',
            title: 'Solar Water Purification System',
            description: 'An eco-friendly solution using solar energy to purify water.',
            image: 'https://placehold.co/800x400?text=Project+Image',
            creator: {
                name: 'Dr. Michael Chen',
                bio: 'Environmental Engineer & Sustainability Expert',
                details:
                    'With 15 years of experience in sustainable technology development, Dr. Chen has successfully implemented water purification systems across multiple regions.',
            },
            raised: 85000,
            target: 100000,
            backers: 245,
            daysLeft: 15,
            breakdown: {
                research: 40,
                manufacturing: 30,
                installation: 20,
                marketing: 10
            }
        };
        setProject(data);
    };

    const toggleFaq = (index: number) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the expected delivery timeline?",
            answer: "The project is expected to be completed within 6-8 months from the start of funding.",
        },
        {
            question: "How will the funds be managed?",
            answer: "Funds are managed via escrow with milestone-based releases.",
        },
        {
            question: "What happens if the project doesn't reach its goal?",
            answer: "All contributions will be refunded within 7-10 business days.",
        }
    ];
    const comments = [
        {
            name: "Sarah Johnson",
            time: "2 days ago",
            comment: "This is exactly the kind of sustainable solution we need. Looking forward to seeing this implemented!",
            avatar: "SJ"
        },
        {
            name: "David Williams",
            time: "3 days ago",
            comment: "Great job on detailed engineering docs! Is it possible to get the solar efficiency specs from these panels?",
            avatar: "DW"
        }
    ];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Loading project...
            </div>
        );
    }

    const fundingBreakdownData = [
        { name: t('fundingBreakdown.research'), value: project.breakdown.research, color: '#22c55e' }, // green-500
        { name: t('fundingBreakdown.manufacturing'), value: project.breakdown.manufacturing, color: '#3b82f6' }, // blue-500
        { name: t('fundingBreakdown.installation'), value: project.breakdown.installation, color: '#8b5cf6' }, // purple-500
        { name: t('fundingBreakdown.marketing'), value: project.breakdown.marketing, color: '#eab308' } // yellow-500
    ];



    return (
        <div className="min-h-screen bg-gray-50 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Project Header */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                                {project.title}
                            </h1>
                            <div className="relative mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 sm:h-80 object-cover rounded-lg bg-gray-200"
                                />
                            </div>
                            <p className="text-gray-700 leading-relaxed">{project.description}</p>
                        </div>

                        {/* Project Creator */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('projectCreator')}</h2>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-gray-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">{project.creator.name}</h3>
                                    <p className="text-sm text-gray-600">{project.creator.bio}</p>
                                    <p className="text-sm text-gray-500 mt-1">{project.creator.details}</p>
                                </div>
                            </div>
                        </div>
                        {/* Risks & Challenges
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('risksAndChallenges')}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <AlertTriangle className="w-4 h-4 text-yellow-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{t('supplyChainRisk')}</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Potential delays in component delivery due to global supply chain disruptions. We have multiple suppliers lined up to minimize risk.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Shield className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Strict quality protocols and testing will be implemented. We maintain ISO 9001 certification for quality management systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Funding Allocation */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                {t('fundingAllocation')}
                            </h2>

                            <div className="w-full h-72">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={fundingBreakdownData}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={50}
                                            outerRadius={90}
                                            paddingAngle={2}
                                        >
                                            {fundingBreakdownData.map((entry, index) => (
                                                <Cell className='gap-4' key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend layout="horizontal" verticalAlign="bottom" iconType="square" />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>


                        {/* FAQ */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('frequentlyAskedQuestions')}</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-200 pb-4">
                                        <button
                                            onClick={() => toggleFaq(index)}
                                            className="flex items-center justify-between w-full text-left"
                                        >
                                            <h3 className="font-medium text-gray-900">{faq.question}</h3>
                                            {expandedFaq === index ? (
                                                <ChevronUp className="w-5 h-5 text-gray-500" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-500" />
                                            )}
                                        </button>
                                        {expandedFaq === index && (
                                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Community Discussion */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('communityDiscussion')}</h2>

                            {/* Comment Form */}
                            <div className="mb-6">
                                <textarea
                                    placeholder={t('shareyourthoughts')}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    rows={3}
                                />
                                <div className="flex justify-end mt-2">
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                        {t('postComment')}
                                    </button>
                                </div>
                            </div>

                            {/* Comments */}
                            <div className="space-y-4">
                                {comments.map((comment, index) => (
                                    <div key={index} className="flex space-x-3">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
                                            {comment.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2">
                                                <span className="font-medium text-gray-900">{comment.name}</span>
                                                <span className="text-sm text-gray-500">{comment.time}</span>
                                            </div>
                                            <p className="text-gray-700 mt-1">{comment.comment}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Funding Info */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-gray-900">
                                    {project.raised.toLocaleString()}
                                </div>
                                <div className="text-sm text-gray-600">
                                    {t('projectDetails.progressText', {
                                        raised: `${project.raised.toLocaleString()}`,
                                        target: `${project.target.toLocaleString()}`
                                    })}
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                                <div
                                    className="bg-green-600 h-2 rounded-full"
                                    style={{ width: `${(project.raised / project.target) * 100}%` }}
                                ></div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">{project.backers}</div>
                                    <div className="text-sm text-gray-600">{t('projectDetails.backers')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">{project.daysLeft}</div>
                                    <div className="text-sm text-gray-600">{t('projectDetails.daysLeft')}</div>
                                </div>
                            </div>
                            <Button className="w-full bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors mb-4"
                                onClick={() => { navigate(`/project-contribute/${id}`) }}
                            >
                                {t('contributeNow')}
                            </Button>
                            <div className="space-y-3 text-sm text-gray-600">
                                <div className="flex items-center justify-between">
                                    <span>{t('projectDetails.projectType')}</span><span className="font-medium">Technology</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>{t('projectDetails.location')}</span><span className="font-medium">Global</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>{t('projectDetails.timeline')}</span><span className="font-medium">6-8 months</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>{t('projectDetails.riskLevel')}</span><span className="font-medium text-yellow-600">Medium</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 mt-4">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Rewards</h2>
                            <div>
                                {[
                                    { name: 'Early Bird', description: 'Early bird rewards' },
                                    { name: 'Tier 1', description: 'Tier 1 rewards' },
                                    { name: 'Tier 2', description: 'Tier 2 rewards' },
                                    { name: 'Tier 3', description: 'Tier 3 rewards' }
                                ].map((reward) => (
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="font-medium text-gray-900">{reward.name}</span>
                                        <span className="text-gray-600">{reward.description}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}