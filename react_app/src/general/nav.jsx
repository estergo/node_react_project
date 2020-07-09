import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Nav () {

        const classes = useStyles();
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton href="/candidates" edge="start" className={classes.menuButton} color="inherit" aria-label="go to home page">
                            <HomeIcon />                               
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Candidates App
                        </Typography>
        
                        <Button href="/register" color="inherit">
                          Register
                        </Button>
                        <Button href="/login" color="inherit">Login
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
}

export default Nav;