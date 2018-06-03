import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import moment from 'moment';
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

  renderDay(day) {
    const hours = this.props.hours[day.toLowerCase()];
    if (hours.start && hours.finish) {
      return (
        <View style={styles.row} key={day}>
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

    return null;
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
      <View styles={styles.table}>
        {days.map(this.renderDay)}
      </View>
    );
  }

  render() {
    if (this.areHours()) {
      return (
        <View>
          <Text style={styles.subtitle}>
            Hours:
          </Text>
          {this.renderHours()}
        </View>
      );
    }

    return null;
  }
}

// {
//   (hours.monday.start && hours.monday.finish) ? (
//     <View style={styles.row}>
//       <View style={styles.col}>
//         <Text>
//           Monday
//         </Text>
//       </View>
//       <View>
//         {this.formatHours(hours.monday.start)} - {this.formatHours(hours.monday.finish)}
//       </View>
//     </View>
//   ) : null
// }
// {
//   (hours.tuesday.start && hours.tuesday.finish) ? (
//     <View style={styles.row}>
//       <View style={styles.col}>
//         <Text>
//           Tuesday
//         </Text>
//       </View>
//       <View style={styles.col}>
//         <Text>
//           {this.formatHours(hours.tuesday.start)}
//           -
//           {this.formatHours(hours.tuesday.finish)}
//         </Text>
//       </View>
//     </View>
//   ) : null
// }
// {
//   (hours.wednesday.start && hours.wednesday.finish) ? (
//     <View style={styles.row}>
//       <View style={styles.col}>
//         <Text>
//           Wednesday
//         </Text>
//       </View>
//       <View style={styles.col}>
//         <Text>
//           {this.formatHours(hours.wednesday.start)}
//           -
//           {this.formatHours(hours.wednesday.finish)}
//         </Text>
//       </View>
//     </View>
//   ) : null
// }
// {
//   (hours.thursday.start && hours.thursday.finish) ? (
//     <View style={styles.row}>
//       <View style={styles.col}>
//         <Text>
//           Thursday
//         </Text>
//       </View>
//       <View style={styles.col}>
//         <Text>
//           {this.formatHours(hours.thursday.start)}
//           -
//           {this.formatHours(hours.thursday.finish)}
//         </Text>
//       </View>
//     </View>
//   ) : null
// }
// {
//   (hours.friday.start && hours.friday.finish) ? (
//     <View style={styles.row}>
//       <View style={styles.col}>
//         <Text>
//           Friday
//         </Text>
//       </View>
//       <View style={styles.col}>
//         <Text>
//           {this.formatHours(hours.friday.start)}
//           -
//           {this.formatHours(hours.friday.finish)}
//         </Text>
//       </View>
//     </View>
//   ) : null
// }
// {
//   (hours.saturday.start && hours.saturday.finish) ? (
//     <View style={styles.row}>
//       <View style={styles.col}>
//         Saturday
//       </View>
//       <View style={styles.col}>
//         <Text>
//           {this.formatHours(hours.saturday.start)}
//           -
//           {this.formatHours(hours.saturday.finish)}
//         </Text>
//       </View>
//     </View>
//   ) : null
// }
// {
//   (hours.sunday.start && hours.sunday.finish) ? (
//     <View style={styles.row}>
//       <View style={styles.col}>
//         Sunday
//       </View>
//       <View style={styles.col}>
//         <Text>
//           {this.formatHours(hours.sunday.start)}
//           -
//           {this.formatHours(hours.sunday.finish)}
//         </Text>
//       </View>
//     </View>
//   ) : null
// }

Hours.propTypes = {
  hours: PropTypes.object.isRequired,
};

export default Hours;
