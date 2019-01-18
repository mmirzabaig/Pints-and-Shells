import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 20,
  },
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="relative" style={{ backgroundColor: '#2E6A8A', width: '98%', top: '15px', left: 15}}>
        <Toolbar variant="dense" style={{width: '100%', border: '1px solid white'}}>
        <IconButton className={classes.menuButton} color='white' aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{color:'#ECEEF9'}}>
            Pints & Shells
          </Typography>

            <Button color="inherit" style={{left: '84%', marginLeft: '5px'}}>Login</Button>
            <Button color="inherit" style={{left: '76%'}}>Tour</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);
