import express from 'express';
// import { request } from 'http';
import bodyParser from 'body-parser';
import router from './routes/index';

const PORT = process.env.PORT || 3000;

// Set up express app
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


// Set up server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}`);
});

export default app;
