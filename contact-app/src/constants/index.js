export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const GET_ALL_CONTACTS_FAILS = 'GET_ALL_CONTACTS_FAILS';
export const GET_ALL_CONTACTS_SUCCESS = 'GET_ALL_CONTACTS_SUCCESS';

export const GET_RANDOM_CONTACT = 'GET_RANDOM_CONTACT';
export const GET_RANDOM_CONTACT_FAILS = 'GET_RANDOM_CONTACT_FAILS';
export const GET_RANDOM_CONTACT_SUCCESS = 'GET_RANDOM_CONTACT_SUCCESS';

export const DELETE_CONTACT_OPERATION = 'DELETE_CONTACT_OPERATION';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const DELETE_ALL_CONTACTS = 'DELETE_ALL_CONTACTS';

export const ASCENDING_ORDER = 'Ascending';
export const DESCENDING_ORDER = 'Descending';
export const NONE = 'None';

export const getSortingOptions =  function () {
	return [NONE, ASCENDING_ORDER, DESCENDING_ORDER]
}

export const DELETE_ALL_CONTACTS_TEXT = 'Delete ALL Contacts';
export const DELETE_CONTACT_TEXT = 'Delete Contact';
export const RELOAD_CONTACTS_TEXT = 'Reload Contacts';
export const SEARCH_CONTACT_TEXT = 'Search Contact...';

