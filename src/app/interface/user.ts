export interface User {
    displayName: string;
    email:       string;
    phoneNumber: number;
    password:    string;
    age:         number;
    carNumber:   string;
}
export interface LoginData {
    email:    string;
    password: string;
}