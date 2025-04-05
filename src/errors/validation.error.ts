import { ErrorBase } from "./base.erros";


export class ValidationError extends ErrorBase{

    constructor(message: string){
        super(400,message);
    }
}