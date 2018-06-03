import React, { Component } from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import styles from '../../styles/listings/imageCarousel';

class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    const { width } = Dimensions.get('window');
    this.state = {
      width,
    };
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {
    return (
      <View>
        <Image
          source={{ uri: item }}
          resizeMode="contain"
          style={{ width: this.state.width * 0.8, height: this.state.width * 0.6 }}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          ref={(c) => { this._carousel = c; }}
          data={this.props.images}
          renderItem={this.renderItem}
          sliderWidth={this.state.width}
          itemWidth={this.state.width * 0.8}
        />
      </View>
    );
  }
}

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageCarousel;
