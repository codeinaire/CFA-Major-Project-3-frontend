<div className="top-bar">
  <div className="top-bar-left">
    <Link to="/">No Meat May</Link>
  </div>
  {/* {this.state.authenticated ? (
    <div className="top-bar-right">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/logout">Log out</Link>
    </div>
  ) : (
    <div className="top-bar-right">
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  )} */}

  <div className="top-bar-right">
    <Link to="/login">Log in</Link>
    <Link to="/signup">Sign up</Link>
  </div>

</div>
{/* <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
<PrivateRoute path="/dashboard" component={DashboardPage}/>
<LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
<LoggedOutRoute path="/signup" component={SignUpPage}/> */}
{/* <Route path="/login" component={LoginPage}/> */}
{/* <Route path="/logout" component={LogoutFunction}/> */}
