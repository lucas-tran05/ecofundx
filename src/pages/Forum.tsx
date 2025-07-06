import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Post {
    _id: string;
    title: string;
    content: string;
    timeAgo: string;
    replies: number;
    likes: number;
    isBookmarked: boolean;
}

const FAKE_POSTS: Post[] = Array.from({ length: 3 }, (_, i) => ({
    _id: `post-${i}`,
    title: `Bài viết giả số ${i + 1}`,
    content: `Đây là nội dung bài viết giả số ${i + 1}.`,
    timeAgo: `${i + 1} giờ trước`,
    replies: Math.floor(Math.random() * 10),
    likes: Math.floor(Math.random() * 100),
    isBookmarked: false,
}));

export default function ForumPage() {
    const [posts, setPosts] = useState<Post[]>(FAKE_POSTS);

    const handleLoadMore = () => {
        const next = posts.length;
        const morePosts: Post[] = Array.from({ length: 3 }, (_, i) => ({
            _id: `post-${next + i}`,
            title: `Bài viết giả số ${next + i + 1}`,
            content: `Nội dung thêm cho bài viết giả số ${next + i + 1}.`,
            timeAgo: `${next + i + 1} giờ trước`,
            replies: Math.floor(Math.random() * 10),
            likes: Math.floor(Math.random() * 100),
            isBookmarked: false,
        }));
        setPosts((prev) => [...prev, ...morePosts]);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6 sm:px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-24">
                {/* Left Sidebar */}
                <aside className="hidden lg:block lg:col-span-2">
                    <div className="sticky top-6 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-700">Sidebar Trái</h2>
                        <div className="bg-white p-4 rounded-xl shadow">Nội dung sidebar</div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="col-span-1 lg:col-span-8 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <h1 className="text-2xl font-bold text-gray-800">Thảo luận gần đây</h1>
                        <Button className="bg-primary text-white w-full sm:w-auto">Đăng bài</Button>
                    </div>

                    <div className="space-y-6">
                        {posts.map((post) => (
                            <div
                                key={post._id}
                                className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">{post.title}</h3>
                                <p className="text-sm text-gray-700 mb-3">{post.content}</p>
                                <div className="flex justify-between text-xs text-gray-500">
                                    <span>{post.timeAgo}</span>
                                    <span>{post.replies} phản hồi · {post.likes} lượt thích</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-10">
                        <Button variant="outline" onClick={handleLoadMore}>
                            Tải thêm
                        </Button>
                    </div>
                </main>

                {/* Right Sidebar */}
                <aside className="hidden lg:block lg:col-span-2">
                    <div className="sticky top-6 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-700">Sidebar Phải</h2>
                        <div className="bg-white p-4 rounded-xl shadow">Gợi ý, Top post, v.v...</div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
