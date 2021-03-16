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
        console.log("hello ShowCard here: ", this.props.children)

        if (this.props.children) {
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.children[1].vehicle.img_url} />
                    <Card.Body>
                        <Card.Title>
                            Vehicle: {this.props.children[1].vehicle.vehicle_name},
                            
                        </Card.Title>
                        <Card.Subtitle>Vehicle id: {this.props.children[1].vehicle.id}</Card.Subtitle>
                        <Card.Text>
                            
                        </Card.Text>
                    </Card.Body>

                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Driver: {this.props.children[1].vehicle.driver_name}</ListGroupItem>
                        <ListGroupItem>Phone: {this.props.children[1].vehicle.phone_number}</ListGroupItem>
                    </ListGroup>
                    
                    <Card.Body>
                        <Card.Link href="#">Show Current Location</Card.Link>
                    </Card.Body>
                    <Card.Footer>Vehicle record last updated at:  {this.props.children[1].vehicle.updatedAt}</Card.Footer>
                </Card>
            )
                
        }
        else {
            return (null);
        }
    }
}

export default ShowCard