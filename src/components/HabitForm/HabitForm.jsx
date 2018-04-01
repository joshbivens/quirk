import React, { Component } from 'react';
import propTypes from 'prop-types';
import { database } from '../../config/constants';
import './HabitForm.css';

class HabitForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      reps: '',
      tag: '',
      tags: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleKeyPress(e) {
    this.setState({
      tag: e.target.value,
    });

    if (e.key === ',') {
      const { tag, tags } = this.state;
      this.setState({
        tags: [...tags, tag.slice(0, tag.length - 1)],
        tag: '',
      });
    }
  }

  handleSubmit(e) {
    if (this.state.title && this.state.reps) {
      e.preventDefault();
      const habitsRef = database.ref(`habits/${this.props.uid}`);
      const habit = {
        title: this.state.title,
        reps: this.state.reps,
        completed: 0,
        tags: this.state.tags,
      };
      habitsRef.push(habit);

      this.setState({
        title: '',
        reps: '',
        tags: [],
      });
    }
  }

  render() {
    return (
      <div className="habit-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            value={this.state.reps}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="tag"
            placeholder="Tags Comma-Separated"
            value={this.state.tag}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyPress}
          />
          <button type="submit" id="save">
            <i className="fa fa-floppy-o" aria-hidden="true" />
          </button>
        </form>
        <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
      </div>
    );
  }
}

HabitForm.propTypes = {
  uid: propTypes.string.isRequired,
};

export default HabitForm;
