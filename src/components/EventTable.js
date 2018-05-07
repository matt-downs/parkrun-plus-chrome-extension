import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography'


const EventTable = ({ event, athletes }) => {
    return (
        <Paper>
            <Typography variant="title">{event.date}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell numeric>Time</TableCell>
                        <TableCell numeric>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {event.runs.map(run => {
                    return (
                        // key={n.id}
                        <TableRow >
                            <TableCell>{athletes[run.athleteId].name}</TableCell>
                            <TableCell numeric>{run.time}</TableCell>
                            <TableCell numeric>{run.event}</TableCell>
                        </TableRow>
                    );
                })}
                </TableBody>
            </Table>
        </Paper>
    );
}

export default EventTable
