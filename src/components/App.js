import React from 'react';
import EventTimeline from '../containers/EventTimeline';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppDrawer, { drawerWidth } from "./AppDrawer";


const styles = theme => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
        }
    },
    toolbar: theme.mixins.toolbar
});


class App extends React.Component {

    state = {
        mobileOpen: false,
    };

    toggleAppDrawer = () => {
        this.appDrawer.handleDrawerToggle()
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" onClick={this.toggleAppDrawer} className={classes.navIconHide}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Parkrun Plus
                        </Typography>
                    </Toolbar>
                </AppBar>

                <AppDrawer onRef={ref => (this.appDrawer = ref)}/>

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid container>
                        <EventTimeline/>
                    </Grid>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(App)
