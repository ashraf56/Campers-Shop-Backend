import { model, Schema } from "mongoose";
import { ProductInterface } from "./products.interface";


const ProductSchema = new Schema<ProductInterface>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: String, required: true },
    stockQuantity: { type: Number, required: true, default: 0 },
    image: { type: String },
    category:{type:String}
})



const Products = model<ProductInterface>('Products', ProductSchema)

export default Products