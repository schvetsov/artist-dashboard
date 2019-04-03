import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    // maxWidth: 345,
    height: '100vh',
    // marginTop: 10,
    // marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  media: {
    height: '70%',
    width: '65vw'
    // height: 400,
    // width: 400
  },
};

class BigCard extends Component {

  //This is the large detailed view for the selected artist

  //This method calculates the age of the artist
  getAge() {
    //Get todays date object
    let todaysDate = new Date();
    //Get birth date
    let birthdate = this.props.selection.dateOfBirth;
    //Split date string into array
    let arr = birthdate.split(" ");
    //Create object out of array for easier handling
    const birth = {
      year: arr[2],
      month: arr[1],
      day: arr[0]
    }
    //Convert the month into number, months are (0-11)
    switch(birth.month) {
      case 'January':
        birth.month = 0;
        break;
      case 'February':
        birth.month = 1;
        break;
      case 'March':
        birth.month = 2;
        break;
      case 'April':
        birth.month = 3;
        break;
      case 'May':
        birth.month = 4;
        break;
      case 'June':
        birth.month = 5;
        break;
      case 'July':
        birth.month = 6;
        break;
      case 'August':
        birth.month = 7;
        break;
      case 'September':
        birth.month = 8;
        break;
      case 'October':
        birth.month = 9;
        break;
      case 'November':
        birth.month = 10;
        break;
      case 'December':
        birth.month = 11;
        break;
      default:
        birth.month = 0;
    }
    //Create birthdate object
    let birthDate = new Date(birth.year, birth.month, birth.day);
    //testing
    console.log("Today's Date: " + todaysDate);
    console.log("Birth Date: " + birthDate);
    //Get number of years between dates
    let age = String(Math.floor((todaysDate - birthDate)/(1000*60*60*24*365)));
    return age;
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
      {this.props.selection.firstName ? 
        <Card className={classes.card}>
          <CardHeader
            title={this.props.selection.firstName + " " + this.props.selection.lastName}
            subheader={this.props.selection.art}
          />
          <CardMedia
            className={classes.media}
            image={this.props.selection.imageURL}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {this.props.selection.dateOfBirth} (Age: {this.props.selection.firstName && this.getAge()})
            </Typography>
            <Typography component="p">
              Born in {this.props.selection.placeOfBirth}
            </Typography>
          </CardContent>
      </Card>
      :
        <div></div>
      }
      </div>
      // <div className="bigCard" onClick={this.handleChange}>
      //   {this.props.selection.firstName ?
      //       <div>
      //           <div className="bigCard-name">{this.props.selection.firstName} {this.props.selection.lastName}</div>
      //           <div><img className="image-big" src={this.props.selection.imageURL} alt="" /></div>
      //           <div className="profession">{this.props.selection.art}</div>
      //           <div>{this.props.selection.dateOfBirth} (age {this.getAge()})</div>
      //           <div>Born in {this.props.selection.placeOfBirth}</div>
      //       </div>
      //   : 
      //       <div>Server error, please try again or refresh the page.</div>
      //   }
      // </div>
    );
  }
}

BigCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BigCard);

// export default BigCard; 
