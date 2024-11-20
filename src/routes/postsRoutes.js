import express from "express";
import { listarPosts } from "../controllers/postsController.js";

// Permite que o aplicativo entenda dados enviados no formato JSON
const routes = (app) => {
    app.use(express.json());
    app.get("/posts", listarPosts);
}

export default routes;