import React from 'react';
import Auth from '../modules/Auth';
import ProfileForm from '../components/ProfileForm.jsx';


class ProfileFormPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      profileData: {
        username: '',
        bio: '',
        motivationText: '',
      },
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', 'https://nomeatmay.herokuapp.com/api/profileform', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message,
          profileData: xhr.response.user
        });
      }
    });
    xhr.send();
  }

  // processForm(event) {
  //   // prevent default action. in this case, action is the form submission event
  //   event.preventDefault();
  //
  //   // create a string for an HTTP body message
  //   const email = encodeURIComponent(this.state.user.email);
  //   const password = encodeURIComponent(this.state.user.password);
  //   const formData = `email=${email}&password=${password}`;
  //
  //   // create an AJAX request
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('post', 'https://nomeatmay.herokuapp.com/auth/login');
  //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //   xhr.responseType = 'json';
  //   xhr.addEventListener('load', () => {
  //     if (xhr.status === 200) {
  //       // success
  //
  //       // change the component-container state
  //       this.setState({
  //         errors: {}
  //       });
  //
  //       // save the token
  //       Auth.authenticateUser(xhr.response.token);
  //
  //       // update authenticated state
  //       this.props.toggleAuthenticateStatus()
  //
  //       // redirect signed in user to dashboard
  //       this.props.history.push('/profileform');
  //     } else {
  //       // failure
  //
  //       // change the component state
  //       const errors = xhr.response.errors ? xhr.response.errors : {};
  //       errors.summary = xhr.response.message;
  //
  //       this.setState({
  //         errors
  //       });
  //     }
  //   });
  //   xhr.send(formData);
  // }

  changeUser(event) {
    const field = event.target.name;
    const profileData = this.state.profileData;
    profileData[field] = event.target.value;

    this.setState({
      profileData
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (<ProfileForm
      secretData={this.state.secretData}
      profileData={this.state.profileData}
      onChange={this.changeUser}
      onSubmit={this.processForm}

    />);
  }

}

export default ProfileFormPage;
