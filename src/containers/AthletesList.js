import { connect } from 'react-redux'
import _ from 'lodash'
import AthletesList from '../components/AthletesList'


function getInitials(name) {
    name = name.split(' ');
    return name[0].charAt(0) + name[1].charAt(0);
}

function getArrayOfAthletes(athletes) {
    let array = [];
    _.forOwn(athletes, (athlete, athleteId) => {
        array.push({
            athleteId: athlete.athleteId,
            name: athlete.name,
            initials: getInitials(athlete.name)
        });
    });
    return array;
}

const mapStateToProps = state => ({
    athletesList: getArrayOfAthletes(state.athletes)
})

const mapDispatchToProps = dispatch => ({
    // toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AthletesList)