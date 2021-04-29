// @packages
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @styles
import styles from './styles';

const BackgroundImage = ({ classes, imageUrl, subtitle, title }) => (
  <Box>
    <div style={{ backgroundImage: `url(${imageUrl})` }} className={classes.image} />
    <Typography className={classes.title}>{title}</Typography>
    <Typography className={classes.subtitle}>{subtitle}</Typography>
  </Box>
)

BackgroundImage.propTypes = {
  classes : PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default withStyles(styles)(BackgroundImage);
