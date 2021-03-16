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

    buildCard = () => {
        let selId = this.props.selected_vehicle_id;

        // console.log("buildCard here: ", (selId !== null))
        // console.log(this.props.children.allVehicles)

        let cardInfo = null;
        this.props.allVehicles.map((info) => {
            if (info.id === selId) {
                cardInfo = info;
            }
        })

        console.log("mapped card to: ", cardInfo)

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

    render() {
        console.log(this.props);



        console.log("hello ShowCard here: ", this.props)
        console.log("Selected ID: ", this.props.selected_vehicle_id)

        // debugger

        let infoCard = null;
        if (this.props.selected_vehicle_id !== null) {
            infoCard = this.buildCard();
        }
        return (
            <div>
                {infoCard}
            </div >
        );
    }
}

export default ShowCard