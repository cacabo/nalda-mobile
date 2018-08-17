import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import moment from 'moment';
import textStyles from '../../styles/shared/text';
import styles from '../../styles/listings/listing';

class Hours extends Component {
  // Helper method to convert from military to normal time
  static formatHours(hour) {
    return moment(hour, 'HH:mm').format('h:mm a');
  }

  constructor(props) {
    super(props);
    this.areHours = this.areHours.bind(this);
    this.renderHours = this.renderHours.bind(this);
    this.renderDay = this.renderDay.bind(this);
  }

  // Helper method to check if there are hours
  areHours() {
    // Check to see if any hour is populated
    const keys = Object.keys(this.props.hours);
    const reducer = (acc, curr) => {
      if (acc) return true;
      const dayObj = this.props.hours[curr];
      return !!(dayObj.start && dayObj.finish);
    };
    return keys.reduce(reducer, false);
  }

  renderDay(day, index) {
    const hours = this.props.hours[day.toLowerCase()];
    // Add a gray background to every other row
    const isEven = !(index % 2);
    let rowStyles;
    if (isEven) rowStyles = [styles.row, styles.rowColored];
    else rowStyles = styles.row;

    if (hours.start && hours.finish) {
      // Render the row
      return (
        <View style={rowStyles} key={day}>
          <View style={styles.col}>
            <Text>
              {day}
            </Text>
          </View>
          <View style={styles.col}>
            <Text>
              {Hours.formatHours(hours.start)} - {Hours.formatHours(hours.finish)}
            </Text>
          </View>
        </View>
      );
    }

    return (
      <View style={rowStyles} key={day}>
        <View style={styles.col}>
          <Text>
            {day}
          </Text>
        </View>
        <View style={styles.col}>
          <Text>
            Closed
          </Text>
        </View>
      </View>
    );
  }

  renderHours() {
    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    return (
      // If a date has a start and end time, it will be displayed
      <View style={styles.table}>
        {days.map(this.renderDay)}
      </View>
    );
  }

  render() {
    if (this.areHours()) {
      return (
        <View style={styles.section}>
          <Text style={textStyles.subtitle}>
            Hours:
          </Text>
          {this.renderHours()}
        </View>
      );
    }

    return null;
  }
}

Hours.propTypes = {
  hours: PropTypes.object.isRequired,
};

export default Hours;
