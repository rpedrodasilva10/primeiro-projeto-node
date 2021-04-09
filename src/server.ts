import express from 'express';
import routes from './routes/routes.main';
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server is listening ❤');
});
