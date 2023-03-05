import { Event } from './Event';
import React from 'react';
import { Link } from 'react-router-dom';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface EventCardProps {
  event: Event;
  onEdit: (event: Event) => void;
}

function EventCard(props: EventCardProps) {
    const { event: event, onEdit } = props;
    const handleEditClick = (eventBeingEdited: Event) => {
        onEdit(eventBeingEdited);
    };
    return (
        <div className="card">
            <img src={event.imageUrl} alt={event.name} />
            <section className="section dark">
            <Link to={'/event/' + event.id}>
              <h5 className="strong">
                  <strong>{event.name}</strong>
              </h5>
              <p>{formatDescription(event.description)}</p>
            </Link>
            <button className="bordered" 
            onClick={() => {
                handleEditClick(event);
            }}>
            <span className="icon-edit "></span>
            Edit
            </button>
            </section>
        </div>
  );
}

export default EventCard;