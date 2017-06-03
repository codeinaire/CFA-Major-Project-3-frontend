import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserList from './UserList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    users: []
    }
  };

  componentDidMount() {
    console.log('componentDidMount');
    this.getUserList();
    console.log('componentDidMount - redux');
  };

  // first point of contact
  getUserList() {
      // have
      const URL = 'http://localhost:3001/api/user';
      // '=>' is like the .bind that we have used previously
      axios.get(URL)
        .then((response) => {
          console.log("this is the response data", response.data);
          // setting it as a state
          this.setState({ users: response.data });
          console.log('after setState');
        })
        .catch(function (error){
          console.log(error);
        });
  };

  render() {
    // console.log('render()');
    console.log('state of users on app.js', this.state.users);
    return (
      <div>
        <h1>Users</h1>
        {/* <BookList books={this.state.books} /> */}
        {this.state.users.length <  1 ? <p>Loading...</p> : <UserList users={this.state.users} getUserList={() => this.getUserList()}/> }
      </div>
    );
  }
}

export default App;
