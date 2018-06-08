import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import axios from 'axios';
import { categoryPath } from '../../api';
import appStyles from '../../styles/app';

// Import components
import Loading from '../shared/Loading';
import Error from '../shared/Error';
import Previews from '../previews/Previews';

class ListingsCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { category } = this.props.navigation.state.params;
    axios.get(categoryPath(category))
      .then((res) => {
        if (res.data.success) {
          this.setState({
            loading: false,
            listings: res.data.data,
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
    if (this.state.loading) return (<Loading />);
    return (
      <ScrollView>
        <View style={appStyles.container}>
          <Error error={this.state.error} />
          <Previews
            content={this.state.listings}
            navigation={this.props.navigation}
            contentType="listing"
          />
        </View>
      </ScrollView>
    );
  }
}

ListingsCategory.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ListingsCategory;
