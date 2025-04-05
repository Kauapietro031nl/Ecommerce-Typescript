import {  Request, Response } from "express"

import { Company } from "../models/company.models";
import { CompanyService } from "../services/company.service";


export class CompaniesController {

    static async getAll(req: Request, res: Response) {

        res.send(await new CompanyService().getAll());

    }

    static async getById(req: Request, res: Response) {
        let companyId = (req.params.id)
        res.send(await new CompanyService().getById(companyId))
    }

    static async save(req: Request, res: Response) {

        await new CompanyService().save(req.body)

        res.status(201).send({

            message: `Empresa Criada com sucesso`

        })

    }

    static async update(req: Request, res: Response) {

        let companyId = req.params.id;
        let company = req.body as Company;
        await new CompanyService().update(companyId, company);
        res.send({
            message: "Empresa alterada com sucesso"
        })

    }

}