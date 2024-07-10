import httpStatus from "http-status";
import { CatchWrapper } from "../../utills/CatchWrapper";
import { ProductServices } from "./products.service";


const createProductController = CatchWrapper(
    async (req, res) => {
        const payload = req.body

        const result = await ProductServices.createProductDB(payload)

        res.status(httpStatus.OK).json({
            success: true,
            message: "Product created successfully",
            data:result
        })
    }
)





export const ProductCOntroller = {
    createProductController
}