import React, { Component, useDebugValue } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import { Button, ButtonGroup, Card, ListGroup, ListGroupItem } from "react-bootstrap";
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
      selected_vehicle_id: null,
      selected_vehicle_info: [],
      allVehicles: [],
      location: [],
      allLocations: [],
    }
    this.vehicleButtons = [];
    this.showCardState = [];
    this.showMapState = [];
    this.count = 0;
  }


  componentDidMount = () => {
    this.getAllVehicleInfo();
    this.getAllVehicleLocations();
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

  getAllVehicleInfo = () => {
    let getInfoURL = BASE_URL + INFO + ALL;
    // console.log("App get ALL VEHICLE INFO URL: ", getInfoURL);

    axios.get(getInfoURL)
      .then((response) => {
        // console.log(response.data);
        this.setState({
          allVehicles: response.data
        })
      })
      .catch((error) => {
        console.log("APP - ALL Vehicles", error);
      })
  }

  getAllVehicleLocations = () => {
    let getInfoURL = BASE_URL + LOC + ALL;
    // console.log("App  ALL VEHICLE Location URL: ", getInfoURL);

    axios.get(getInfoURL)
      .then((response) => {
        // console.log(response.data);
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

    let markers = this.state.allLocations.map((marker, index) => {
      return {
        marker
      }
    })

    console.log(markers[3].marker.id);


  }


  selectedVehicle = (e) => {
    this.setState({ selected_vehicle_id: e.target.id })
  }

  renderVehicleBtns = () => {
    console.log("Render Buttons Called");
    let vehicleButtonsList = null;
    if (this.state.allVehicles) {
      vehicleButtonsList = this.state.allVehicles.map((vehicle, index) => {
        return (
          <div className='button'>
            <Button id={vehicle.id} key={vehicle.id} onClick={this.selectedVehicle} variant="outline-primary">Show vehicle {vehicle.id} Info</Button>
          </div >
        )
      })
    }
    console.log(vehicleButtonsList);
    return vehicleButtonsList;
  }

  renderVehicleCard = () => {
    // console.log("Render Vehicle Card Called");
    // console.log(this.state.allVehicles)
    let vehicleCard = null;
    if (this.state.allVehicles) {
      vehicleCard = this.state.allVehicles.find((element => element.id == this.state.selected_vehicle_id))
    }
    this.setState({ selected_vehicle_info: vehicleCard });
  }

  myGary(){
    console.log('tic, toc');
  }


  render() {

    // Only call the timer once the first map has been shown
    if (this.count === 0){
      setInterval(this.myGary, 3000);
    }
    
    if( this.count > 1) {
      console.log("All Vehicle Info: ", this.state.allVehicles)
      console.log("All Vehicle Loc: ", this.state.allLocations)
      this.vehicleButtons = this.renderVehicleBtns()
      this.showCardState = <ShowCard {...this.state.selected_vehicle_info}></ShowCard>
      this.showMapState = <ShowMap {...this.state}></ShowMap> //allLocations
    }
    
    console.log("App render ran this many times: ", this.count)

    this.count += 1;

    return (
      <div className="Tracker-App" >
        <header className="Tracker-App-header">
          <img src={App_Image} className="Tracker-App-logo" alt="tracker App logo" />
          <h1>Welcome to Tracker App</h1>
        </header>
        <div>
          <nav>

            {/* <Link to="/">Click</Link> */}
            {/* <Link to=""></Link> */}
          </nav>
          <div className="Buttons_Main">
            <ButtonGroup aria-label="Select a Vehicle ID for more information">
              {this.vehicleButtons}
            </ButtonGroup>


            <Button id='1' onClick={this.getAllVehicleInfo} variant="outline-primary">Get All Vehicle Info</Button>{' '}
            <Button id='2' onClick={this.getAllVehicleLocations} variant="outline-secondary">Get All Vehicle Locations</Button>{' '}
            <Button id='3' onClick={this.renderVehicleCard} variant="outline-success">render Card</Button>{' '}
            {/* <Button id='4' onClick={this.buildMapMarkers} variant="outline-warning">Build Map Markers</Button>{' '}
          <Button variant="outline-danger">Danger</Button>{' '}
          <Button variant="outline-info">Info</Button>{' '}
          <Button variant="outline-light">Light</Button>{' '}
          <Button variant="outline-dark">Dark</Button> */}
          </div>

          <div className="Show_Card">
              {this.showCardState}
          </div>

          <div className="Show_Map">
              {this.showMapState}
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
