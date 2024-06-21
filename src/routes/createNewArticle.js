import { v4 as uuid } from "uuid";
import { db } from "../../database";

export const createNewArticleRoute ={
    method: 'POST',
    path: 'api/articles',
    handler: async (req, h) =>{
        const id = uuid;
        
        const { 
           
            author='',
            title ='',
            description='',
            urlToImage='',
            publishedAt ='',
          
        } = req.payload;

        const userId = '12345';
        const views= 0;

        await db.query(`INSERT INTO 
            articles(id, user_id, author,title,description,urlToImage, publishedAt, views) 
            VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, user_id, author,title,description,urlToImage, publishedAt, views]
         );
         return {id, user_id:userId, author,title,description,urlToImage, publishedAt, views};
        }

        //
    }
