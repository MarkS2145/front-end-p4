import React, { Component } from 'react';  //, useDebugValue 
// import ReactDOM from 'react-dom';
// import { Route, Link, Switch } from "react-router-dom";
import { Button, ButtonGroup} from "react-bootstrap"; //Card, ListGroup, ListGroupItem
// import  from "bootstrap"
// import logo from '../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from '../Header/Header';
import ShowMap from '../ShowMap/ShowMap';
import ShowCard from '../ShowCard/ShowCard';
import Footer from '../Footer/Footer';
// import App_Image from '../app_image.jpeg'

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
      refreshAllInfo: this.getAllVehicleInfo,
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

  selectedVehicleSetState = (e) => {
    this.setState({
      selected_vehicle_id: e.target.id,
      selected_vehicle_info: this.getSelectedVehicleInfo(e.target.id)
    })
  }

  getSelectedVehicleInfo(inValue) {
    let vehicleInfo = null;
    vehicleInfo = this.state.allVehicles.find(element => element.id == inValue)
    // console.log("gSelVehInfo() called", inValue, " Returning", vehicleInfo)
    return vehicleInfo;
  }

  renderVehicleBtns = () => {
    let vehicleButtonsList = null;
    if (this.state.allVehicles) {
      vehicleButtonsList = this.state.allVehicles.map((vehicle, index) => {
        return (
          <div className='button'>
            <Button id={vehicle.id} key={vehicle.id} onClick={this.selectedVehicleSetState} variant="outline-primary">Vehicle {vehicle.id}</Button>
          </div >
        )
      })
    }
    console.log("Render Buttons Called", vehicleButtonsList);
    return vehicleButtonsList;
  }


  myGary() {
    console.log('tic, toc');
  }

  dropMessage(){
    console.log("App drop Message clicked")
}


  render() {

    // Only call the timer once the first map has been shown
    if (this.count === 0) {
      setInterval(this.myGary, 3000);
    }

    if (this.count > 1) {
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

        <Header></Header>

        <main>

          <div className="Buttons-Main">
            <h4 className="Select-Hdr">Select a Vehicle to view details and map location</h4>
            <ButtonGroup aria-label="Select a Vehicle ID for more information">
              {this.vehicleButtons}
            </ButtonGroup>
          </div>

          <div className="Display-Vehicle-Info">
            <div className="Show-Card">
              {this.showCardState}
            </div>

            <div className="Show-Map">
              {this.showMapState}
            </div>
          </div>

          <div className="Get-All-Btns">
            <Button id='1' onClick={this.getAllVehicleInfo} variant="outline-primary">Get All Vehicle Info</Button>{' '}
            <Button id='2' onClick={this.getAllVehicleLocations} variant="outline-secondary">Get All Vehicle Locations</Button>{' '}
          </div>

        </main>

        <Footer></Footer>
      </div>
    );
  }
}

export default App;
