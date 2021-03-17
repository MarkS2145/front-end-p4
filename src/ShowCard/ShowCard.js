import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Route, Link, Switch } from "react-router-dom";
import {  Card, ListGroup, ListGroupItem } from "react-bootstrap"; //Button,
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowCard.css';

require('dotenv').config()

class ShowCard extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    message(){
        console.log("Show Card message Here...")
    }

    render() {
        // console.log("hello ShowCard here: ", this.props)
        console.log("ShowCard - Selected ID: ", this.props.id)
        let cardInfo = this.props;

        return (
            // <Card style={{ width: '18rem' }}>
            <Card>
                <Card.Img variant="top" src={cardInfo.img_url} />
                <Card.Body>
                    <Card.Title>
                        Vehicle: {cardInfo.vehicle_name},
                        </Card.Title>
                    <Card.Subtitle>Vehicle id: {cardInfo.id}</Card.Subtitle>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>

                <ListGroup className="list-group-flush">
                    <ListGroupItem>Driver: {cardInfo.driver_name}</ListGroupItem>
                    <ListGroupItem>Phone: {cardInfo.phone_number}</ListGroupItem>
                </ListGroup>

                <Card.Body>
                    <input type="button" onClick={this.message} value="View Current Job"></input>
                </Card.Body>
                <Card.Footer>Vehicle record last updated at:  {cardInfo.updatedAt}</Card.Footer>
            </Card>
        )
    }
}

export default ShowCard