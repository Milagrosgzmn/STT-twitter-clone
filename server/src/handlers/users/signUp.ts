import { Response, Request } from "express";
import postUser from "../../controllers/users/postUser";
import { User } from "../../types/types";

export const signUp = async (req: Request, res: Response)=>{
    let {user} : {user: User | null} = req.body;
    if (!user) {
        return res.status(400).send('missing data');
    }
    try {
        const created : string = await postUser(user);

        if(created.includes('Duplicated key')){
            return res.status(400).send('user already exist');
        }
        if (created === 'success') {
            return res.status(200).send('success');
        }else{
            return res.status(400).send('couldnt create user');
        }
    } catch (error:any) {
        console.error(error);
        
        return res.status(500).send(error.message);
    }
    
};
