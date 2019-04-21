import React from 'react';
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

const List = (props) => (
  <div className={props.classes.root}>
    <GridList 
      cellHeight={160} 
      className={props.classes.gridList}
    >
      <GridListTile 
        key="Subheader" 
        cols={2} 
        style={{ height: 'auto' }}
      >
      </GridListTile>
      {props.data.map((_,i) => 
        <GridListTile 
          key={i}
          onClick={() => 
            props.handleChange(props.data[i].artistID, props.dispatch)
          }
        >
          <img src={props.data[i].imageURL} alt={""} />
          <GridListTileBar
            title={props.data[i].firstName + " " + props.data[i].lastName} 
            subtitle={props.data[i].art}
            actionIcon={
              <IconButton className={props.classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      )}
    </GridList>
  </div>
)

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
