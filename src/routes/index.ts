import express from 'express';
import getLocationsWithTimezones from '../data'

const apiRouter = express.Router();

apiRouter.get('/timezones', getLocationsWithTimezones);

export default apiRouter;