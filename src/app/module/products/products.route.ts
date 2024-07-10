import { Router } from "express";
import validationRequest from "../../middleware/validationRequest";
import { ProductValidation } from "./products.validation";
import { ProductCOntroller } from "./products.controller";


const router = Router();


router.post('/create-product', validationRequest(ProductValidation.createProductValidation), ProductCOntroller.createProductController)

router.post('/',  ProductCOntroller.getAllProductController)




export const ProductRouter = router