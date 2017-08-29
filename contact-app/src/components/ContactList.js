import React, { Component } from 'react';
import ContactDetails from  './ContactDetails';
import * as utils from '../utils';
class ContactList extends Component {
  constructor(props) {
    super(props);
    let cl = this.props.contactList;
    this.state={
       person: cl[0],
       contactList: cl,
       filterText: ''  
    }    
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  componentWillReceiveProps(nextProps){
    var filterText = this.state.filterText;
    let cl = nextProps.contactList;
    this.setState({
      person: cl[0],
      contactList: cl,
      filterText: filterText 
    })
  }
  handleClick(contact) {
    this.setState({person: contact});
  }
  handleSearchTextChange(event){
    this.setState({filterText: event.currentTarget.value});
  }
  renderContactList(){
    return (this.state.contactList.map(function(contact){
      var imageStyles = {
        backgroundImage: 'url(' + contact.image + ')'
      };
      var contactStyles = {
        backgroundColor: contact === this.state.person ? '#0011ff' : '',
        color: contact === this.state.person ? '#ffffff' : ''
      }

      if (contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) {
        return;
      }
      return (
        <div className="contact" onClick={this.handleClick.bind(this, contact)} style={contactStyles}>
          <span className="image" style={imageStyles}></span>
          <span className="name">{utils.toTitleCase(contact.name)}</span>
        </div>
      );
    }, this)) 
  }

  render() {
    return (
      <div className="app">
        <div className="left">
          <input
            type="text"
            placeholder="Search Contact..."
            value={this.state.filterText}
            onChange={this.handleSearchTextChange}
          /> 
          <div className="contacts-container">
            {this.renderContactList()}
          </div>
        </div>
        <div className="right">
          <ContactDetails handleDeleteClick={this.props.handleDeleteClick} person={this.state.person || {}} />
        </div>
      </div>
    );
  }
}
export default ContactList;