export interface IEmailPasswordPair {
    email: string;
    password: string;
}

export interface IEmailIDPair {
    email: string;
    id: string;
}

export interface IRegisterUserRequest {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}