import React, { Component } from 'react';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';
import { connect } from 'react-redux';
import { fetchList, handleChange } from '../actions/actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchList = fetchList;
    this.handleChange = handleChange;
  }

  componentDidMount() {
    this.fetchList(this.props.dispatch);
  }

  render() {

    return (
      <div style={{display:'flex'}}>
        <SmallCard 
          dispatch={this.props.dispatch}
          data={this.props.data}
          handleChange={this.handleChange}
        />
        <BigCard 
          selection={this.props.selection} 
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(App);
