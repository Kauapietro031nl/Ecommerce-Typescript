import { ErrorBase } from "./base.erros";

export class UnauthorizedError extends ErrorBase{
    constructor(message = "Não autorizado !"){
        super(401,message)
    }
}