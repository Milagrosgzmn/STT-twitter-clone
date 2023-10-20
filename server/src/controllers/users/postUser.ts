import { User } from "../../types/types";
const bcrypt = require('bcrypt');
const {Users} = require('../../DB_connection');
const postUser = async(user: User)=>{
    try {
        const hashedPassword = await bcrypt.hash(user.user_password, 10);
        user.user_password = hashedPassword;
        const created = await Users.create(user);
        if (created) {
            return 'success'
        }
    } catch (error:any) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            console.error(error);
            return `Duplicated key ${error.message}`
            
          } else {
            console.error('Error while creating new User:', error);
            return error.message;
          }
    }
}

export default postUser;