import express from "express"
import { initializeApp } from "firebase-admin/app";
import {initializeApp as initializeFireBaseApp} from "firebase/app"
import { routes } from "./routes/index";
import { errorHandler } from "./middlewares/error-handler.midleware"
import { pageNotFoundHandler } from "./middlewares/page-not-found.midllewares"
import { auth } from "./middlewares/auth.middleware";


initializeApp()
initializeFireBaseApp({
    apiKey: process.env.API_KEY
})

const app = express()
auth(app)
routes(app);
pageNotFoundHandler(app)
errorHandler(app)

app.listen(3000, () => {
    console.log("Servidor Ativo na porta 3000 ");
})