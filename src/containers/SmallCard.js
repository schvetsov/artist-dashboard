import React, { Component } from 'react';
import '../App.css';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    width: 50
  },
});

class SmallCard extends Component {

  //This is the clickable container for each item of the list

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <GridListTile key={this.props.artist.artistID} onClick={() => this.props.handleChange(this.props.artist.artistID)}>
        <img src={this.props.artist.imageURL} alt={""} />
        <GridListTileBar
          title={this.props.artist.firstName + " " + this.props.artist.lastName} 
          subtitle={this.props.artist.art}
          actionIcon={
            <IconButton className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
      </div>
      // <div className="smallCard" onClick={() => this.props.handleChange(this.props.artist.artistID)}>
      //   <img className="image" src={this.props.artist.imageURL} alt="text" />
      //   <div className="smallCard-contents">
      //       <div className="smallCard-name">{this.props.artist.firstName} {this.props.artist.lastName}</div>
      //       <div className="smallCard-art">{this.props.artist.art}</div>
      //   </div>
      // </div>
    );
  }
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallCard);
