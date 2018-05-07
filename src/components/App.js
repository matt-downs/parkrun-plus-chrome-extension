import React from 'react';
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


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        marginLeft: drawerWidth,
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
    toolbar: theme.mixins.toolbar,
});


const App = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        Parkrun Plus
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
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
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container>
                    <EventTimeline/>
                </Grid>
            </main>
        </div>
    )
}

export default withStyles(styles)(App)
