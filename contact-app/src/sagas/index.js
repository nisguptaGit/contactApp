import {  call, put, takeLatest/*,  select, take, takeEvery*/ } from 'redux-saga/effects';
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

export function* doDeleteContact(action) {
//Do delete operation in saga
  if(action.data){
    if(action.data.value === constants.DELETE_ALL_CONTACTS_TEXT){
      yield put(actions.deleteAllContacts())
    } else {
      yield put(actions.deleteContact(action.data.name))
    }
  }
}

export function* watchFetchContactsListRequest() {
  yield takeLatest(constants.GET_ALL_CONTACTS, callFetchContactsList);
}
export function* watchDeleteContactRequest() {
  yield takeLatest(constants.DELETE_CONTACT_OPERATION, doDeleteContact);
}

export default [
  watchFetchContactsListRequest,
  watchDeleteContactRequest
];
