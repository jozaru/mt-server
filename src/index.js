import express from 'express';
import cors from 'cors';
import Routes from './routes/index.js';

// Initialization
const app = express();
app.set('port', 8080);

// Midleware
app.use(express.json());
app.use(cors({
  "origin": "http://localhost:3000"
}));

// Routes
app.get('/', (req, resp) => {
  resp.json('Wellcome!');
});
app.use('/api', Routes);

// Runing
app.listen(app.get('port'), () => {
  console.log(`Server listenig on port ${app.get('port')}`);
});