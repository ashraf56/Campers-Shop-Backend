import throwErrorHandller from "../../utills/throwErrorHandller"
import { ProductInterface } from "./products.interface"
import Products from "./products.model"



const createProductDB = async (payload: ProductInterface) => {
    const existingProduct = await Products.findOne({ name: payload.name })
    if (existingProduct) {
        throwErrorHandller('Product already created')
    }
    const res = await Products.create(payload)
    return res


}
const getAllProductfromDB = async () => {

    const res = await Products.find()
    return res


}




export const ProductServices = {
    createProductDB, getAllProductfromDB
}