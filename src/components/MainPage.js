import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';
import Loader from './Loader';
import Scroll from './Scroll';
import Header from './Header';
import ErrorBoundary from './ErrorBoundary';


class MainPage extends Component {

  componentDidMount() {
    const { onFetchHomes } = this.props;
    onFetchHomes();
  }
  filterProperties = () => {
    return this.props.property.filter(home => {
      return home['house_type'].toLowerCase().includes(this.props.searchField.toLowerCase());
      // if property type (lower case) == searchField (lowercase)
      // then filter it
    });
  }
  render() {
    const { onSearchChange, isPending } = this.props;

    // const filterPropertyType = property.filter(home => {
    //   return home['house_type'].toLowerCase().includes(searchField.toLowerCase());
    //   // if property type (lower case) == searchField (lowercase)
    //   // then filter it
    // });

    // console.log(filterPropertyType);

    // if property empty show loader else display cards
    // console.info('---------------- RENDER ----------------');
    return (isPending) ?
      <Loader id='loader' /> :
      (
        <React.Fragment>
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList property={this.filterProperties()} />
            </ErrorBoundary>
          </Scroll>
        </React.Fragment>
      );
  }
}


export default MainPage;
