import {
  REQUEST_HOMES_PENDING,
  REQUEST_HOMES_SUCCESS,
  REQUEST_HOMES_FAILED,
  CHANGE_SEARCH_FIELD,
} from '../redux/constants';
import apiCall from '../api/api';
import * as actions from './actions';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

// configure mock store
const mockStore = configureStore([thunkMiddleware]);

it('should create an action to search properties', () => {
  const query = 'terraced';
  const expected = {
    type: CHANGE_SEARCH_FIELD,
    payload: query
  }
  expect(actions.setSearchField(query)).toEqual(expected);
});

it('should call API', () => {
  const store = mockStore();
  // dispatch middleware/call to action
  store.dispatch(actions.fetchHomes());
  // store the action that is called e.g. [{type: 'MY_ACTION', payload: 'PAYLOAD'}]
  const action = store.getActions();
  console.log('action from fetchHomes', action);
  const expected = {
    type: REQUEST_HOMES_PENDING,
  }
  // Check if the obj matches expected
  expect(action[0]).toEqual(expected);
});




// mock dispatch outcomes
const succ = () => ({
  type: REQUEST_HOMES_SUCCESS,
  payload: [{
    id: 2,
    name: 'john',
  }]
});

const fail = () => ({ type: REQUEST_HOMES_FAILED, payload: 'error' });
// test for succ or fail
const fetchData = (enableFail = false) => (dispatch) => {
  let url = enableFail ? null : 'https://api.jsonbin.io/b/5e66463103d6af389870144e/3';
  dispatch({type: REQUEST_HOMES_PENDING})
  return apiCall(url)
    .then(() => dispatch(succ()))
    .catch(() => dispatch(fail()));
}


it('should call API but handle success', async () => {
  const store = mockStore();
  const expected = {
    type: REQUEST_HOMES_SUCCESS,
    payload: [{
      id: 2,
      name: 'john',
    }]
  };

  return store.dispatch(fetchData())
    .then(() => {
      const act = store.getActions();
      expect(act[1]).toEqual(expected);
    });
});

it('should call API but handle fail', async () => {
  const store = mockStore();
  const expected = {
    type: REQUEST_HOMES_FAILED,
    payload: 'error'
  };
  return store.dispatch(fetchData(true))
    .then(() => {
      const act = store.getActions();
      expect(act[1]).toEqual(expected);
    });
});