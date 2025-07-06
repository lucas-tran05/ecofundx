export interface Project {
    id: string | number;
    title: string;
    description: string;
    category: string;
    raised: number;
    target: number;
    progress: number;
    color: string;
}