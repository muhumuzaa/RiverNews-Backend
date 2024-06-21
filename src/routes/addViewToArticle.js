import { db } from "../../database";

export const addViewToArticleRoute ={
    method: 'POST',
    path: 'api/article/{id}/add-view',
    handler: async (req, h) =>{
        const id = req.params.id;
        await db.query(
            'UPDATE articles SET views = views+1 WHERE id =?', [id],
        );

        const { results} =await db.query(
            'SELECT * FROM articles WHERE id=?', [id],
        );

        const updatedArticle = results[0];
        return updatedArticle;
    }
}