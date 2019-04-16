import React, { Component } from 'react';
import './App.css';
import BigCard from './containers/BigCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { fetchList, handleChange } from './actions';

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

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchList = fetchList;
    this.handleChange = handleChange;
  }

  //GET request retrieves list of actors immediately after component mounts
  componentDidMount() {
    this.fetchList(this.props);
  }

  render() {

    const { classes } = this.props;
    const items = this.props.data.map((_,i) => (
      <GridListTile key={i} onClick={() => this.handleChange(this.props.data[i].artistID, this.props)}>
        <img src={this.props.data[i].imageURL} alt={""} />
        <GridListTileBar
          title={this.props.data[i].firstName + " " + this.props.data[i].lastName} 
          subtitle={this.props.data[i].art}
          actionIcon={
            <IconButton className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>
    ))
    return (
      <div style={{display:'flex'}}>
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            </GridListTile>

            {items}
          </GridList>
        </div>
        <div>
          <BigCard selection={this.props.selection} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  selection: state.selection
})

export default withStyles(styles)(connect(mapStateToProps)(App));
