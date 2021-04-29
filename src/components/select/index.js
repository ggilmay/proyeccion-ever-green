// @packages
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import React from 'react';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// @styles
import styles from './styles';

const CustomSelect = ({
  classes,
  id,
  name,
  onChange,
  options,
  title,
  value
}) => (
  <FormControl className={classes.formControl} variant="outlined">
    <Typography gutterBottom>
      {title}
    </Typography>
    <Select
      className={classes.select}
      id={id}
      name={name}
      onChange={onChange}
      value={value}
    >
      {options.map(option => (
        <MenuItem key={option.description} value={option.id}>
          <em>{option.description}</em>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
)

CustomSelect.propTypes = {
  classes : PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  title: PropTypes.string,
  value: PropTypes.number.isRequired
}

CustomSelect.defaultProps = {
  id: '',
  title: ''
}

export default withStyles(styles)(CustomSelect);
