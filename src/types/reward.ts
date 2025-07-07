export interface Reward {
    id: string | number
    title: string
    description: string
    amount: number;
    minimum_amount?: number
    project_id?: number
}