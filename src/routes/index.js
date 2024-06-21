import { addViewToArticleRoute } from "./addViewToArticle";
import { createNewArticleRoute } from "./createNewArticle";
import { deleteArticleRoute } from "./deleteArticle";
import { getAllArticlesRoute } from "./getAllArticles";
import { getArticleRoute } from "./getArticle";
import { getUserArticlesRoute } from "./getUserArticles";
import { updateArticleRoute } from "./updateArticle";

export default[
    getAllArticlesRoute,
    getArticleRoute,
    addViewToArticleRoute,
    getUserArticlesRoute,
    createNewArticleRoute,
    updateArticleRoute,
    deleteArticleRoute,
]