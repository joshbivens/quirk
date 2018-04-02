import React from 'react';
import propTypes from 'prop-types';
import './Header.css';

const Header = props => (
  <header>
    <div className="header__content">

      <h2 className="app-logo" alt="logo">Quirk</h2>
      <div className="header__user-area">
        {props.user ? <div className="header__user-username">{props.user.displayName}</div> : null}

        {props.user ? (
          <div className="header__user-avatar">
            <img src={props.user.photoURL} alt="user avatar" />
          </div>
        ) : null}

        <div className="header__login">
          {props.user ? (
            <button className="loggedIn" onClick={props.logout}>
              Log Out
            </button>
          ) : (
            <button className="loggedOut" onClick={props.login}>
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: propTypes.shape(propTypes.any.isRequired).isRequired,
  login: propTypes.func.isRequired,
  logout: propTypes.func.isRequired,
};

export default Header;
