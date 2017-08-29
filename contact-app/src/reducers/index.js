import { fromJS } from 'immutable';
import * as constants from '../constants';

const initialState = fromJS({
  contacts: [],
  fetching: false,
  error: {}
});

function contactsReducer(state = initialState, action) {
 // alert(action.type)
  switch (action.type) {
    case constants.GET_ALL_CONTACTS:
      return state
            .set('fetching', true);
    case constants.GET_ALL_CONTACTS_FAILS:
      //alert("Fails")
      return state
            .set('contacts', [])
            .set('error', {})
            .set('fetching', false);
    case constants.GET_ALL_CONTACTS_SUCCESS:
      //alert("Success")
      return state
            .set('contacts', action.data)
            .set('error', {})
            .set('fetching', false);
    case constants.DELETE_CONTACT:
      return state
            .set('contacts', (state.get('contacts').filter((contact) => { return (contact.name !== action.data)  })))
    case constants.DELETE_ALL_CONTACTS:
      return state
            .set('contacts', []);

/*    case constants.GET_RANDOM_CONTACT:
      return state
            .set('fetching', true)
    case constants.GET_RANDOM_CONTACT_SUCCESS:
      return state
            .set('fetching', false)
    case constants.GET_RANDOM_CONTACT_FAILS:
      return state
            .set('fetching', false)
*/
    default:
      return state;
  }
}

export default contactsReducer;
