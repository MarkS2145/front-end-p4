import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
// import  from "bootstrap"
import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ShowMap from '../ShowMap/ShowMap';
import ShowCard from '../ShowCard/ShowCard';
import App_Image from '../app_image.jpeg'

// const CORS_URL = 'https://api.allorigins.win/get?url=';
const BASE_URL = 'http://localhost:3000/vehicle';
const INFO = '/info';
const LOC = '/location';
const ALL = '/all';
const TEST_ID = '?id=';


const axios = require('axios').default;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bob",
      vehicle: [],
      allVehicles: [],
      location: [],
      allLocations: [],
      // allMarkers: []
    }
  }

  getVehicleInfoById = (e) => {
    let id = ""
    id = e.target.id;
    console.log("e.target.id", id)
    let getInfoURL = BASE_URL + INFO + TEST_ID + id;
    let getLocationURL = BASE_URL + LOC + TEST_ID + id;

    console.log("App get VEHICLE INFO URL: ", getInfoURL);
    console.log("App get VEHICLE LOCATION URL: ", getLocationURL);

    axios.get(getInfoURL)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          vehicle: response.data
        })
        // console.log(this.state)
      })
      .catch((error) => {
        console.log("Bob", error);
      })
    axios.get(getLocationURL)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          location: response.data
        })
        console.log(this.state)
      })
      .catch((error) => {
        console.log("Bob", error);
      })

    return (
      <div>
        <ShowCard>New Vehicle{this.state}</ShowCard>)
      </div>
    )
  }

  getAllVehicleInfo = (e) => {
    e.preventDefault();

    console.log("e", e)

    let getInfoURL = BASE_URL + INFO + ALL;

    console.log("App get ALL VEHICLE INFO URL: ", getInfoURL);

    axios.get(getInfoURL)
      .then((response) => {
        console.log(response.data);
        this.setState({
          allVehicles: response.data
        })
      })
      .catch((error) => {
        console.log("APP - ALL Vehicles", error);
      })
  }

  getAllVehicleLocations = (e) => {
    e.preventDefault();

    console.log("e", e)

    let getInfoURL = BASE_URL + LOC + ALL;

    console.log("App  ALL VEHICLE Location URL: ", getInfoURL);

    axios.get(getInfoURL)
      .then((response) => {
        console.log(response.data);
        this.setState({
          allLocations: response.data
        })
      })
      .catch((error) => {
        console.log("APP - ALL Vehicles", error);
      })
  }

  buildMapMarkers = (e) => {
    e.preventDefault();

    console.log("App buildMapMarkers(): ", e);
    console.log(this.state.allLocations);

    let markers = this.state.allLocations.map( (marker, index) => {
      return {
        marker
      }
    }) 

    console.log(markers[3].marker.id);


  }



  render() {


    return (
      <div className="Tracker-App" >
        <header className="Tracker-App-header">
          <img src={App_Image} className="Tracker-App-logo" alt="tracker App logo" />
          <h1>Welcome to Tracker App</h1>
        </header>
        <div>
          <nav>

            <Link to="/">Click</Link>
            {/* <Link to=""></Link> */}
          </nav>
          <div>
            {/* {AllButtons} */}
            <Button id='1' onClick={this.getAllVehicleInfo} variant="outline-primary">Get All Vehicle Info</Button>{' '}
            <Button id='2' onClick={this.getAllVehicleLocations} variant="outline-secondary">Get All Vehicle Locations</Button>{' '}
            <Button id='3' onClick={this.getVehicleInfoById} variant="outline-success">Vehicle 3 Info</Button>{' '}
            <Button id='4' onClick={this.buildMapMarkers} variant="outline-warning">Build Map Markers</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-light">Light</Button>{' '}
            <Button variant="outline-dark">Dark</Button>
          </div>

          <div>
            <ShowCard>Our Show{this.state}</ShowCard>
          </div>

          <div>
            <ShowMap>Our Map{this.state}</ShowMap>
          </div>

          <main>

            {/* <Route path="/" render={} /> */}
            {/* // we can give either a render or a component prop. */}
            {/* <Route path="" component={ } /> */}
          </main>
        </div>
      </div>
    );
  }
}


export default App;
