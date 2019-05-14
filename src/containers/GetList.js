import React, { Component } from 'react';
import List from '../components/List';
import Detail from '../components/Detail';
import { connect } from 'react-redux';
import { importList, handleChange } from '../api';

export class GetList extends Component {

  constructor(props) {
    super(props);
    this.importList = importList.bind(this);
    this.handleChange = handleChange.bind(this);
  }

  componentDidMount() {
    this.importList(this.props.dispatch)
  }

  render() {
    console.log(this.props.data)
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
