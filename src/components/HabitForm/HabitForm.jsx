import React, { Component } from 'react';
import propTypes from 'prop-types';
import { database } from '../../config/constants';
import './HabitForm.css';

class HabitForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      reps: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    if (this.state.title && this.state.reps) {
      e.preventDefault();
      const habitsRef = database.ref(`habits/${this.props.uid}`);
      const habit = {
        title: this.state.title,
        reps: this.state.reps,
        completed: 0
      };
      habitsRef.push(habit);

      this.setState({
        title: '',
        reps: ''
      });
    }
  }

  render() {
    return (
      <div className="habit-form">
        <form onSubmit={this.handleSubmit}>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            id="reps"
            type="number"
            name="reps"
            placeholder="Reps"
            value={this.state.reps}
            onChange={this.handleChange}
          />
          <button type="submit" id="save">
            <i className="fa fa-floppy-o" aria-hidden="true" />
          </button>
        </form>
      </div>
    );
  }
}

HabitForm.propTypes = {
  uid: propTypes.string.isRequired,
};

export default HabitForm;
