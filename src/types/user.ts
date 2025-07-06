export interface UserType {
    id: string;
    fullname: string;
    username: string;
    phone: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    status: boolean;
    role: number;
    avatar?: string;
    social?: [
        {
            facebook?: string;
            twitter?: string;
            linkedin?: string;
        }
    ];
    active: boolean;
    createdAt?: string;
    updatedAt?: string;
    type: string;
}