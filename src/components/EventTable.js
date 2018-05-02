import React from 'react';


const EventTable = ({ event }) => {
  return (
        <div>
            <h1>{event.date}</h1>
            <table>
                {event.runs.map(run => (<tr><td>{run.event}</td></tr>))}
            </table>
        </div>
  );
}

export default EventTable
