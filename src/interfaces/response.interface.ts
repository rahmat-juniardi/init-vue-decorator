import { User } from "./user.interface";

export interface ResponseDatas<T> {
    data: T[]
    rows: number
    status: string;
}

export interface ResponseData<T> {
    data: T
    rows: number
    status: string;
}

export interface ResponseStatus {
    type?: string;
    status: string;
    description?: ErrorDescription;
}

export interface LoginResponse {
    status: string;
    data: User
}

export interface LogoutResponse {
    status: string;
    data: User
}

export interface ErrorDescription {
    message: string;
}