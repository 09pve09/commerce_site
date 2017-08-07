import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAd} from '../actions';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import GoogleMap from './google_map';

class AdsShow extends Component{
  componentDidMount(){
    const { advertisement_id } = this.props.match.params;
    this.props.fetchAd(advertisement_id);
  }

  renderCategoryData(categories){
    return _.map(categories, category => {
      return(
        <li key={category.display_str}> {category.display_str} </li>
      );
    });
  }


  renderInfo(ad){
      return(
          <div className="col-sm-8 list-item-wrapper">
            <div className="col-sm-12">
              <div className="list-item-section">
                <h2>{ad.title}</h2>
                <h3>Descriprion: {ad.description}</h3>
                <h4>Price: {ad.price_str}</h4>

                <ul className="category-list">
                  {this.renderCategoryData(ad.category_data)}
                </ul>
                <h6>By {ad.seller.first_name} {ad.seller.last_name}</h6>
              </div>
            </div>
            <div className="col-sm-12 map-holder">
              <GoogleMap className='map' lon={ad.longitude} lat={ad.latitude} />
            </div>
          </div>
      );
    };
    renderImagesIntoCarousel(images){
      return _.map(images, img => {
        let curr_img = img.sizes[2];
        return(
          <img key={img.media_id} src={curr_img.url} className="img-responsive img-carousel" alt='item_img'/>
        );
      })
    }
    renderCarousel(images){
        return(
          <div className='col-sm-4 list-item-wrapper'>
            <React_Bootstrap_Carousel
              animation={true}
              onSelect={this.onSelect}
              className="carousel-fade"
            >
              {this.renderImagesIntoCarousel(images)}
            </React_Bootstrap_Carousel>
          </div>
        );
    }


  render(){
    const { ad } = this.props;

    if (!ad){
      return <div>Loading...</div>
    }


    return (
      <div className='container-fluid text-center'>
        <h1>Advertisement Info</h1><br/>
        <div className="row">
          {this.renderInfo(ad)}
          {this.renderCarousel(ad.media)}
        </div>
      </div>
    );
  };
}

function mapStateToProps({ ads }, ownProps){
  return { ad: ads[ownProps.match.params.advertisement_id] }
}

export default connect(mapStateToProps, { fetchAd })(AdsShow);
