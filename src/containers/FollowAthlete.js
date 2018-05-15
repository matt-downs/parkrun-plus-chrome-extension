import { connect } from 'react-redux';
import FollowAthlete from '../components/FollowAthlete';
import { followAthleteAction } from '../actions';


const mapStateToProps = state => ({});


const mapDispatchToProps = dispatch => ({
    followAthlete: athleteId => dispatch(followAthleteAction(athleteId))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FollowAthlete)