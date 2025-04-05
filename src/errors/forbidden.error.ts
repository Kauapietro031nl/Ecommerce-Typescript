import { ErrorBase } from "./base.erros";


export class ForBiddenError extends ErrorBase{
    constructor(message = "Não autorizado"){
        super(403,message)
    }
}