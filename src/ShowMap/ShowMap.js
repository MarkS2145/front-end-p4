import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'
import { GoogleMap, LoadScript, BicyclingLayer, DrawingManager, Marker, InfoWindow, InfoBox, Polyline } from '@react-google-maps/api';
import './ShowMap.css';

require('dotenv').config()


const ROAD = "roadmap";
const SAT = 'satellite';
const TER = 'terrain'
const HYB = 'hybrid'

const TEST_LAT = 34.12355;
const TEST_LON = -118.54321;
const KEY = process.env.REACT_APP_API_KEY


const containerStyle = {
  width: '600px',
  height: '600px'
};

const Torrance = {
  lat: 33.8358,
  lng: -118.3406
};

const center2 = {
  lat: TEST_LAT,
  lng: TEST_LON
};

let VEHICLE_1 = {
  lat: 33.8000,
  lng: -118.3000
};

let VEHICLE_2 = {
  lat: 33.8358,
  lng: -118.3406
};

const divStyle = {
  background: `white`,
  border: `1px solid #ccc`,
  padding: 15,
}

const options = { closeBoxURL: '', enableEventPropagation: true };


const path1 = [
  { lat: 33.8000, lng: -118.3000 },
  { lat: 33.9000, lng: -118.2500 },
  { lat: 33.9000, lng: -118.2000 },
  { lat: 33.9000, lng: -118.1500 }
];

const path2 = [
  { lat: 33.8358, lng: -118.3406 },
  { lat: 33.9358, lng: -118.3506 },
  { lat: 34.0358, lng: -118.3606 },
  { lat: 34.1358, lng: -118.3706 }
];

const pathOptions1 = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: path1,
  zIndex: 1
};

const pathOptions2 = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: path2,
  zIndex: 1
};


class ShowMap extends Component {


  onLoad = marker => {
    console.log('marker: ', marker)
  }

  onLoad = infoWindow => {
    console.log('infoWindow: ', infoWindow)
  }


  updateVehicleOne = () => {
    console.log('Vehicle One Position updated')
    console.log("hello", this.props)
    
    console.log(VEHICLE_1)

    console.log("before", path1)
    let new_lat = 0;
    let new_lon = 0;
    
    new_lat = path1[path1.length-1].lat + 0.002
    new_lon = path1[path1.length-1].lon + 0.002
    console.log(new_lat, new_lon)
    path1.push({ lat: new_lat, lng: new_lon })

    console.log(path1)
    // path1.pop()
    // path1.push(path1)

    // Polyline.path.push(path1);

    return (
      <Polyline
          onLoad={this.onLoad}
          path={path1}
          options={pathOptions1}
          />
       )
  }

  updateVehicleTwo = (e) => {

    console.log('Vehicle Two Position updated')
    let temp = this.onload
    // console.log(marker.internalPosition.label)
    console.log(VEHICLE_2)
    // VEHICLE_1.lat += 0.2
    console.log(path2)
    path2.pop()

  }

  flightPath = new Polyline({
    path: path1,
    options: pathOptions1
  });

  myInt;

  myGary(){
    console.log('tic, toc');
  }

  render() {
    
    // Only call the timer once the first map has been shown
    if (this.myInt === undefined){
      this.myInt = 1;
      setInterval(this.myGary, 3000);
    }

    return (
      <LoadScript
        googleMapsApiKey={KEY}
      >
        <GoogleMap
          id="marker-example"
          mapContainerStyle={containerStyle}
          center={center2}
          mapTypeId={TER}
          zoom={10}
          heading={90}
        >
          {/* <InfoWindow
            onLoad={this.onLoad}
            position={center2}
          >
            <div style={divStyle}>
              <h1>Info goes here....</h1>
            </div>
          </InfoWindow> */}

          <InfoBox
            onLoad={this.onLoad}
            options={options}
            position={center2}
          >
            <div style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 12 }}>
              <div style={{ fontSize: 16, fontColor: `#08233B` }}>
                Hello, World!
              </div>
            </div>
          </InfoBox>

          <Polyline
            onLoad={this.onLoad}
            path={path1}
            options={pathOptions1}
          />

          {/* This didn't work, so I think this show page will get updated periodically by the higher level app
          with updated props that should then get displayed.  Some sort of render, I suspect.
           */}
          <div>
            {this.updateVehicleOne}
          </div>

          <Polyline className='polyPath1'
            onLoad={this.onLoad}
            path={path2}
            options={pathOptions1}
            // setPath={path2}
          />

          <Marker
            onLoad={this.onLoad}
            position={VEHICLE_1}
            label={"1"}
          />
          <Marker
            onLoad={this.onLoad}
            position={path2[path2.length-1]}
            label={"2"}
          />
          { /* Child components, such as markers, info windows, etc. */}
          <></>
          {/* <BicyclingLayer onLoad={onBicyclingLayerLoad} /> */}
        </GoogleMap >
        <div>
          <Button id='1' onClick={this.updateVehicleOne} variant="outline-primary">Vehicle 1 Update</Button>{' '}
          <Button id='2' onClick={this.updateVehicleTwo} variant="outline-secondary">Vehicle 2 Update</Button>{' '}
        </div>
      </LoadScript >
    )
  }
}

export default ShowMap