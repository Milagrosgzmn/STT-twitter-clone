import { User } from "../../types/types";
const {Users} = require('../../DB_connection');
const postUser = async(user: User)=>{
    try {
        const created = await Users.create(user);

        return 'good';
    } catch (error) {
        return 'error';
    }
}

export default postUser;