import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';


const styles = theme => ({
    textField: {
        marginRight: '20px'
    }
});


class FollowAthleteModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            athleteId: ''
        };
    
        this.handleChangeAthleteId = this.handleChangeAthleteId.bind(this);
        this.handleFollowAthlete = this.handleFollowAthlete.bind(this);
    }

    handleChangeAthleteId (event) {
        this.setState({athleteId: event.target.value});
    }

    handleFollowAthlete(event) {
        event.preventDefault();
        this.props.followAthlete(this.state.athleteId);
    }

    render() {
        const { classes } = this.props;
        
        return (
            <Grid item xs={12}>
                <Typography variant="display2">
                    Follow Athlete
                </Typography>
                <form onSubmit={this.handleFollowAthlete}>
                    <TextField
                        id="athlete-id-field"
                        autoFocus={true}
                        required={true}
                        value={this.state.athleteId}
                        onChange={this.handleChangeAthleteId}
                        label="Athlete ID"
                        type="text"
                        className={classes.textField}
                        margin="normal"
                    />
                    <Button
                        variant="raised"
                        color="primary"
                        type="submit"
                    >
                        Follow
                    </Button>
                </form>
            </Grid>
        );
    }
}


export default withStyles(styles)(FollowAthleteModal)


