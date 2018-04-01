import React, { Component } from 'react';
import propTypes from 'prop-types';
import { database } from '../../config/constants';
import './Habit.css';

class Habit extends Component {
  handleClick(item) {
    if (this.props.completed < this.props.reps) {
      const habitsRef = database.ref(`/habits/${this.props.uid}/${item}`);
      habitsRef.update({ completed: this.props.completed + 1 });
    }
  }

  handleDelete(item) {
    database.ref(`/habits/${this.props.uid}/${item}`).remove();
  }

  reset(item) {
    const habitsRef = database.ref(`/habits/${this.props.uid}/${item}`);
    habitsRef.update({ completed: 0 });
  }

  render() {
    const {
      id, title, completed, reps
    } = this.props;

    const progressBarHeight = {
      height: `${100 - completed * (100 / reps)}%`
    };

    return (
      <div key={id} className="habit">
      
        <span
          className="habit__delete"
          role="button"
          tabIndex="0"
          onClick={() => this.handleDelete(id)}
          onKeyUp={e => this.handleKeyPress(e, id)}
        >
          <i className="fa fa-times-circle fa-lg" aria-hidden="true" />
        </span>

        <h2>{title}</h2>
        
        {completed == reps ? <h1>Complete!</h1> : null}

        <h4>{completed}/{reps}</h4>

        <div className="progress">
          <div className="progress__bar-outer">
            <div className="progress__bar-inner" style={progressBarHeight} />
          </div>
          {completed == reps ? (
            <button
              className="progress__btn"
              onClick={() => this.reset(id)}
              aria-label="reset progress"
            >
              <i className="fa fa-repeat" aria-hidden="true" />
            </button>
          ) : (
            <button
              className="progress__btn"
              onClick={() => this.handleClick(id)}
              aria-label="increment progress"
            >
              <i className="fa fa-plus" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  }
}

Habit.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  completed: propTypes.number.isRequired,
  reps: propTypes.string.isRequired
};


export default Habit;
