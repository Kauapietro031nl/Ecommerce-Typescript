import { ErrorBase } from "./base.erros";



export class NotFoundError extends ErrorBase{
    constructor(message:string){
        super(404,message);
    }
}