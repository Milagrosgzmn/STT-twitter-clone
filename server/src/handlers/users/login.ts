import {Users} from '../../DB_connection';
const bcrypt = require('bcrypt');

const login = async (req:Request, res: Response)=>{
    const {email, password} = req.body;

    const user = Users.findOne({where:{
        email:email,
    }})

    const match = await bcrypt.compare(password, user.password);

}

module.exports = login;