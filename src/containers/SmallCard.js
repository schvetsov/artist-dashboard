import React, { Component } from 'react';
import '../App.css';

class SmallCard extends Component {

  render() {
    return (
      <div className="smallCard" onClick={() => this.props.handleChange(this.props.artist.artistID)}>
        <img className="image" src={this.props.artist.imageURL} />
        <div className="smallCard-contents">
            <div className="smallCard-name">{this.props.artist.firstName} {this.props.artist.lastName}</div>
            <div className="smallCard-art">{this.props.artist.art}</div>
        </div>
      </div>
    );
  }
}

export default SmallCard;
