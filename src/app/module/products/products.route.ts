import { Router } from "express";
import validationRequest from "../../middleware/validationRequest";
import { ProductValidation } from "./products.validation";
import { ProductCOntroller } from "./products.controller";


const router = Router();


router.post('/create-product', validationRequest(ProductValidation.createProductValidation), ProductCOntroller.createProductController)

router.get('/',  ProductCOntroller.getAllProductController)




export const ProductRouter = router