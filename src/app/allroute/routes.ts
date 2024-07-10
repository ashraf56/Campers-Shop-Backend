import { Router } from "express";


const router = Router();

const allroute = [
    {
        path: '/products',
        route: 'Userroute'

    },
    {
        path: '/carts',
        route: 'CarRoute'

    },
    {
        path: '/orders',
        route: 'BookingRoute'

    }
]


allroute.forEach(r => router.use(r.path))

export default router;