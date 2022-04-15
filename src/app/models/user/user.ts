import { UserDate } from "./user-date";
import { UserLocation } from "./user-location";
import { UserLogin } from "./user-login";
import { UserName } from "./user-name";
import { UserPicture } from "./user-picture";

export interface User {
    gender?: string;
    name: UserName;
    location?: UserLocation;
    email: string;
    login: UserLogin;
    dob?: UserDate;
    registered: UserDate;
    phone?: string;
    cell?: string;
    picture: UserPicture;
    nat?: string;
}
