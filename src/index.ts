import express from 'express';
import logger from './utils/logger';
import apiRouter from './routes';
import errorHandler from './errorHandler';
import appResponseTime from './utils/scrapeResponse';
import { metricsServer } from "./utils/metrics";

const app = express();
const port = process.env.PORT || 3000;

app.use(appResponseTime);
app.use('/api/v1', apiRouter);
app.use('/api/v1', errorHandler);

app.listen(port, () => {
  logger(`Timezones by location application is running on port ${port}.`);
  metricsServer();
});

export default app;