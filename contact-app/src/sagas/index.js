import { delay } from 'redux-saga';
import { take, call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions';
import * as constants from '../constants';
import * as apis from '../apis';

function fetchDataFromURL(requestURL){
  return fetch(requestURL).then((response)=>response.json());
}

export function* callFetchContactsList() {
  const numberOfContacts = 25;
  const requestURL = apis.getContactsAPI(numberOfContacts);
  try {
    const res = yield call(fetchDataFromURL, requestURL);
    //alert(JSON.stringify(res));
    yield put(actions.getContactsListSuccess(res));
  } catch(error) {
    yield put(actions.getContactsListFails(error));
  }
}

export function* watchFetchContactsListRequest() {
  yield takeLatest(constants.GET_ALL_CONTACTS, callFetchContactsList);
}

export default [
  watchFetchContactsListRequest
];
