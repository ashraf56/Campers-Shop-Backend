
import express, { Request, Response } from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import router from './app/allroute/routes';
import noRoutefound from './app/middleware/notfound';
import globalErrorhandler from './app/middleware/globalErrorhandler';

const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)


app.get('/', (req: Request, res: Response) => {
  res.send('Camper shop running..!')
})

app.use(globalErrorhandler)

app.use(noRoutefound)


export default app;