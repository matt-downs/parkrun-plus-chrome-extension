// Core
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// Material
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from 'material-ui/CssBaseline';

// Custom
import EventTimeline from '../containers/EventTimeline';
import FollowAthletes from '../containers/Follow';
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
        padding: theme.spacing.unit * 3,
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
        }
    },
    toolbar: theme.mixins.toolbar
});


class App extends React.Component {
    toggleAppDrawer = () => {
        this.appDrawer.handleDrawerToggle()
    };

    render() {
        const { classes } = this.props;

        return (
            <BrowserRouter>
                <React.Fragment>
                    <CssBaseline />
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
                                <Route exact path="/" component={EventTimeline}/>
                                <Route path="/athletes" component={FollowAthletes}/>
                            </Grid>
                        </main>

                    </div>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}


export default withStyles(styles, { withTheme: true })(App)
