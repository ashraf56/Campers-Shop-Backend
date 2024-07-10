import { ProductInterface } from "./products.interface"
import Products from "./products.model"



const createProductDB = async(payload:ProductInterface)=>{

const res = await Products.create(payload)
return res


}

















export const ProductServices = {
    createProductDB
}