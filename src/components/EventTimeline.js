import React from 'react';
import EventTable from './EventTable';


const EventTimeline = ({ athletes, events }) => {
  return (
    <div>
    {events.map(event => (<EventTable event={event} />))}
    </div>
  );
}

export default EventTimeline
