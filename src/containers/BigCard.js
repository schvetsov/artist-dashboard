import React, { Component } from 'react';
import '../App.css';

class BigCard extends Component {

  //This is the large detail view for the selected artist

  //This method calculates the age of the artist
  getAge() {
    let today = new Date().getFullYear();
    console.log(today)
    let birthdate = this.props.selection.dateOfBirth || '2000';
    let year = birthdate.slice(-5);
    console.log(year)
    let age = today - year;
    console.log(age)
    return age;
  }

  render() {
    return (
      <div className="bigCard" onClick={this.handleChange}>
        {this.props.selection.firstName ?
            <div>
                <div className="bigCard-name">{this.props.selection.firstName} {this.props.selection.lastName}</div>
                <div><img className="image-big" src={this.props.selection.imageURL} alt="" /></div>
                <div className="profession">{this.props.selection.art}</div>
                <div>{this.props.selection.dateOfBirth} (age {this.getAge()})</div>
                <div>Born in {this.props.selection.placeOfBirth}</div>
            </div>
        : 
            <div>Server error, please try again or refresh the page.</div>
        }
      </div>
    );
  }
}

export default BigCard;
