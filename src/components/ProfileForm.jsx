import React from 'react';
import PropTypes from 'prop-types';
// material-ui
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const ProfileForm = ({
  secretData,
  profileData,
  onChange,
  onSubmit,
}) => (
  <Card className="container styles">
    <CardTitle
      title="Enter Profile Info"
      subtitle="To get started enter profile info. We'll give you a reward!"
    />
    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{profileData.name}</strong>!<br />{secretData}</CardText>}

    <form action="/" onSubmit={onSubmit}>

      {/* {errors.summary && <p className="error-message">{errors.summary}</p>} */}

      <div className="field-line">
        <TextField
          floatingLabelText="User Name"
          name="username"
          // errorText={errors.username}
          onChange={onChange}
          value={profileData.username}
        />
      </div>

      <div className="field-line">
        <TextField
          multiLine={true}
          floatingLabelText="Bio"
          name="bio"
          // errorText={errors.bio}
          onChange={onChange}
          value={profileData.bio}
        />
      </div>

      <div className="field-line">
        <TextField
          multiLine={true}
          floatingLabelText="Motivation"
          name="motivationText"
          onChange={onChange}
          // errorText={errors.motivationText}
          value={profileData.motivationText}
        />
      </div>

      {/* TODO - have an option to upload a profile image */}

      <div className="button-line">
        <RaisedButton type="submit" label="Create a profile!" primary />
      </div>
    </form>

  </Card>
);

ProfileForm.propTypes = {
  secretData: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  profileData: PropTypes.object.isRequired,
};

export default ProfileForm;
