
import express, { Request, Response } from 'express';
import cors from 'cors'
import router from './app/mainRoute/routes';
import globalErrorhandler from './app/middleware/globalErrorhandler';
import noRoutefound from './app/middleware/notfoundroute';

const app = express()

app.use(cors({origin:'https://camper-shop-frontend.vercel.app'}))
app.use(express.json())
app.use('/api', router)


app.get('/', (req: Request, res: Response) => {
  res.send('Camper shop running..!')
})

app.use(globalErrorhandler)

app.use(noRoutefound)


export default app;