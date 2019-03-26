import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SmallCard from './containers/SmallCard';
import BigCard from './containers/BigCard';
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super();
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
  const items = this.props.data.map((_, i) => 
    <SmallCard 
      key={i + 1} 
      artist={this.props.data[i]} 
      handleChange={this.handleChange} 
    />
  )
    return (
      <div className="App">
        <div className="actors-list">{items}</div>
        <BigCard selection={this.props.selection} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  selection: state.selection
})

export default connect(mapStateToProps)(App);
