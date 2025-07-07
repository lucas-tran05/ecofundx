export interface Post {
    _id: string;
    title: string;
    content: string;
    author: {
        name: string;
        avatar: string;
        reputation: number;
    };
    timeAgo: string;
    replies: number;
    likes: number;
    views: number;
    isBookmarked: boolean;
    isPinned: boolean;
    tags: string[];
    category: string;
}