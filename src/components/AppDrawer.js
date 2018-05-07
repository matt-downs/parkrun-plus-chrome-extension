import React, { Fragment } from 'react';
import EventTimeline from '../containers/EventTimeline';
import Grid from 'material-ui/Grid';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import RssFeed from '@material-ui/icons/RssFeed';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from 'material-ui/Hidden';



const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
});


class AppDrawer extends React.Component {

    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes, theme } = this.props;

        const drawerContent = (
            <Fragment>
                <div className={classes.toolbar} />
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <RssFeed />
                        </ListItemIcon>
                        <ListItemText primary="Feed" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DirectionsRun />
                        </ListItemIcon>
                        <ListItemText primary="Athletes" />
                    </ListItem>
                </List>
            </Fragment>
        )

        return (
            <Fragment>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor='left'
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{paper: classes.drawerPaper}}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawerContent}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer variant="permanent" open classes={{ paper: classes.drawerPaper }}>
                        {drawerContent}
                    </Drawer>
                </Hidden>
             </Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AppDrawer)
