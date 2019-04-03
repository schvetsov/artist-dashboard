import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SmallCard from './containers/SmallCard';
import BigCard from './containers/BigCard';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // width: 400
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
    this.handleChange = this.handleChange.bind(this)
  }
 
  //Dispatch the list of actors to Redux
  updateList = (value) => {
    this.props.dispatch({ type: "LIST", value: value })
  };

  //Dispatch the artist info to Redux
  updateProfile = (value) => {
    this.props.dispatch({ type: "PROFILE", value: value })
  };

  //GET request retrieves list of actors immediately after
  //component mounts
  componentDidMount() {
    axios.get('https://fb-assessment.glitch.me/artists')
    .then(res => {
      //Response is sent to be dispatched to Redux
      this.updateList(res.data)
    })
    .catch(err => console.log(err))
  }

  //This method is passed down to SmallCard component as a prop, and 
  //called when the user clicks on an actor to get the artist info
  handleChange(value) {
    let route = 'https://fb-assessment.glitch.me/artists/' + value;
    axios.get(route)
    .then(res => {
      //Response is sent to be dispatched to Redux
      this.updateProfile(res.data)
    })
    .catch(err => console.log(err))
  }

  render() {
  //List of artists is mapped to the SmallCard component
  // const items = this.props.data.map((_, i) => 
  //   <SmallCard 
  //     key={i + 1} 
  //     artist={this.props.data[i]} 
  //     handleChange={this.handleChange} 
  //   />
  // )
    const { classes } = this.props;
    // const items = this.props.data.map((_,i) => (
    //   <GridListTile key={i}>
    //     <img src={this.props.data[i].imageURL} alt={""} />
    //     <GridListTileBar
    //       title={this.props.data[i].firstName}
    //       subtitle={<span>by: {this.props.data[i].art}</span>}
    //       actionIcon={
    //         <IconButton className={styles.icon}>
    //           <InfoIcon />
    //         </IconButton>
    //       }
    //     />
    //   </GridListTile>
    // ))
    return (
      <div style={{display:'flex'}}>
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Artists</ListSubheader>
            </GridListTile>
            {this.props.data.map((_,i) => (
              <GridListTile key={i} onClick={() => this.handleChange(this.props.data[i].artistID)}>
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
            ))}
          </GridList>
        </div>
        <div>
          {/* {this.props.selection && <BigCard selection={this.props.selection} />} */}
          <BigCard selection={this.props.selection} />
        </div>
      </div>
      // <div className="App">
      //   <Button variant="contained" color="primary">Hello world</Button>
      //   <div className="actors-list">{items}</div>
      //   <BigCard selection={this.props.selection} />
      // </div>
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
