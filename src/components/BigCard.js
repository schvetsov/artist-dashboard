import React, { Component } from 'react';
import { getAge } from '../actions/getAge';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    height: '100vh',
    marginLeft: 10,
    marginRight: 10
  },
  media: {
    height: '70%',
    width: '65vw'
  },
};

class BigCard extends Component {
  render() {
    const { classes } = this.props;
    const item = this.props.selection;
    return (
      <div>
      {item.firstName ? 
        <Card className={classes.card}>
          <CardHeader
            title={item.firstName + " " + item.lastName}
            subheader={item.art}
          />
          <CardMedia
            className={classes.media}
            image={item.imageURL}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
              {item.dateOfBirth} (Age: {item.firstName && getAge(this.props)})
            </Typography>
            <Typography component="p">
              Born in {item.placeOfBirth}
            </Typography>
          </CardContent>
      </Card>
      :
        <div></div>
      }
      </div>
    );
  }
}

BigCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BigCard);
