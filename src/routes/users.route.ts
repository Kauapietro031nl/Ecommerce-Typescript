import { Router } from "express"

import { UserController } from "../controllers/user.controller";
import asyncHandler from
    "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { NewUserSchema, UpdateUserSchema } from "../models/user.model";



export const userRoutes = Router();

userRoutes.get("/users", asyncHandler(UserController.getAll));

userRoutes.get("/users/:id", asyncHandler(UserController.getById))

userRoutes.post("/users", celebrate({
    [Segments.BODY]: NewUserSchema
}),
    asyncHandler(UserController.save))

userRoutes.put("/users/:id", celebrate({ [Segments.BODY]: UpdateUserSchema })

    ,
    asyncHandler(UserController.update))

userRoutes.delete("/users/:id", asyncHandler(UserController.delete))
