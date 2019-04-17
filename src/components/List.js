import React from 'react';
import Card from './Card';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
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
        <Card
          key={i}
          handleChange={props.handleChange}
          data={props.data[i]}
          dispatch={props.dispatch}
          classes={props.classes}
        />
      )}
    </GridList>
  </div>
)

List.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);
