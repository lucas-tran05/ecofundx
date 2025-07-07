import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';
import {
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    MoreHorizontal,
    ThumbsUp,
    Reply,
    Send,
    ArrowLeft,
    Calendar,
    Eye,
    User,
    Smile
} from 'lucide-react';

const PostDetailPage = () => {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [likeCount, setLikeCount] = useState(234);
    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Nguyễn Văn A",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
            content: "Bài viết rất hay và bổ ích! Cảm ơn tác giả đã chia sẻ kinh nghiệm quý báu này.",
            time: "2 giờ trước",
            likes: 12,
            liked: false,
            replies: [
                {
                    id: 101,
                    author: "Trần Thị B",
                    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5e5?w=50&h=50&fit=crop&crop=face",
                    content: "Mình cũng đồng ý với bạn. Những tips này rất thực tế!",
                    time: "1 giờ trước",
                    likes: 3,
                    liked: false
                }
            ]
        },
        {
            id: 2,
            author: "Lê Minh C",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
            content: "Tôi đã áp dụng những phương pháp này và thấy hiệu quả rất tốt. Đặc biệt là phần về quản lý thời gian.",
            time: "4 giờ trước",
            likes: 8,
            liked: true,
            replies: []
        },
        {
            id: 3,
            author: "Phạm Thị D",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
            content: "Có thể chia sẻ thêm về cách implement những ý tưởng này trong thực tế không ạ?",
            time: "6 giờ trước",
            likes: 15,
            liked: false,
            replies: []
        }
    ]);

    const [newComment, setNewComment] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyContent, setReplyContent] = useState('');
    const [showComments, setShowComments] = useState(true);

    const post = {
        id: 1,
        title: "10 Bí Quyết Tăng Năng Suất Làm Việc Hiệu Quả",
        author: "Hoàng Minh Tâm",
        authorAvatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=50&h=50&fit=crop&crop=face",
        publishDate: "15 tháng 12, 2024",
        readTime: "5 phút đọc",
        views: 1250,
        content: `
      <p className="mb-4">Trong thời đại công nghệ 4.0, việc tăng năng suất làm việc đã trở thành một yếu tố quyết định thành công của mỗi cá nhân và tổ chức. Sau đây là 10 bí quyết được chứng minh hiệu quả:</p>
      
      <h3 className="text-xl font-semibold mb-3 text-emerald-700">1. Quản lý thời gian hiệu quả</h3>
      <p className="mb-4">Sử dụng phương pháp Pomodoro để chia nhỏ công việc thành các khoảng thời gian 25 phút, giúp tập trung tốt hơn và giảm căng thẳng.</p>
      
      <h3 className="text-xl font-semibold mb-3 text-emerald-700">2. Thiết lập mục tiêu rõ ràng</h3>
      <p className="mb-4">Áp dụng nguyên tắc SMART (Specific, Measurable, Achievable, Relevant, Time-bound) để đặt ra những mục tiêu cụ thể và có thể đo lường được.</p>
      
      <h3 className="text-xl font-semibold mb-3 text-emerald-700">3. Tối ưu hóa không gian làm việc</h3>
      <p className="mb-4">Một môi trường làm việc gọn gàng, thoải mái sẽ giúp tinh thần thoải mái và tăng khả năng sáng tạo.</p>
      
      <h3 className="text-xl font-semibold mb-3 text-emerald-700">4. Sử dụng công nghệ hỗ trợ</h3>
      <p className="mb-4">Tận dụng các ứng dụng quản lý công việc như Trello, Asana, hoặc Notion để theo dõi tiến độ và tổ chức công việc một cách khoa học.</p>
      
      <p className="mb-4">Những phương pháp trên đã được nhiều chuyên gia và doanh nghiệp áp dụng thành công. Hãy thử nghiệm và tìm ra phương pháp phù hợp nhất với bản thân bạn!</p>
    `,
        tags: ["Năng suất", "Làm việc", "Quản lý thời gian", "Phát triển bản thân"],
        category: "Kinh nghiệm"
    };

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    const handleCommentLike = (commentId: number | string) => {
        setComments(comments.map(comment =>
            comment.id === commentId
                ? { ...comment, liked: !comment.liked, likes: comment.liked ? comment.likes - 1 : comment.likes + 1 }
                : comment
        ));
    };

    const handleReplyLike = (commentId: number | string, replyId: number | string) => {
        setComments(comments.map(comment =>
            comment.id === commentId
                ? {
                    ...comment,
                    replies: comment.replies.map(reply =>
                        reply.id === replyId
                            ? { ...reply, liked: !reply.liked, likes: reply.liked ? reply.likes - 1 : reply.likes + 1 }
                            : reply
                    )
                }
                : comment
        ));
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            const comment = {
                id: Date.now(),
                author: "Bạn",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
                content: newComment,
                time: "Vừa xong",
                likes: 0,
                liked: false,
                replies: []
            };
            setComments([comment, ...comments]);
            setNewComment('');
        }
    };

    const handleReply = (commentId: number | string) => {
        if (replyContent.trim()) {
            const reply = {
                id: Date.now(),
                author: "Bạn",
                avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face",
                content: replyContent,
                time: "Vừa xong",
                likes: 0,
                liked: false
            };

            setComments(comments.map(comment =>
                comment.id === commentId
                    ? { ...comment, replies: [...comment.replies, reply] }
                    : comment
            ));
            setReplyContent('');
            setReplyingTo(null);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Animated Background - Same as Login */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
                {/* Floating Circles */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
                <div className="absolute top-40 right-32 w-24 h-24 bg-emerald-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
                <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-teal-200 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
                <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>

                {/* Geometric Shapes */}
                <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-emerald-400 opacity-10 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-400 opacity-15 rotate-12 animate-pulse"></div>

                {/* Leaf-like Shapes */}
                <div className="absolute top-1/2 left-10 w-8 h-16 bg-green-500 opacity-20 rounded-full transform rotate-45 animate-pulse" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/3 right-10 w-6 h-12 bg-emerald-500 opacity-25 rounded-full transform -rotate-12 animate-pulse" style={{ animationDelay: '5s' }}></div>

                {/* Gradient Orbs */}
                <div className="absolute top-10 left-1/2 w-40 h-40 bg-gradient-to-r from-green-200 to-emerald-300 rounded-full opacity-20 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-r from-teal-200 to-green-300 rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-2/3 py-8">
                {/* Header Navigation */}
                <div className="flex items-center gap-4 mb-6">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-emerald-600"
                    onClick={() => navigate(-1)}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Quay lại
                    </Button>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Trang chủ</span>
                        <span>/</span>
                        <span>Forum</span>
                        <span>/</span>
                        <span className="text-emerald-600">Chi tiết bài viết</span>
                    </div>
                </div>

                {/* Post Content */}
                <Card className="mb-8 shadow-lg border-0">
                    <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                                {post.category}
                            </Badge>
                            <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                            </Button>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={post.authorAvatar} alt={post.author} />
                                    <AvatarFallback>
                                        <User className="w-6 h-6" />
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-gray-900">{post.author}</p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.publishDate}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Eye className="w-3 h-3" />
                                            {post.views.toLocaleString()} lượt xem
                                        </div>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleLike}
                                    className={`${liked ? 'text-red-500' : 'text-gray-500'} hover:text-red-500 transition-colors`}
                                >
                                    <Heart className={`w-4 h-4 mr-1 ${liked ? 'fill-current' : ''}`} />
                                    {likeCount}
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setBookmarked(!bookmarked)}
                                    className={`${bookmarked ? 'text-yellow-500' : 'text-gray-500'} hover:text-yellow-500 transition-colors`}
                                >
                                    <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-current' : ''}`} />
                                </Button>
                                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-emerald-600">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="prose max-w-none">
                            <p className="mb-4 text-gray-700 leading-relaxed">
                                Trong thời đại công nghệ 4.0, việc tăng năng suất làm việc đã trở thành một yếu tố quyết định thành công của mỗi cá nhân và tổ chức. Sau đây là 10 bí quyết được chứng minh hiệu quả:
                            </p>

                            <h3 className="text-xl font-semibold mb-3 text-emerald-700">1. Quản lý thời gian hiệu quả</h3>
                            <p className="mb-4 text-gray-700 leading-relaxed">
                                Sử dụng phương pháp Pomodoro để chia nhỏ công việc thành các khoảng thời gian 25 phút, giúp tập trung tốt hơn và giảm căng thẳng.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 text-emerald-700">2. Thiết lập mục tiêu rõ ràng</h3>
                            <p className="mb-4 text-gray-700 leading-relaxed">
                                Áp dụng nguyên tắc SMART (Specific, Measurable, Achievable, Relevant, Time-bound) để đặt ra những mục tiêu cụ thể và có thể đo lường được.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 text-emerald-700">3. Tối ưu hóa không gian làm việc</h3>
                            <p className="mb-4 text-gray-700 leading-relaxed">
                                Một môi trường làm việc gọn gàng, thoải mái sẽ giúp tinh thần thoải mái và tăng khả năng sáng tạo.
                            </p>

                            <h3 className="text-xl font-semibold mb-3 text-emerald-700">4. Sử dụng công nghệ hỗ trợ</h3>
                            <p className="mb-4 text-gray-700 leading-relaxed">
                                Tận dụng các ứng dụng quản lý công việc như Trello, Asana, hoặc Notion để theo dõi tiến độ và tổ chức công việc một cách khoa học.
                            </p>

                            <p className="mb-6 text-gray-700 leading-relaxed">
                                Những phương pháp trên đã được nhiều chuyên gia và doanh nghiệp áp dụng thành công. Hãy thử nghiệm và tìm ra phương pháp phù hợp nhất với bản thân bạn!
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-6 border-t">
                            {post.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-emerald-600 border-emerald-300 hover:bg-emerald-50">
                                    #{tag}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Comments Section */}
                <Card className="shadow-lg border-0">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <MessageCircle className="w-6 h-6 text-emerald-600" />
                                Bình luận ({comments.length})
                            </h3>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setShowComments(!showComments)}
                                className="text-emerald-600"
                            >
                                {showComments ? 'Ẩn' : 'Hiện'} bình luận
                            </Button>
                        </div>
                    </CardHeader>

                    {showComments && (
                        <CardContent>
                            {/* Add Comment */}
                            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                                <div className="flex gap-3">
                                    <Avatar className="w-10 h-10">
                                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face" alt="Bạn" />
                                        <AvatarFallback>B</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <Textarea
                                            placeholder="Chia sẻ suy nghĩ của bạn về bài viết này..."
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                            className="mb-3 border-gray-200 focus:border-emerald-500"
                                        />
                                        <div className="flex items-center justify-between">
                                            <Button variant="ghost" size="sm" className="text-gray-500">
                                                <Smile className="w-4 h-4 mr-1" />
                                                Emoji
                                            </Button>
                                            <Button
                                                onClick={handleAddComment}
                                                disabled={!newComment.trim()}
                                                className="bg-emerald-600 hover:bg-emerald-700"
                                            >
                                                <Send className="w-4 h-4 mr-2" />
                                                Đăng bình luận
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comments List */}
                            <div className="space-y-6">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                                        <div className="flex gap-3">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src={comment.avatar} alt={comment.author} />
                                                <AvatarFallback>
                                                    <User className="w-5 h-5" />
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="font-semibold text-gray-900">{comment.author}</span>
                                                        <span className="text-sm text-gray-500">{comment.time}</span>
                                                    </div>
                                                    <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                                                </div>

                                                <div className="flex items-center gap-4 mt-2">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleCommentLike(comment.id)}
                                                        className={`${comment.liked ? 'text-emerald-600' : 'text-gray-500'} hover:text-emerald-600`}
                                                    >
                                                        <ThumbsUp className={`w-4 h-4 mr-1 ${comment.liked ? 'fill-current' : ''}`} />
                                                        {comment.likes}
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        // onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                                        className="text-gray-500 hover:text-emerald-600"
                                                    >
                                                        <Reply className="w-4 h-4 mr-1" />
                                                        Trả lời
                                                    </Button>
                                                </div>

                                                {/* Reply Form */}
                                                {replyingTo === comment.id && (
                                                    <div className="mt-4 ml-8">
                                                        <div className="flex gap-3">
                                                            <Avatar className="w-8 h-8">
                                                                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop&crop=face" alt="Bạn" />
                                                                <AvatarFallback>B</AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <Input
                                                                    placeholder="Viết phản hồi..."
                                                                    value={replyContent}
                                                                    onChange={(e) => setReplyContent(e.target.value)}
                                                                    className="mb-2"
                                                                />
                                                                <div className="flex gap-2">
                                                                    <Button
                                                                        size="sm"
                                                                        onClick={() => handleReply(comment.id)}
                                                                        disabled={!replyContent.trim()}
                                                                        className="bg-emerald-600 hover:bg-emerald-700"
                                                                    >
                                                                        Gửi
                                                                    </Button>
                                                                    <Button
                                                                        size="sm"
                                                                        variant="ghost"
                                                                        onClick={() => setReplyingTo(null)}
                                                                    >
                                                                        Hủy
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Replies */}
                                                {comment.replies.length > 0 && (
                                                    <div className="mt-4 ml-8 space-y-4">
                                                        {comment.replies.map((reply) => (
                                                            <div key={reply.id} className="flex gap-3">
                                                                <Avatar className="w-8 h-8">
                                                                    <AvatarImage src={reply.avatar} alt={reply.author} />
                                                                    <AvatarFallback>
                                                                        <User className="w-4 h-4" />
                                                                    </AvatarFallback>
                                                                </Avatar>
                                                                <div className="flex-1">
                                                                    <div className="bg-gray-50 p-3 rounded-lg">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className="font-semibold text-gray-900 text-sm">{reply.author}</span>
                                                                            <span className="text-xs text-gray-500">{reply.time}</span>
                                                                        </div>
                                                                        <p className="text-gray-700 text-sm leading-relaxed">{reply.content}</p>
                                                                    </div>
                                                                    <Button
                                                                        variant="ghost"
                                                                        size="sm"
                                                                        onClick={() => handleReplyLike(comment.id, reply.id)}
                                                                        className={`mt-1 ${reply.liked ? 'text-emerald-600' : 'text-gray-500'} hover:text-emerald-600`}
                                                                    >
                                                                        <ThumbsUp className={`w-3 h-3 mr-1 ${reply.liked ? 'fill-current' : ''}`} />
                                                                        {reply.likes}
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default PostDetailPage;