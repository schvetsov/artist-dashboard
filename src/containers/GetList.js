import React, { Component } from 'react';
import List from '../components/List';
import Detail from '../components/Detail';
import { connect } from 'react-redux';
import { updateList, updateProfile } from '../actions';
import axios from 'axios';

export class GetList extends Component {

  constructor(props) {
    super(props);
    this.fetchList = this.fetchList.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchList(this.props.dispatch);
  }

  fetchList(dispatch) {
    return axios.get('https://fb-assessment.glitch.me/artists')
      .then(res => dispatch(updateList(res.data)))
      .catch(err => console.log(err))
  }
  handleChange(value, dispatch) {
    let route = 'https://fb-assessment.glitch.me/artists/' + value;
    return axios.get(route)
      .then(res => dispatch(updateProfile(res.data)))
      .catch(err => console.log(err))
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
