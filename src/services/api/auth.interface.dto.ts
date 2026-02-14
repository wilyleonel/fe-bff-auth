export interface ILoginRequest {
    email: string;
    password: string;
}

export interface IRegisterRequest {
    email: string;
    password: string;
    name: string;
}

export interface IUserProfile {
    id: string;
    email: string;
    name: string;
}