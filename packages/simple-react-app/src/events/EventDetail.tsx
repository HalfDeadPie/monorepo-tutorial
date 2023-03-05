import React from 'react';
import { Event } from './Event';

interface EventDetailProps {
  event: Event;
}
export default function EventDetail({ event: event }: EventDetailProps) {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card large">
          <img
            className="rounded"
            src={event.imageUrl}
            alt={event.name}
          />
          <section className="section dark">
            <h3 className="strong">
              <strong>{event.name}</strong>
            </h3>
            <p>{event.description}</p>
            <p>Coordinates: {event.latitude} {event.longtitude} </p>
            <p>
              <mark className="active">
                {' '}
                {event.isActive ? 'active' : 'inactive'}
              </mark>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}