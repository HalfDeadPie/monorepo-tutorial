import React, {useState} from 'react';
import { Event } from './Event';
import EventCard from './EventCard';
import EventForm from './EventForm';

interface EventListProps {
  projects: Event[];
  onSave: (event: Event) => void;
}

function EventList({ projects, onSave }: EventListProps) {
    const [eventBeingEdited, setEventBeingEdited] = useState({});

    const handleEdit = (project: Event) => {
        setEventBeingEdited(project);
    };

    const cancelEditting = () => {
        setEventBeingEdited({});
    }


  return(
    <div className="row">
        {projects.map((event) =>(
            <div key={event.id} className="cols-sm">
            {event === eventBeingEdited ? (
                <EventForm
                event={event}
                onSave={onSave} 
                onCancel={cancelEditting}
                />
            ):
            (
                <EventCard 
                event={event} 
                onEdit={handleEdit} 
                />
            )}
            </div>
        ))}
    </div>
  );
}

export default EventList;