
import { db } from "../../database";

export const getAllArticlesRoute ={
    method: 'GET',
    path: '/api/articles',
    handler: async (req, h)=>{
        const { results} = await db.query('SELECT * FROM articles');
        return results;
    }

    
}