import React, { useEffect, useState } from 'react';
import { eventAPI } from './eventAPI';
import EventDetail from './EventDetail';
import { Event } from './Event';
import { useParams } from 'react-router-dom';

function EventPage(props: any) {
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();
  const id = Number(params.id);

  useEffect(() => {
    setLoading(true);
    eventAPI
      .find(id)
      .then((data) => {
        setEvent(data);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      <>
        <h1>Event Detail</h1>

        {loading && (
          <div className="center-page">
            <span className="spinner primary"></span>
            <p>Loading...</p>
          </div>
        )}

        {error && (
          <div className="row">
            <div className="card large error">
              <section>
                <p>
                  <span className="icon-alert inverse "></span> {error}
                </p>
              </section>
            </div>
          </div>
        )}

        {event && <EventDetail event={event} />}
      </>
    </div>
  );
}

export default EventPage;