import React, { Component } from 'react';
import * as apis from '../apis';
import * as utils from '../utils';

class ContactDetails extends Component {
  renderInfo (person) {
    let keys = Object.keys(person);
    keys = keys.filter((key) => { return (key !== 'name' && key !== 'image')  })
      return (keys.map((key, index) => {
        return <tr><td><strong>{key.toUpperCase()}: </strong> </td><td>{person[key]}</td></tr>
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
        <div>
         <input
            type="submit"
            value="Delete Contact"
            name={this.props.person.name}
            onClick={this.props.handleDeleteClick}
          />
          <input
            type="submit"
            value="Delete ALL Contacts"
            onClick={this.props.handleDeleteClick}
          />
          </div>

      </div>
    );
  }
};

export default ContactDetails;
