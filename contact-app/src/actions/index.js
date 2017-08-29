import * as constants from '../constants';
import * as utils from '../utils';
export function getContactsList() {
  return {
    type: constants.GET_ALL_CONTACTS
  };
}

export function getContactsListSuccess(res) {
 // alert(JSON.stringify(res))
  return {
    type: constants.GET_ALL_CONTACTS_SUCCESS,
    data: utils.parseContactsResponse(res.results)
    };
}

export function getContactsListFails(error) {
  //  alert(JSON.stringify(error))

  return {
    type: constants.GET_ALL_CONTACTS_FAILS,
    error: error
    };
}

export function getContact() {
  return {
    type: constants.GET_RANDOM_CONTACT
  };
}

export function getContactSuccess(res) {
  return {
    type: constants.GET_RANDOM_CONTACT_SUCCESS,
    data: res
  };
}

export function getContactFails(error) {
  return {
    type: constants.GET_RANDOM_CONTACT_FAILS,
    error: error
  };
}
export function deleteContact(name) {
  return {
    type: constants.DELETE_CONTACT,
    data: name
  };
}

export function deleteAllContacts() {
  return {
    type: constants.DELETE_ALL_CONTACTS,
  };
}


