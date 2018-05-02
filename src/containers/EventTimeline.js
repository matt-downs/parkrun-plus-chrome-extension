import {
    connect
} from 'react-redux'
import _ from 'lodash'
import EventTimeline from '../components/EventTimeline'


// Generates an array of runs (grouped by day) from an athletes object
function generateRunTimeline(athletes) {

    // https://github.com/matt-downs/parkrun-plus-chrome-extension/blob/d9cf9dc6ad0176f88f72501fad33b6cd3de57d32/src/app/app.js#L45-L90

    let runsByDate = {};
    _.forOwn(athletes, (athlete, athleteId) => {
        _.forEach(athlete.recentRuns, (run) => {
            if (!runsByDate[run.date]) runsByDate[run.date] = [run];
            else runsByDate[run.date].push(run);
        });
    });


    // Flatten the runsByDate object to an array of events
    let events = [];
    _.forOwn(runsByDate, (runs, date) => {
        events.push({
            date: date,
            runs: runs
        });
    });
    

    return events;
}

const mapStateToProps = state => ({
    athletes: state.athletes,
    events: generateRunTimeline(state.athletes)
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventTimeline)