import type { Reward } from "./reward.ts";

interface BreakDown{
    [key: string]: number
}

export interface Project {
    id: string | number;
    title: string;
    description: string;
    category: string;
    raised: number;
    target: number;
    progress: number;
    rewards?: Reward[];
    breakdown?: BreakDown;
}