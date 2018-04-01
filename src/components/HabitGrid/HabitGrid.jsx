import React, { Component } from 'react';
import propTypes from 'prop-types';
import { database } from '../../config/constants';
import Habit from '../Habit/Habit';
import HabitForm from '../HabitForm/HabitForm';
import './HabitGrid.css';

class HabitGrid extends Component {
  constructor() {
    super();
    this.state = {
      habits: [],
    };
  }

  componentDidMount() {
    database.ref(`habits/${this.props.uid}`).on('value', (snapshot) => {
      const habits = snapshot.val();
      const arr = [];
      for (const habit in habits) {
        arr.push({
          id: habit,
          title: habits[habit].title,
          completed: habits[habit].completed,
          reps: habits[habit].reps,
          tags: habits[habit].tags || [],
        });
      }
      this.setState({
        habits: arr,
      });
    });
  }

  render() {
    return (
      <div className="habit-container">
        <HabitForm uid={this.props.uid} />
        {this.state.habits.map(habit => (
          <Habit
            uid={this.props.uid}
            key={habit.id}
            id={habit.id}
            title={habit.title}
            completed={habit.completed}
            reps={habit.reps}
            tags={habit.tags}
          />
        ))}
      </div>
    );
  }
}

HabitGrid.propTypes = {
  uid: propTypes.string.isRequired,
};

export default HabitGrid;
