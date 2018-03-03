import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPhotos} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    if(this.state.term.length > 0){
      this.props.fetchPhotos(this.state.term);
      this.setState({term: ''}); //this clears the search bar
    }
  }

  componentDidMount(){
    this.props.fetchPhotos("lakes");
  }

  render(){
    return(
    <form onSubmit={this.onFormSubmit} className="submit-form">
      <input
        className="login-input"
        placeholder="Enter tag here"
        value={this.state.term}
        onChange={this.onInputChange}
        />
      <span>
        <button type="submit" className="submit-button">Submit</button>
      </span>
    </form>
  );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchPhotos}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
