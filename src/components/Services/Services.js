import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mustache from '../../assets/mustache.png';
import shaving from "../../assets/man-shaving.jpg";
import scissors from "../../assets/scissors-home.jpg";
import "./Services.css";

export default function Services() {
    return (
        <section>
            <Container className="my-5 text-center">
                <Row xs={12}>
                    <Col xs={12} md={6}>
                        <div className="service-text-container">
                            <span>gentleman</span>
                            <h2>služby</h2>
                            <img src={mustache}/>
                        </div>
                        <div className="service-description-container">
                            <p>Chivalry je kompletný servisný salón pre náročného gentlemana. Ponúkame širokú škálu služieb, ktorými sa určite pochválite. Kliknutím nižšie zobrazíte našu ponuku.</p>
                            <a href="#">pozrieť naše služby</a>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <img src={shaving} className="mt-3"></img>
                    </Col>
                    <Col xs={12} md={3} className="mt-3">
                        <img src={scissors}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
