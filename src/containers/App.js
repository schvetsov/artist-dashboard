import React, { Component } from 'react';
import SmallCard from '../components/SmallCard';
import BigCard from '../components/BigCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchList, handleChange } from '../actions/actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.fetchList = fetchList;
    this.handleChange = handleChange;
  }

  componentDidMount() {
    this.fetchList(this.props);
  }

  render() {

    return (
      <div style={{display:'flex'}}>
        <SmallCard 
          data={this.props.data}
          handleChange={this.handleChange}
          props={this.props}
        />
        <BigCard 
          selection={this.props.selection} 
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(App);
