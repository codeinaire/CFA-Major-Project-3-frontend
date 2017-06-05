import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Auth from 'modules/Auth';
// router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
// material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// CSS
import './App.css';
// pages
import HomePage from 'components/HomePage.jsx';
import SignUpPage from './SignUpPage.jsx';
import LoginPage from './LoginPage.jsx';
import LogoutFunction from './LogoutFunction.jsx';
import DashboardPage from './DashboardPage.jsx';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      <MuiThemeProvider >
        <Router>
          <div>
            <div className="top-bar">
              <div className="top-bar-left">
                <Link to="/">React App</Link>
              </div>
              {this.state.authenticated ? (
                <div className="top-bar-right">
                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/logout">Log out</Link>
                  <Link to="/login">Log in</Link>
                </div>
              ) : (
                <div className="top-bar-right">
                  <Link to="/login">Log in</Link>
                  <Link to="/signup">Sign up</Link>
                </div>
              )}

            </div>


            {/* <Route exact path="/" component={HomePage}/>
            <Route path="/signup" component={SignUpPage}/> */}
            {/* <Route path="/login" component={LoginPage}/> */}
            <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
            <LoggedOutRoute path="/signup" component={SignUpPage}/>
            <Route path="/logout" component={LogoutFunction}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default Main;

// class App extends Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//     users: []
//     }
//   };
//
//   componentDidMount() {
//     console.log('componentDidMount');
//     this.getUserList();
//     console.log('componentDidMount - redux');
//   };
//
//   // first point of contact
//   getUserList() {
//       // have
//       const URL = 'http://localhost:3001/api/user';
//       // '=>' is like the .bind that we have used previously
//       axios.get(URL)
//         .then((response) => {
//           console.log("this is the response data", response.data);
//           // setting it as a state
//           this.setState({ users: response.data });
//           console.log('after setState');
//         })
//         .catch(function (error){
//           console.log(error);
//         });
//   };
//
//   render() {
//     // console.log('render()');
//     console.log('state of users on app.js', this.state.users);
//     return (
//       <div>
//         <h1>Users</h1>
//         {/* <BookList books={this.state.books} /> */}
//         {this.state.users.length <  1 ? <p>Loading...</p> : <UserList users={this.state.users} getUserList={() => this.getUserList()}/> }
//       </div>
//     );
//   }
// }
//
// export default App;
