import React, { Component } from 'react';
import ContactDetails from  './ContactDetails';
import * as utils from '../utils';
import * as constants from '../constants';
import PropTypes from 'prop-types'

class ContactList extends Component {
  constructor(props) {
    super(props);
    let cl = this.props.contactList;
    this.state={
       person: cl[0],
      // contactList: cl,
       filterText: '',
       sortType: constants.NONE
    }    
    this.handleSortOptionsChange = this.handleSortOptionsChange.bind(this);
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
  }
  componentWillReceiveProps(nextProps){
    var filterText = this.state.filterText;
    var sortType = this.state.filterText;
    let cl = nextProps.contactList;
    this.setState({
      person: cl[0],
     // contactList: cl,
      filterText: filterText,
      sortType: sortType
    })
  }
  handleClick(contact) {
    this.setState({person: contact});
  } 
  handleSearchTextChange(event){
    this.setState({filterText: event.currentTarget.value});
  }
  handleSortOptionsChange(event){
    this.setState({sortType: event.currentTarget.value});
  }
  renderContactList(){
    //let contactList = this.state.contactList;
    let contactList = this.props.contactList;
    this.state.sortType === constants.NONE || (contactList = contactList.sort(this.state.sortType === constants.ASCENDING_ORDER ? utils.SortByNameAscending : utils.SortByNameDescending));
    return (contactList.map(function(contact, index){
      var imageStyles = {
        backgroundImage: 'url(' + contact.image + ')'
      };

      if (contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) {
        return null;
      }
      let classNames =  (contact === this.state.person ? 'selected ' : '') + "contact "
      return (
        <div className={classNames} key={index} onClick={this.handleClick.bind(this, contact)} >
          <span className="image" style={imageStyles}></span>
          <span className="name">{utils.toTitleCase(contact.name)}</span>
        </div>
      );
    }, this)) 
  }

  render() {
    var renderSortOptions = constants.getSortingOptions().map((option, index) => <option key={index} value={option}>{option}</option>) 
    return (
      <div className="app">
        <div className="left">
         
          <select onChange={this.handleSortOptionsChange} value={this.state.sortType}>
            {renderSortOptions}
          </select>

          <input
            type="text"
            placeholder={constants.SEARCH_CONTACT_TEXT}
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

ContactList.propTypes = {
  contactList: PropTypes.array,
  handleDeleteClick: PropTypes.func
}
export default ContactList;
