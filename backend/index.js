import express from 'express';
const app = express();
const port = 3000;
import morgan from 'morgan'
import rootRouter from './routes/index.js';

app.use(express.json());
app.use(morgan('tiny')); // used for logging & monitoring
app.disable('x-powered-by')

app.use("/api", rootRouter)


app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
})