import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button, Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ShowCard.css';
// import Jobs from '../Jobs/Jobs';

require('dotenv').config()

class ShowCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        console.log(props)
    }

    showModal = () => {
        console.log("Show Modal clicked", this.state.show)
        this.setState({ show: true });
    }

    hideModal = () => {
        this.setState({ show: false });
    }


    render() {
        // console.log("hello ShowCard here: ", this.props)
        console.log("ShowCard - Selected ID: ", this.props.id)
        let cardInfo = this.props;

        return (
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
                    <Button onClick={this.showModal}>Open Jobs</Button>
                    <Modal show={this.state.show} onHide={this.hideModal}>
                        <div className="Modal">
                            <Modal.Header closeButton>
                            <Modal.Title>Current Job</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>I am working hard out in the field for Uncle Bob.</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.hideModal}>Close</Button>
                        </Modal.Footer>
                        </div>
                        
                    </Modal>
                </Card.Body>
                <Card.Footer>Vehicle record last updated at:  {cardInfo.updatedAt}</Card.Footer>
            </Card>
        )
    }
}

export default ShowCard