import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../components/SignUpForm.jsx';

class SignUpPage extends Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: '',
        location: '',
        motivation: 5,
      },
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
    this.onChangeMenu = this.onChangeMenu.bind(this);

  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const location = encodeURIComponent(this.state.user.location);
    const motivation = encodeURIComponent(this.state.user.motivation);
    const formData = `name=${name}&email=${email}&password=${password}&location=${location}&motivation=${motivation}`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', 'https://nomeatmay.herokuapp.com/auth/signup');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        // make a redirect
        // this.context.router.replace('/login');
        this.props.history.push('/login');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    this.setState({
      user
    });
  }

  onChangeMenu(event, index, value) {
    const user = this.state.user;
    const motivation = "motivation";
    user[motivation] = value;
    this.setState({
      user
    });
  }
  /**
   * Render the component.
   */
  render() {
    return (
      <div>
        <SignUpForm
          onSubmit={this.processForm}
          onChange={this.changeUser}
          onChangeMenu={this.onChangeMenu}
          errors={this.state.errors}
          user={this.state.user}
          value={this.state.value}
        />
    </div>
    );
  }

}

SignUpPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SignUpPage;
