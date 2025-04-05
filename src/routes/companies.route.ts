import { Router } from "express"

import { CompaniesController } from "../controllers/companies.controller";
import asyncHandler from
    "express-async-handler";
import { celebrate, Segments } from "celebrate";

import { newCompanySchema, UpdatecompanySchema } from "../models/company.models";



export const companyRoutes = Router();
//obs /
companyRoutes.get("/companies", asyncHandler(CompaniesController.getAll));

companyRoutes.get("/companies/:id", asyncHandler(CompaniesController.getById))

companyRoutes.post("/companies", celebrate({
    [Segments.BODY]: newCompanySchema
}),
    asyncHandler(CompaniesController.save))

companyRoutes.put("/companies/:id", celebrate({ [Segments.BODY]: UpdatecompanySchema })

    ,
    asyncHandler(CompaniesController.update));

