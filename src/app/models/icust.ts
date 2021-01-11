import { Time } from "@angular/common";


export interface ICustomer{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phNo: string;
    password: string;
    authorized: boolean;
    walletAmount: number;
    dob: Date;
    address: string;
    gender: string;
}

export interface ICust {
    busNumber: number;
    agencyName: string;
    from: string;
    to: string;
    departureDate: Date;
    departureTime: Time;
    arrivalDate: Date;
    arrivalTime: Time;
}

export interface IpRegCust {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    contactNo: number;

}

export interface SendRegCust {
    FirstName: string,
    LastName: string,
    Email: string,
    PhNo: number,
    Password: string,
    Authorised: boolean,
    WalletAmount: number,
    Dob: Date,
    Address: string,
    Gender: string,
}

export interface LoggedInCust {
    Id: number,
    FirstName: string,
    LastName: string,
    Email: string,
    PhNo: number,
    Password: string,
    Authorised: boolean,
    WalletAmount: number,
    Dob: Date,
    Address: string,
    Gender: string,
}


export interface sendLoginCust {
    email: string,
    password: string;
}

export interface IEmailForForgetPassword{
    email:string;
}

export interface IGetOTP{
    otp:string;
}

export interface IChangePassword{
    password:string;
    confirmPassword: string;
}
