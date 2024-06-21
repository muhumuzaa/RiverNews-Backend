
import { db } from "../../database";

export const getUserArticlesRoute ={
    method: 'GET',
    path: 'api/users/{userId}/articles',
    handler: async (req, h) =>{
        const userId = req.params.userId;

        const {results} = await db.query(
            'SELECT * FROM articles WHERE user_id=?', [userId],
        );
        return results;
    }
}