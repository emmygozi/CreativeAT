import express from 'express';
import { collectDefaultMetrics, Histogram, register } from 'prom-client';
import logger from './logger';

const app = express();

export const responseTimeAPI = new Histogram({
  name: 'response_time_in_seconds',
  help: 'REST API response time in seconds',
  labelNames: ['method', 'route', 'status_code'],
});


export function metricsServer() {
  const collectMetrics = collectDefaultMetrics;

  collectMetrics();

  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);

    return res.send(await register.metrics());
  });

  app.listen(9100, () => {
    logger(`Metrics server started at http://localhost:9100`);
  });
}