import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class UserList extends Component {

  deleteUser (user_id) {
    const URL = 'http://localhost:3001/api/user/user_id';
    axios.delete(URL)
      .then((response) => {
        console.log(response);
        this.props.getUserList();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render () {
    return (
      <ul>
        { console.log('this is props.user: ', this.props.users) }
        { this.props.users.map((user, i) => <li key={i}> <span>Name:</span> { user.fullName } <br/> <span>Email:</span> { user.emailAddress } <br/> <span>Location:</span> { user.location } <br/> <button onClick={() => this.deleteUser(user._id)}>Delete Entry</button></li>) }
      </ul>
    )
  }

};

UserList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UserList;
