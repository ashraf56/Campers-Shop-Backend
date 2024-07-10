import { AnyZodObject } from "zod";
import { CatchWrapper } from "../utills/CatchWrapper";
import { NextFunction, Request, Response } from "express";


const validationRequest = (schema: AnyZodObject) => {
    return CatchWrapper(
        async (req: Request, res: Response, next: NextFunction) => {
            await schema.parseAsync({
                body: req.body
            })

            next()
        }
    )
}

export default validationRequest