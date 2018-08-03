import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/user-routes';
import privateRouter from './routes/private-routes';
import mongoose from './db/mongoose';


const app = express();

app.use(bodyParser.json());
app.use('/user', router);
app.use('/auth', privateRouter);

app.get('/', (req, resp) => {
    resp.send('<h1>salam</h1>');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
