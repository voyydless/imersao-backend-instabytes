import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

// Configura o armazenamento Multer para o upload de imagens
const storage = multer.diskStorage({
    // Define o diretório de destino para os arquivos
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    // Define o nome do arquivo
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

// Define as rotas usando o objeto Express app
const routes = (app) => {
    // Permite que o aplicativo entenda dados enviados no formato JSON
    app.use(express.json());
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost)
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;