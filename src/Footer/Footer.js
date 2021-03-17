import React, { Component } from 'react';
import {  Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';



class Footer extends Component {

    render() {
        console.log("Footer here...")

        return (
            <Card
                className="Footer" 
                bg='light'
                >
                <Card.Footer>
                    <div id="Developed">&copy;2021 Developed by Mark Stuebs</div>
                    <div id="Thoughtful">"Be kind to yourself, and others"</div>
                </Card.Footer>
            </Card>
        )
    }
}

export default Footer