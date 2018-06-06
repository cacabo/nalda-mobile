import React, { Component } from 'react';
import { Image, Dimensions, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import styles from '../../styles/home/banner';

class Banner extends Component {
  constructor(props) {
    super(props);
    const { width } = Dimensions.get('window');
    this.state = {
      width,
    };

    // Bind 'this' to helper methods
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    const {
      contentType,
      contentId,
      contentImage,
    } = item;

    // Determine which view should be rendered
    const view = `${contentType.charAt(0).toUpperCase()}${contentType.substring(1)}`;

    return (
      <TouchableHighlight onPress={() => this.props.navigation.navigate(view, { id: contentId })}>
        <Image
          source={{ uri: contentImage }}
          resizeMode="cover"
          style={{ width: this.state.width * 0.8, height: this.state.width * 0.6 }}
        />
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.props.banner}
          renderItem={this.renderItem}
          sliderWidth={this.state.width}
          itemWidth={this.state.width * 0.8}
        />
      </View>
    );
  }
}

Banner.propTypes = {
  navigation: PropTypes.object.isRequired,
  banner: PropTypes.array.isRequired,
};

export default Banner;
