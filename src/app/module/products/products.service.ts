import Products from "./products.model"



const createProductDB = async()=>{

const res = await Products.create()
return res


}

















export const ProductServices = {
    createProductDB
}