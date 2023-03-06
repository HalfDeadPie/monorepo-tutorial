import { Router } from 'express';
import { events } from './db.json';
import { EventInterface } from '../simple-shared-data/EventInterface';

export const eventsRoute = Router();

eventsRoute.get('/events', (req, res) => {
    res.json(events);
});
