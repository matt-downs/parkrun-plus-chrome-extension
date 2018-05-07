import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';



const styles = theme => ({
    eventTable: {
        marginBottom: theme.spacing.unit * 3
    },
    title: {
        paddingTop: theme.spacing.unit * 3,
        paddingLeft: theme.spacing.unit * 3,
    }
});

const EventTable = ({ event, athletes, classes }) => {
    return (
        <Paper className={classes.eventTable}>
            <Typography variant="title" className={classes.title}>{event.date}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell numeric>Time</TableCell>
                        <TableCell>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {event.runs.map(run => {
                    return (
                        // key={n.id}
                        <TableRow >
                            <TableCell>{athletes[run.athleteId].name}</TableCell>
                            <TableCell numeric>{run.time}</TableCell>
                            <TableCell>{run.event}</TableCell>
                        </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default withStyles(styles)(EventTable)
