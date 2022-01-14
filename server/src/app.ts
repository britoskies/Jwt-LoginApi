import express, { Application } from 'express';
import cors from 'cors';
import router from './routes/formRouter';
import { config as dotenv } from 'dotenv';
dotenv();

const app: Application = express();
const port = process.env.PORT || 3001;

app.set('port', port);
app.use(express.json());
app.use(cors());
app.use('/', router);

export default app;