import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './ShowMap.css';

const TER = 'terrain'

const KEY = process.env.REACT_APP_API_KEY


const containerStyle = {
  width: '70vw',
  height: '70vh'
};

const Torrance = {
  lat: 33.8358,
  lng: -118.3406
};


class ShowMap extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.newMarker = [];
  }


  setSelectedMarker = () => {
    let selectedMarker = []
    selectedMarker = this.props.allLocations.find(element =>
      (element.id == this.props.selected_vehicle_id)
    )

    let label = (selectedMarker.id).toString();
    let lat = selectedMarker.lat
    let lng = selectedMarker.lon
    let position = {
      lat: lat,
      lng: lng
    }

    this.newMarker = <Marker position={position} label={label} />
  }



  render() {
    // console.log("Map rendered this many times: ", this.count)
    // console.log("Map props: ", this.props)
    // console.log("Map selected id: ", this.props.selected_vehicle_id)

    if (this.count > 0) {
      this.setSelectedMarker();
    }

    this.count += 1; // Counts how many times map render is called
    return (
      <LoadScript googleMapsApiKey={KEY}>
        <GoogleMap
          id="marker-example"
          mapContainerStyle={containerStyle}
          center={Torrance}
          mapTypeId={TER}
          zoom={9}
          heading={90}
        >
          <div>
            {this.newMarker}
          </div>
        </GoogleMap >
      </LoadScript >
    )
  }
}

export default ShowMap