import { articles } from "./fake_articles";
import { Boom, boomify } from "@hapi/boom";

export const getArticleRoute ={
    method: 'GET',
    path: '/api/article/{id}',
    handler: async (req, h) =>{
        const id = req.params.id;
        

        const { results } = await db.query(
            'SELECT * FROM articles WHERE id =?', [id],
        );
        const article = results[0];
        //if(!article) throw Boom.notFound(`Article with id does not exist.`);
        return article;
    }
}