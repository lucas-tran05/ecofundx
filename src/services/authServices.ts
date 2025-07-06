import type { UserType } from "../types/user";
import users from './mock/users.json';


export const login = async (email: string, password: string) => {
    // Fake data
    const user = users.find(user => user.email === email && user.password === password)
    return user
}


export const register = async (user: UserType) => {
    // Fake data
    return user
}