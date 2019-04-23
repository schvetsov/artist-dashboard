import React, { Component } from 'react';
import List from '../components/List';
import Detail from '../components/Detail';
import { connect } from 'react-redux';
import { fetchList, handleChange } from '../logic/api';

export class GetList extends Component {

  constructor(props) {
    super(props);
    this.fetchList = fetchList;
    this.handleChange = handleChange;
  }

  componentDidMount() {
    this.fetchList(this.props.dispatch);
  }

  render() {
    console.log(Object.keys(this.props.selection).length)
    return (
      <>
        <List
          dispatch={this.props.dispatch}
          data={this.props.data}
          handleChange={this.handleChange}
        />
        <Detail 
          selection={this.props.selection} 
        />
      </>
    );
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(GetList);
