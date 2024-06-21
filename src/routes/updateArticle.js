import { db } from "../../database";

export const updateArticleRoute = {
    method: 'POST',
    path: 'api/articles/{id}',
    handler: async (req, h) =>{
        const {id} = req.params;
        const {author,title,description,urlToImage, publishedAt} = req.payload;
        const userId = '12345';

        await db.query(
            `UPDATE articles SET author =? ,title =? ,description =? ,urlToImage =?, publishedAt =?
            WHERE id=? AND user_id =?
            `, [author,title,description,urlToImage, publishedAt]);

        const { results} =await db.query(
            'SELECT * FROM articles WHERE id=? AND user_id =?', [id, userId],
        );

        return results[0];
        
    }
}