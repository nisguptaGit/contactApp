import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';
import {connect} from 'react-redux';
import ContactList from './components/ContactList';
import * as constants from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: props.contacts
    }
    this.props.dispatch(actions.getContactsList());
    this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }
  handleDeleteClick(event){
    this.props.dispatch( event.target.value === constants.DELETE_ALL_CONTACTS_TEXT ? actions.deleteAllContacts() : actions.deleteContact(event.target.name));
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      contacts: nextProps.contacts
    })
  }
  renderContactListView(){
    return <ContactList handleDeleteClick={this.handleDeleteClick} contactList={this.state.contacts} />
  }
  renderView(){
    return this.props.fetching ? <h1> Loading </h1> : this.props.contacts.length===0 ? <h1> No Contacts
          <input
            type="submit"
            value={constants.RELOAD_CONTACTS_TEXT}
            onClick={()=>{this.props.dispatch(actions.getContactsList())}}
          /> </h1> : this.renderContactListView()
  }
  render() {
    return (
      <div>
        {this.renderView()}
      </div>
    );
  }
 }

function mapState(state) {
 // alert(JSON.stringify(state));
  return {
    "contacts": state.reducer.get("contacts"),
    "fetching": state.reducer.get("fetching"),
//Todo
//    "error": state.reducer.get("error"),
  };
}




export default connect(mapState)(App);