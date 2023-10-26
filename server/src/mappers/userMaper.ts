import { User } from "../types/types";
import { UserWithoutPassword } from "../types/types";
export const  mapUserToUserWithoutPassword = (user: User): UserWithoutPassword =>{
    const userWithoutPassword: UserWithoutPassword = {
        user_id: user.user_id,
        user_username: user.user_username,
        user_firstName: user.user_firstName,
        user_lastName: user.user_lastName,
        user_email: user.user_email,
        user_country: user.user_country,
        user_profilePic: user.user_profilePic,
        user_phoneNumber: user.user_phoneNumber,
    };

    return userWithoutPassword;
};