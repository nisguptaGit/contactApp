import React, { Component } from 'react';
import * as apis from '../apis';
import * as utils from '../utils';
import PropTypes from 'prop-types'

import * as constants from '../constants';


class ContactDetails extends Component {
  renderInfo (person) {
    let keys = Object.keys(person);
    keys = keys.filter((key, index) => { return (key !== 'name' && key !== 'image')  })
      return (keys.map((key, index) => {
        return <tr key={index}><td><strong>{key.toUpperCase()}: </strong> </td><td>{person[key]}</td></tr>
    }));
  };
    
 render() {
    var styles = {
      backgroundImage: 'url(' + apis.getImageURL(this.props.person.image) + ')'
    }
    return (
      <div className="contact-info">
        <header>
          <div className="image" style={styles}></div>
          <h3>{utils.toTitleCase(this.props.person.name)}</h3>
        </header>
        <section>
          <table><tbody>{this.renderInfo(this.props.person)}</tbody></table>
        </section>
        <div className="button-container">
         <input
            type="submit"
            value={constants.DELETE_CONTACT_TEXT}
            name={this.props.person.name}
            onClick={this.props.handleDeleteClick}
          />
          <input
            type="submit"
            value={constants.DELETE_ALL_CONTACTS_TEXT}
            onClick={this.props.handleDeleteClick}
          />
          </div>

      </div>
    );
  }
};

ContactDetails.propTypes = {
  handleDeleteClick: PropTypes.func,
  person: PropTypes.object
}

export default ContactDetails;
