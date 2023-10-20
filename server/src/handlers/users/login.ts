const {Users} = require('../../DB_connection');
const bcrypt = require('bcrypt');
import { User } from '../../types/types';
import { Request, Response } from 'express';
import { mapUserToUserWithoutPassword } from '../../mappers/userMaper';

export const login = async (req:Request, res: Response)=>{
    const { email, password }: { email: string, password: string } = req.body;

try {

    if(!email || !password) return res.status(400).send('missing data');

    const user: User | null = await Users.findOne({
        where:{
            user_email:email,
        }});
    if(user){
        const match: boolean = await bcrypt.compare(password, user.user_password);
        return match ? res.status(200).json(mapUserToUserWithoutPassword(user)) : res.status(400).send('Invalid data');
    }
    return res.status(400).send('not user found') 
    
} catch (error:any) {
    return res.status(500).send(error.message);
}
}