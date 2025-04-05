import { ErrorBase } from "./base.erros";



export class EmailAlreadyExistsError extends ErrorBase {
    constructor(message = "O E-mail informado ja está sendo utilizado por outra conta !") {
        super(409, message)
    }
}