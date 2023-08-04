export interface UserCredential {
    username: string,
    password: string | number,
}

export interface Users {
    username: string,
    password: string | number,
    firstname: string,
    lastname: string,
}

export interface Token {
    token: string | number,
}