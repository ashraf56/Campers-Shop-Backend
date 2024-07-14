import { z } from "zod";




const createProductValidation = z.object({
    body:z.object({
        name:z.string(),
        description:z.string(),
        price:z.number(),
        rating:z.string(),
        stockQuantity: z.number().default(0),
        image: z.string().optional(),
        category:z.string()
    })
})
const updateProductValidation = z.object({
    body:z.object({
        name:z.string().optional(),
        description:z.string().optional(),
        price:z.number().optional(),
        rating:z.string().optional(),
        stockQuantity: z.number().default(0).optional(),
        image: z.string().optional(),
        category:z.string().optional()
    })
})



export const ProductValidation = {
    createProductValidation,
    updateProductValidation
}