import { getTodosPosts } from "../models/postsModels.js";

// Esta parte do código diz o que fazer quando alguém pede todos os posts.
export async function listarPosts (req, res)
{
    const posts =  await getTodosPosts();
    // Envia uma resposta com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}