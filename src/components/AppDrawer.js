import React, { Fragment } from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import RssFeed from '@material-ui/icons/RssFeed';
import Hidden from 'material-ui/Hidden';



export const drawerWidth = 240;

const styles = theme => ({
    drawerPaper: {
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
});


class AppDrawer extends React.Component {

    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }

    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    render() {
        const { classes } = this.props;

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
                        classes={{
                            paper: classes.drawerPaper
                        }}
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
