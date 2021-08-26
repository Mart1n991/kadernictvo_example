import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import razor from "../../assets/straight-razor.png";
import brushes from "../../assets/brushes.jpg";
import barberPole from "../../assets/barber-pole.jpg";
import "../Services/Services.css";

export default function Apointment() {
    return (
        <section>
           <Container className="my-5 text-center">
                <Row xs={12}>
                    <Col xs={12} md={6}>
                        <div className="service-text-container">
                            <span>rezervujte si</span>
                            <h2>stretnutie</h2>
                            <img src={razor}/>
                        </div>
                        <div className="service-description-container">
                            <p>Či už ste nový alebo vracajúci sa zákazník, ktorý túži vidieť, o čom je Chivalry, neváhajte si rezervovať termín telefonicky alebo online. Nemali by ste sa hanbiť za to, ako vyzeráte </p>
                            <a href="#">rezervovať termín</a>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <img src={brushes} className="mt-3"></img>
                    </Col>
                    <Col xs={12} md={3} className="mt-3">
                        <img src={barberPole}/>
                    </Col>
                </Row>
            </Container>  
        </section>
    )
}
