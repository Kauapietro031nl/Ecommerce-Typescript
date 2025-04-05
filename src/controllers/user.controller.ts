import { Request, Response } from "express"
import { User } from "../models/user.model";
import { UserService } from "../services/user.service";


export class UserController {

    static async getAll(req: Request, res: Response) {

        res.send(await new UserService().getAll());

    }

    static async getById(req: Request, res: Response) {
        let userId = (req.params.id)
        res.send(await new UserService().getById(userId))
    }

    static async save(req: Request, res: Response) {

        await new UserService().save(req.body)

        res.status(201).send({

            message: `usuario Criado com sucesso`

        })

    }

    static async update(req: Request, res: Response) {

        let userId = (req.params.id);
        let user = req.body as User;

      await  new UserService().update(userId,user)
        res.send({
            message: "Usuário alterado com sucesso"
        })

    }
    static async delete(req: Request, res: Response) {

        let userId = (req.params.id)

    await new UserService().delete(userId)

        res.status(204).end()


    }
}