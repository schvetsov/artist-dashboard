import React, { Component, Fragment } from 'react';
import List from '../components/List';
import BigCard from '../components/BigCard';
import { connect } from 'react-redux';
import { fetchList, handleChange } from '../logic/api';

class GetList extends Component {

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
        <Fragment>
            <List 
                dispatch={this.props.dispatch}
                data={this.props.data}
                handleChange={this.handleChange}
            />
            <BigCard 
                selection={this.props.selection} 
            />
        </Fragment>
    );
  }
}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(GetList);
