import React from 'react';
import PropTypes from 'prop-types';
import './SignUpForm.css'
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 300,
  },
};

const SignUpForm = ({
  onSubmit,
  onChange,
  user,
  errors,
  onChangeMenu,
  value,
}) => (
  <Card className="container styles">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <TextField
          floatingLabelText="Name"
          name="name"
          errorText={errors.name}
          onChange={onChange}
          value={user.name}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
      </div>

      <div className="field-line">
        <TextField
          floatingLabelText="Location"
          name="location"
          onChange={onChange}
          errorText={errors.location}
          value={user.location}
        />
      </div>

      <div className="field-line">
        <SelectField
          floatingLabelText="Motivation"
          name="motivation"
          value={user.motivation}
          onChange={onChangeMenu}
          errorText={errors.value}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Personal Health" />
          <MenuItem value={2} primaryText="Animal Welfare" />
          <MenuItem value={3} primaryText="Environmental Health" />
          <MenuItem value={4} primaryText="Food Equity" />
          <MenuItem value={5} primaryText="All of the Above" />
        </SelectField>
      </div>

      <div className="button-line">
        <RaisedButton type="submit" label="Create New Account" primary />
      </div>

      <CardText>Already have an account? <Link to={'/login'}>Log in</Link></CardText>
    </form>
  </Card>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
