import React from 'react';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MoreVert from '@material-ui/icons/MoreVert';
import Add from '@material-ui/icons/Add';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Zoom from 'material-ui/transitions/Zoom';
import { Link } from 'react-router-dom';


const styles = theme => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    }
})


class AthletesList extends React.Component {
    state = {
        anchorEl: null
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { anchorEl } = this.state;
        const { classes, athletesList } = this.props;

        return(
            <Grid item xs={12}>
                <Typography variant="display2">
                    Athletes
                </Typography>

                <List>
                    {athletesList.map(athlete => (
                        <ListItem button key={athlete.athleteId}>
                            <Avatar>{athlete.initials}</Avatar>
                            <ListItemText primary={athlete.name} />
                            <ListItemSecondaryAction>
                                <IconButton
                                    aria-label="Delete"
                                    aria-owns={anchorEl ? 'simple-menu' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleClick}
                                >
                                    <MoreVert />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>

                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>Unfollow</MenuItem>
                </Menu>

                <Zoom in={true}>
                    <Button
                        variant="fab"
                        component={Link}
                        to="/athletes/follow"
                        className={classes.fab}
                        color="primary"
                        aria-label="add"
                    >
                        <Add />
                    </Button>
                </Zoom>                
            </Grid>
        )
    }
}


export default withStyles(styles)(AthletesList)
