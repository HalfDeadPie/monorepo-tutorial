import React, {Fragment, useState, useEffect} from 'react';
import EventList from './EventLists';
import { Event } from './Event';
import { eventAPI } from './eventAPI';

function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  

  
  useEffect(() => {
      async function loadEvents() {
        setLoading(true);
        try {

          const data = await eventAPI.get(currentPage);
          if (currentPage === 1) {
              setEvents(data);
            } else {
              setEvents((events) => [...events, ...data]);
            }
        }
          catch (e) {
          if (e instanceof Error) {
            setError(e.message);
          }
          } finally {
          setLoading(false);
        }
      }
      loadEvents();
    }, [currentPage]);
  

  const handleMoreClick = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const saveProject = (event: Event) => {
    eventAPI
     .put(event)
     .then((updatedEvent) => {
       let updatedEvents = events.map((p: Event) => {
         return p.id === event.id ? new Event(updatedEvent) : p;
       });
       setEvents(updatedEvents);
     })
     .catch((e) => {
        if (e instanceof Error) {
         setError(e.message);
        }
     });
  };

  return (
    <Fragment>
    <h1>Events</h1>
    

      {error && (
      <div className="row">
        <div className="card large error">
          <section>
            <p>
              <span className="icon-alert inverse "></span>
              {error}
            </p>
          </section>
        </div>
      </div>
      )}

      <EventList onSave={saveProject} projects={events} />

      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
      <div className="center-page">
        <span className="spinner primary"></span>
        <p>Loading...</p>
      </div>

      )}
    </Fragment>
    );
}

export default EventsPage;