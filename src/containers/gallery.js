import React, {Component} from 'react';
import {connect} from 'react-redux';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  gutter: 3,
  transitionDuration: 0 };

class Gallery extends Component{
  constructor(props){
    super(props);

    this.renderGallery = this.renderGallery.bind(this);
  }
  renderGallery(tag){
     //URL for photo lookup
    // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
    const URL = `https://farm${tag.farm}.staticflickr.com/${tag.server}/${tag.id}_${tag.secret}.jpg`;
    return (
    <li className="single-photo" key={tag.id}>
      <a href={URL} target="_blank">
        <img src={URL} alt={tag.title}></img>
      </a>
    </li>
  );
  }
  render(){
    if(this.props.photos){
      const photos = this.props.photos;
    }
    const photos = this.props.photos;
    return(
      <div className="masonry">
        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          > {photos[0] ? photos[0].map(this.renderGallery): ""}
          </Masonry>
      </div>
    );
  }
}

function mapStateToProps({photos}){
  return{
    photos
  };
}

export default connect(mapStateToProps)(Gallery);
