import { Router } from 'express';
import { events } from './db.json';
import { EventInterface } from '../simple-shared-data/EventInterface';

export const eventsRoute = Router();

eventsRoute.use((_req, res, next) => {
    // Allow any website to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
  
    // Continue to next middleware
    next();
  });

eventsRoute.get('/events', (req, res) => {
    res.json(events);
});
