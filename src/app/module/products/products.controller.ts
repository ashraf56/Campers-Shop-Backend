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
const getAllProductController = CatchWrapper(
    async (req, res) => {

        const result = await ProductServices.getAllProductfromDB()

        res.status(httpStatus.OK).json({
            success: true,
            message: "Products retrieve successfully",
            data:result
        })
    }
)
const DeleteSingleProductController = CatchWrapper(
    async (req, res) => {
    const {id} = req.params 
        const result = await ProductServices.DeleteProductfromDB(id)

        res.status(httpStatus.OK).json({
            success: true,
            message: "Product deleted successfully",
            data:result
        })
    }
)
const getSingleProductController = CatchWrapper(
    async (req, res) => {
    const {id} = req.params 
        const result = await ProductServices.getSIngleProductfromDB(id)

        res.status(httpStatus.OK).json({
            success: true,
            message: "Product deleted successfully",
            data:result
        })
    }
)





export const ProductCOntroller = {
    createProductController, getAllProductController, DeleteSingleProductController,getSingleProductController
}