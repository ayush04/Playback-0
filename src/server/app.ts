import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import { connect } from 'mongoose';
import searchRoutes from './routes/search';
import secretRoutes from './routes/secret';
    
const app = express();

app.use(cors());
app.use(json());

app.use('/', searchRoutes);
app.use('/secret', secretRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        message: err.message
    });
});

/*connect('mongodb+srv://ayush:09WKUkeskOYXv8a3@pbcl0-mekwn.mongodb.net/playback?retryWrites=true&w=majority')
    .then(() => {
        app.listen(3000); 
    })
    .catch(err => console.log('Cannot connect to DB', err));*/

app.listen(3000);