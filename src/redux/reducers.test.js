import {
  CHANGE_SEARCH_FIELD,
  REQUEST_HOMES_PENDING,
  REQUEST_HOMES_SUCCESS,
  REQUEST_HOMES_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initSearchState = {
    searchField: '',
  };

  it('should return the initial value', () => {
    expect(reducers.searchHomes(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle CHANGE_SEARCH_FIELD', () => {
    expect(reducers.searchHomes(initSearchState, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'terraced'
    })).toEqual({
      searchField: 'terraced'
    });
  });
});

describe('property reducer', () => {
  const initialStateProperty = {
    property: [],
    isPending: false,
    error: ''
  }
  it('should return init state', () => {
    expect(reducers.getHomes(undefined, {})).toEqual(initialStateProperty);
  });

  it('should handle REQUEST_HOMES_PENDING', () => {
    expect(reducers.getHomes(initialStateProperty, {
      type: REQUEST_HOMES_PENDING,
    })).toEqual({
      property: [],
      isPending: true,
      error: ''
    });
  });

  it('should handle REQUEST_HOMES_SUCCESS', () => {
    expect(reducers.getHomes(initialStateProperty, {
      type: REQUEST_HOMES_SUCCESS,
      payload: [{ id: 1, house_address: '70 blvd Rd' }]
    })).toEqual({
      property: [{ id: 1, house_address: '70 blvd Rd' }],
      isPending: false,
      error: ''
    });
  });

  it('should handle REQUEST_HOMES_FAILED', () => {
    expect(reducers.getHomes(initialStateProperty, {
      type: REQUEST_HOMES_FAILED,
      payload: 'error',
    })).toEqual({
      property: [],
      isPending: false,
      error: 'error'
    });
  });

});