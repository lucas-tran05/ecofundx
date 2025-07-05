export interface PostType {
    _id: string;
    author_id: string;
    title: string;
    content: string;
    timeAgo: string;
    replies: number;
    likes: number;
    isBookmarked?: boolean;
    tag?: string;
    image?: string;
}