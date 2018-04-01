import React, { Component } from 'react';
import { auth, provider } from './config/constants';
import Header from './components/Header/Header';
import HabitGrid from './components/HabitGrid/HabitGrid';
import SignIn from './components/SignIn/SignIn';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loggedIn: false,
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user,
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }

  login() {
    auth.signInWithPopup(provider).then((result) => {
      const user = result.user;
      this.setState({
        user,
        loggedIn: true,
      });
    });
  }

  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null,
        loggedIn: false,
      });
    });
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} login={this.login} logout={this.logout} />
        <div className="container">
          {this.state.loggedIn ? (
            <HabitGrid uid={this.state.user.uid} />
          ) : (
            <SignIn login={this.login} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
