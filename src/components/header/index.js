// @packages
import AppBar from '@material-ui/core/AppBar';
import NatureIcon from '@material-ui/icons/Nature';
import PropTypes from 'prop-types';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @scripts
import Link from '../../components/Link';

// @styles
import styles from './styles';

const Header = ({ classes, name }) => (
  <AppBar position="static">
    <Toolbar>
      <Link className={classes.link} to="/">
        <NatureIcon className={classes.icon} size="large" />
        <Typography className={classes.title} variant="h6">
          {name}
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes : PropTypes.object.isRequired,
  name: PropTypes.string
}

Header.defaultProps = {
  likes: 0
}

export default withStyles(styles)(Header);
