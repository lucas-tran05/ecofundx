import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Search,
    Plus,
    MessageCircle,
    Heart,
    Bookmark,
    TrendingUp,
    Pin,
    Eye,
    Star,
    Clock,
    TreePine,
    Recycle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Post } from "@/types/post";

const CATEGORIES = [
    { id: "all", name: "Tất cả", count: 156 },
    { id: "environment", name: "Môi trường", count: 45 },
    { id: "renewable", name: "Năng lượng xanh", count: 38 },
    { id: "recycling", name: "Tái chế", count: 23 },
    { id: "climate", name: "Khí hậu", count: 32 },
    { id: "sustainability", name: "Bền vững", count: 18 },
];

const TRENDING_TAGS = [
    { name: "xanh", count: 234 },
    { name: "bảo-vệ-môi-trường", count: 189 },
    { name: "tái-chế", count: 156 },
    { name: "năng-lượng-sạch", count: 134 },
    { name: "khí-hậu", count: 98 },
];

const TOP_CONTRIBUTORS = [
    { name: "Nguyễn Eco", posts: 45, reputation: 1250 },
    { name: "Trần Green", posts: 38, reputation: 980 },
    { name: "Lê Sustainable", posts: 32, reputation: 756 },
];

const FAKE_POSTS: Post[] = [
    {
        _id: "post-1",
        title: "Hướng dẫn xây dựng nhà bền vững với vật liệu tái chế",
        content: "Chia sẻ kinh nghiệm xây dựng ngôi nhà eco-friendly sử dụng 80% vật liệu tái chế. Từ gạch từ rác thải nhựa đến panel năng lượng mặt trời...",
        author: {
            name: "Nguyễn Eco",
            avatar: "/api/placeholder/40/40",
            reputation: 1250
        },
        timeAgo: "2 giờ trước",
        replies: 15,
        likes: 48,
        views: 234,
        isBookmarked: false,
        isPinned: true,
        tags: ["xanh", "tái-chế", "xây-dựng"],
        category: "environment"
    },
    {
        _id: "post-2",
        title: "Thảo luận về xu hướng năng lượng sạch 2024",
        content: "Năng lượng gió biển và pin lưu trữ đang bùng nổ. Các bạn nghĩ gì về tiềm năng phát triển năng lượng sạch tại Việt Nam?",
        author: {
            name: "Trần Green",
            avatar: "/api/placeholder/40/40",
            reputation: 980
        },
        timeAgo: "4 giờ trước",
        replies: 28,
        likes: 72,
        views: 456,
        isBookmarked: true,
        isPinned: false,
        tags: ["năng-lượng-sạch", "gió", "mặt-trời"],
        category: "renewable"
    },
    {
        _id: "post-3",
        title: "Cần hỗ trợ: Khởi nghiệp dự án tái chế rác thải nhựa",
        content: "Mình đang lên kế hoạch khởi nghiệp về tái chế rác thải nhựa thành sản phẩm có giá trị. Cần tư vấn về quy trình và đầu tư...",
        author: {
            name: "Lê Sustainable",
            avatar: "/api/placeholder/40/40",
            reputation: 756
        },
        timeAgo: "6 giờ trước",
        replies: 12,
        likes: 25,
        views: 189,
        isBookmarked: false,
        isPinned: false,
        tags: ["tái-chế", "khởi-nghiệp", "nhựa"],
        category: "recycling"
    }
];

export default function EcoForumPage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Post[]>(FAKE_POSTS);
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("latest");

    const handleLoadMore = () => {
        const next = posts.length;
        const morePosts: Post[] = Array.from({ length: 3 }, (_, i) => ({
            _id: `post-${next + i}`,
            title: `Dự án xanh số ${next + i + 1}`,
            content: `Chia sẻ về dự án bảo vệ môi trường số ${next + i + 1}. Một sáng kiến tuyệt vời cho tương lai xanh...`,
            author: {
                name: `EcoUser ${next + i + 1}`,
                avatar: "/api/placeholder/40/40",
                reputation: Math.floor(Math.random() * 1000) + 100
            },
            timeAgo: `${next + i + 1} giờ trước`,
            replies: Math.floor(Math.random() * 20),
            likes: Math.floor(Math.random() * 100),
            views: Math.floor(Math.random() * 500) + 100,
            isBookmarked: false,
            isPinned: false,
            tags: ["xanh", "môi-trường"],
            category: "environment"
        }));
        setPosts((prev) => [...prev, ...morePosts]);
    };

    const toggleBookmark = (postId: string) => {
        setPosts(prev => prev.map(post =>
            post._id === postId ? { ...post, isBookmarked: !post.isBookmarked } : post
        ));
    };

    return (
        <>
            <div className="flex items-center gap-3 p-6">
                <div className="relative flex-1 sm:flex-initial">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
                    <Input
                        placeholder="Tìm kiếm dự án xanh..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-full sm:w-80 bg-white/70 backdrop-blur-sm border-green-200 focus:border-green-400 focus:ring-green-400"
                    />
                </div>
                <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200">
                    <Plus className="w-4 h-4 mr-2" />
                    Chia sẻ dự án
                </Button>
            </div>
            <div className="relative z-10 container mx-auto px-4 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Left Sidebar */}
                    <aside className="lg:col-span-3">
                        <div className="space-y-6">
                            {/* Categories */}
                            <Card className="bg-white/80 backdrop-blur-lg border-green-200/50 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-green-800">
                                        <TreePine className="w-4 h-4" />
                                        Danh mục xanh
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    {CATEGORIES.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setActiveCategory(category.id)}
                                            className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-all duration-200 transform hover:scale-[1.02] ${activeCategory === category.id
                                                ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-300 shadow-md"
                                                : "hover:bg-green-50 hover:shadow-sm"
                                                }`}
                                        >
                                            <div className="flex items-center gap-2">
                                                <span className="font-medium">{category.name}</span>
                                            </div>
                                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                                {category.count}
                                            </Badge>
                                        </button>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Trending Tags */}
                            <Card className="bg-white/80 backdrop-blur-lg border-green-200/50 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-green-800">
                                        <TrendingUp className="w-4 h-4" />
                                        Xu hướng xanh
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {TRENDING_TAGS.map((tag) => (
                                            <Badge
                                                key={tag.name}
                                                variant="outline"
                                                className="cursor-pointer hover:bg-green-50 border-green-200 text-green-700 hover:border-green-400 transition-all duration-200 transform hover:scale-[1.05]"
                                            >
                                                #{tag.name}
                                                <span className="ml-1 text-xs text-[var(--text-primary)]">
                                                    {tag.count}
                                                </span>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="lg:col-span-6">
                        {/* Sort Options */}
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                                Dự án xanh gần đây
                            </h2>
                            <div className="flex gap-2">
                                <Button
                                    variant={sortBy === "latest" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSortBy("latest")}
                                    className={sortBy === "latest" ? "bg-green-600 hover:bg-green-700" : "border-green-200 hover:bg-green-50"}
                                >
                                    <Clock className="w-4 h-4 mr-1" />
                                    Mới nhất
                                </Button>
                                <Button
                                    variant={sortBy === "popular" ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setSortBy("popular")}
                                    className={sortBy === "popular" ? "bg-green-600 hover:bg-green-700" : "border-green-200 hover:bg-green-50"}
                                >
                                    <Star className="w-4 h-4 mr-1" />
                                    Phổ biến
                                </Button>
                            </div>
                        </div>

                        {/* Posts */}
                        <div className="space-y-4">
                            {posts.map((post) => (
                                <Card key={post._id} className="bg-white/80 backdrop-blur-lg border-green-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Avatar className="w-12 h-12 flex-shrink-0 border-2">
                                                <AvatarImage src={post.author.avatar} />
                                                <AvatarFallback>
                                                    {post.author.name.split(" ").map(n => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                    {post.isPinned && (
                                                        <Pin className="w-4 h-4 text-green-600" />
                                                    )}
                                                    <h3 className="font-semibold text-[var(--text-primary)] hover:text-green-600 cursor-pointer transition-colors" 
                                                        onClick={() => {navigate(`/post?id=${post._id}`)}}
                                                    >
                                                        {post.title}
                                                    </h3>
                                                </div>

                                                <p className="text-[var(--text-primary)] mb-3 line-clamp-2">
                                                    {post.content}
                                                </p>

                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    {post.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary" className="text-xs bg-green-100 text-green-700">
                                                            #{tag}
                                                        </Badge>
                                                    ))}
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-4 text-sm text-[var(--text-primary)]">
                                                    {/* Left: Author + Time */}
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1">
                                                            <span className="font-medium text-green-800">
                                                                {post.author.name}
                                                            </span>
                                                        </div>
                                                        <span>•</span>
                                                        <span>{post.timeAgo}</span>
                                                    </div>

                                                    {/* Right: Stats + Bookmark */}
                                                    <div className="flex items-center justify-end gap-4 flex-wrap">
                                                        <div className="flex items-center gap-4">
                                                            <span className="flex items-center gap-1">
                                                                <Eye className="w-4 h-4" />
                                                                {post.views}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <MessageCircle className="w-4 h-4" />
                                                                {post.replies}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Heart className="w-4 h-4" />
                                                                {post.likes}
                                                            </span>
                                                        </div>

                                                        <div className="flex items-center gap-1">
                                                            <Button
                                                                variant="ghost"
                                                                size="sm"
                                                                onClick={() => toggleBookmark(post._id)}
                                                                className={`transition-all duration-200 ${post.isBookmarked ? "text-green-600 bg-green-50" : "text-green-500 hover:bg-green-50"}`}
                                                            >
                                                                <Bookmark className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="flex justify-center mt-8">
                            <Button
                                variant="outline"
                                onClick={handleLoadMore}
                                className="px-8 border-green-200 text-green-700 hover:bg-green-50 hover:border-green-400 transition-all duration-200 transform hover:scale-[1.05]"
                            >
                                Tải thêm
                            </Button>
                        </div>
                    </main>

                    {/* Right Sidebar */}
                    <aside className="lg:col-span-3">
                        <div className="space-y-6">
                            {/* Top Contributors */}
                            <Card className="bg-white/80 backdrop-blur-lg border-green-200/50 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-green-800">
                                        <Star className="w-4 h-4" />
                                        Eco Warriors
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {TOP_CONTRIBUTORS.map((contributor, index) => (
                                        <div key={contributor.name} className="flex items-center gap-3">
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${index === 0 ? "bg-yellow-100 text-yellow-800" :
                                                index === 1 ? "bg-gray-100 text-gray-700" :
                                                    "bg-orange-100 text-orange-800"
                                                }`}>
                                                {index + 1}
                                            </div>
                                            <Avatar className="w-8 h-8 border-2">
                                                <AvatarImage src="/api/placeholder/32/32" />
                                                <AvatarFallback className="text-xs text-[var(--text-primary)]">
                                                    {contributor.name.split(" ").map(n => n[0]).join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-sm truncate text-green-800">
                                                    {contributor.name}
                                                </p>
                                                <p className="text-xs text-[var(--text-primary)]">
                                                    {contributor.posts} dự án
                                                </p>
                                            </div>
                                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-700">
                                                {contributor.reputation}
                                            </Badge>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            {/* Recent Activity */}
                            <Card className="bg-white/80 backdrop-blur-lg border-green-200/50 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-green-800">
                                        <Recycle className="w-4 h-4" />
                                        Hoạt động xanh
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm">
                                        <p className="font-medium text-green-800">Nguyễn Eco</p>
                                        <p className="text-[var(--text-primary)]">chia sẻ dự án "Vườn rau sạch"</p>
                                        <p className="text-xs text-gray-400">5 phút trước</p>
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-medium text-green-800">Trần Green</p>
                                        <p className="text-[var(--text-primary)]">tham gia thảo luận năng lượng</p>
                                        <p className="text-xs text-gray-400">15 phút trước</p>
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-medium text-green-800">Lê Sustainable</p>
                                        <p className="text-[var(--text-primary)]">yêu thích dự án tái chế</p>
                                        <p className="text-xs text-gray-400">30 phút trước</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Bottom Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-100/50 to-transparent pointer-events-none"></div>
        </>
    );
}