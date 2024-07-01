export interface User {
    id: number;
    username: string;
    fullName: string;
    active: boolean;
    token?: string;
}

export interface LoginState {
    user: User
    loggedIn: boolean
    loadingInit: boolean
}