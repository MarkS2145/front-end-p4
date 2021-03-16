import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from "react-router-dom";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowCard.css';

require('dotenv').config()


const showCard = "";

class ShowCard extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }


    render() {
        console.log(this.props);
        console.log("hello ShowCard here: ", this.props)
        console.log("Selected ID: ", this.props.id)
        let cardInfo = this.props;

        return (
            <Card style={{ width: '18rem' }}>
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
                    <Card.Link href="#">Show Current Location</Card.Link>
                </Card.Body>
                <Card.Footer>Vehicle record last updated at:  {cardInfo.updatedAt}</Card.Footer>
            </Card>
        )
    }
}

export default ShowCard