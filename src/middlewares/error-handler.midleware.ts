import express, { NextFunction, Request, Response } from "express"
import { InternalServerError } from "../errors/internal-server.error"
import { errors } from "celebrate"
import { ErrorBase } from "../errors/base.erros"


export const errorHandler = (app: express.Express) => {

    app.use(errors());

    app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
        console.log(error)
        if (error instanceof ErrorBase) {
            error.send(res)
        }
        else {
            new InternalServerError().send(res)
        }

    })
}