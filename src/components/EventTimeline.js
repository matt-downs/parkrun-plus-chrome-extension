import React from 'react';
import EventTable from './EventTable';
import Grid from 'material-ui/Grid';


const EventTimeline = ({ athletes, events }) => {
  return (
    <Grid item xs={12}>
      {events.map(event => (<EventTable event={event} athletes={athletes} />))}
    </Grid>
  );
}

export default EventTimeline
