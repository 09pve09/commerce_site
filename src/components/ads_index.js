import _ from 'lodash';
import React, { Component  } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAds } from '../actions';


class AdsIndex extends Component{
  componentDidMount(){
    this.props.fetchAds();
  }



  renderImages(ad){
    return _.map(ad.media, media_obj => {
      let temp = media_obj.sizes[4];
      let key_for_small_img = media_obj.media_id+'-small';
      return(
        <li>
          <img key={key_for_small_img} src={temp.url} className="img-responsive image-small" alt='small_img'/>
          <span>
            <img key={media_obj.media_id} src={temp.url} className="image-big" alt='big_img'/>
            <br />
          </span>
        </li>
      );
    });
  }

  renderAds(){
    return _.map(this.props.ads, ad => {
      return(
          <div className="col-sm-12 list-item-wrapper">
            <div className="list-item-section">
              <h2>{ad.title}</h2>
              <h6>By {ad.seller.first_name} {ad.seller.last_name}</h6>
              <h4>Price: {ad.price_str}</h4>
              <ul className="enlarge">
                  {this.renderImages(ad)}
              </ul>
              <Link className='btn btn-primary btn-black' to={`/ads/${ad.advertisement_id}`}>Details</Link>
            </div>
          </div>
      );
    });
  }

  render(){
      return (
        <div className='container-fluid text-center'>
          <h1>List of Items for Sale</h1><br/>
          <div className="row row-list">
            { this.renderAds() }
          </div>
            <div className='container-fluid text-center'>
              <button type="button" onClick={this.props.fetchAds} className="btn btn-lg btn-black-big">Load More</button>
            </div>
        </div>
      );
  }

}


function mapStateToProps(state){
  return {ads: state.ads};
}



export default connect(mapStateToProps, { fetchAds: fetchAds })(AdsIndex);
