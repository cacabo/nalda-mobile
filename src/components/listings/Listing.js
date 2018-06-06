import React, { Component } from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import axios from 'axios';
import PropTypes from 'prop-types';
import { listingPath } from '../../api';
import appStyles from '../../styles/app';
import styles from '../../styles/listings/listing';
import textStyles from '../../styles/shared/text';

// Import components
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Author from '../shared/Author';
import Categories from './Categories';
import Stars from './Stars';
import Hours from './Hours';
import ImageCarousel from './ImageCarousel';
import Location from './Location';
import Amenities from './Amenities';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.navigation.state.params;
    axios.get(listingPath(id))
      .then((res) => {
        if (res.data.success) {
          this.setState({
            loading: false,
            listing: res.data.data,
            author: res.data.author,
          });
        } else {
          this.setState({
            loading: false,
            error: res.data.error,
          });
        }
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: err.message,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (<Loading />);
    }

    return (
      <ScrollView>
        <Image
          style={styles.image}
          source={{ uri: this.state.listing.image }}
        />
        <View style={appStyles.container}>
          <Error error={this.state.error} />
          <Text style={textStyles.title}>
            {this.state.listing.title}
          </Text>
          <Author
            author={this.state.author}
            createdAt={this.state.listing.createdAt}
            updatedAt={this.state.listing.updatedAt}
          />
          <Categories categories={this.state.listing.categories} />
          <Text style={styles.description}>
            {this.state.listing.description}
          </Text>
          <View style={styles.naldaFavorite}>
            <Text style={textStyles.subtitle}>
              {"Nalda's favorite:"}
            </Text>
            <Text style={textStyles.body}>
              {this.state.listing.naldaFavorite}
            </Text>
          </View>
        </View>
        <ImageCarousel images={this.state.listing.images} />
        <View style={appStyles.container}>
          <View style={styles.section}>
            <Text style={textStyles.subtitle}>
              {'Price:'}
            </Text>
            <Text style={textStyles.body}>
              {this.state.listing.price}
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={textStyles.subtitle}>
              {"Nalda's rating:"}
            </Text>
            <Stars rating={this.state.listing.rating} />
          </View>

          <Amenities amenities={this.state.listing.amenities} />
          <Hours hours={this.state.listing.hours} />
          <Location location={this.state.listing.location} />
        </View>
      </ScrollView>
    );
  }
}

Listing.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Listing;
