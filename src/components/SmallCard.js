import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
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
    height: '100vh',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

class SmallCard extends Component {

  render() {
    const { classes } = this.props;
    const data = this.props.data;
    const items = this.props.data.map((_,i) => (
      <GridListTile 
        key={i} 
        onClick={() => 
          this.props.handleChange(data[i].artistID, this.props.props)}
      >
        <img 
          src={data[i].imageURL} 
          alt={""} 
        />
        <GridListTileBar
          title={data[i].firstName + " " + data[i].lastName} 
          subtitle={data[i].art}
          actionIcon={
            <IconButton className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    ))
    return (
        <div className={classes.root}>
          <GridList 
            cellHeight={160} 
            className={classes.gridList}
          >
            <GridListTile 
              key="Subheader" 
              cols={2} 
              style={{ height: 'auto' }}
            >
            </GridListTile>
            {items}
          </GridList>
        </div>
    );
  }
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SmallCard);
