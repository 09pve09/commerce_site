import React, { Component } from 'react';


const google = window.google;

class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 18,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    //this.refs.map
    return <div style={{width: '100%', height:'260px'}} ref="map" />;
  }
}


export default GoogleMap;
