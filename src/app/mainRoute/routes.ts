import { Router } from "express";
import { ProductRouter } from "../module/products/products.route";


const router = Router();

const allroute = [
    {
        path: '/products',
        route:  ProductRouter

    },
   
   
]


allroute.forEach(r => router.use(r.path,r.route))

export default router;