import React from 'react';
import propTypes from 'prop-types';
import './SignIn.css';

const SignIn = props => (
  <div className="signin">
    <h2>Sign in with Google to create your first Habit!</h2>
    <button onClick={props.login}>Sign In with Google</button>
  </div>
);

SignIn.propTypes = {
  login: propTypes.func.isRequired,
};

export default SignIn;
