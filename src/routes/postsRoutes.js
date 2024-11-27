import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

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
    app.use(cors(corsOptions));
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    app.put("/upload/:id", atualizarNovoPost);
};

export default routes;