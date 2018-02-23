import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions/index';

class Gallery extends Component{
  render(){
    console.log(this.props);
    return(
      <div>Hello there</div>
    );
  }
}

function mapStateToProps({photos}){
  return{
    photos
  };
}

export default connect(mapStateToProps)(Gallery);
