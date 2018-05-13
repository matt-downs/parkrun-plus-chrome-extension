import React from 'react';
import EventTable from './EventTable';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


const EventTimeline = ({ athletes, events }) => {
    return (
        <Grid item xs={12}>
            <Typography variant="display2">
                Feed
            </Typography>
            {events.map(event => (<EventTable event={event} athletes={athletes} />))}
        </Grid>
    );
}

export default EventTimeline
