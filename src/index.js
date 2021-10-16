import express from 'express';

// middlewares
import cors from 'cors';
import dotenv from 'dotenv';
import validateAtuthentication from './middlewares/authentication.middleware.js';
import validateAccess from './middlewares/access.middleware.js';

// utilities
import connect from './database.js';

// routes
import Routes from './routes/index.js';

// Initialization
dotenv.config();
const app = express();
app.set('port', process.env.PORT);
connect();

// Middlewares
app.use(express.json());
app.use(cors({
  "origin": [process.env.ORIGIN_LOCAL_DOMAIN]
}));
app.use(validateAtuthentication);
app.use(validateAccess);

// Routes
app.get('/', (req, resp) => {
  resp.json('Wellcome!');
});
app.use('/api', Routes);

// Runing
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});
